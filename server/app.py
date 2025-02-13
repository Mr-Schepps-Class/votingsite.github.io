import os
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_session import Session
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from models import db, User, Website, Votes
import requests
import pandas as pd
from sqlalchemy import func
from pyppeteer import launch
import asyncio



#configuring app, cors, hashing, and making sure the session doesnt reset between queries
app = Flask(__name__)
app.config.from_object(ApplicationConfig)
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
app.config.update(UPLOAD_FOLDER = '/Users/nathan/Documents/GitHub/votingsite.github.io/server/uploads')

CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)

db.init_app(app)
with app.app_context():
    #db.drop_all()
    db.create_all()

server_session = Session(app)

@app.route("/getSize", methods = ["GET"])
def getSize():
    return jsonify({
        "size" : len(Website)
    })

@app.route('/query', methods = ['GET'])
def query():
    id = request.json('id')

    site = Website.query.filter(id = id).first()

    if(site is None):
        return jsonify({"error" : "No site with this id"}), 401
    
    rating = session.query(func.avg(Votes.value)).filter(Votes.websiteId == site.id).scalar()
    
    return jsonify({
        "name" : site.name,
        "url" : site.url,
        "userId" : site.userId,
        "rating" : rating
    }), 200


async def take_screenshot(url):
    """Launch browser, take screenshot, and return image data"""
    browser = await launch(
    handleSIGINT=False,
    handleSIGTERM=False,
    handleSIGHUP=False
)
    page = await browser.newPage()
    await page.goto(url, {'waitUntil': 'networkidle2'})
    screenshot = await page.screenshot({'encoding': 'base64'})
    await browser.close()
    return screenshot


@app.route('/upload', methods=['POST'])
def upload_file():
    email = request.json['email']
    url = request.json['url']
    title = request.json["title"]
    
    user = User.query.filter_by(email = email).first()

    if not url:
        return jsonify({"error": "No URL provided"}), 400

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    image_data = loop.run_until_complete(take_screenshot(url))

    print(type(image_data))
    
    if(Website.query.filter_by(userId = user.id).first() is None):
        nsite = Website(name = title, url = url, userId = user.id)
        db.session.add(nsite)
    else:
        site = Website.query.filter_by(userId = user.id).first()

        site.name = title
        site.url = url
    
    db.session.commit()

    websites = Website.query.all()
    for site in websites:
        print(site.id, site.name, site.url, site.userId)
    
    


    return jsonify({"message": "File downloaded successfully"}), 200

  

@app.route("/register", methods = ["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    exists = User.query.filter_by(email = email).first() is not None

    if exists:
        return jsonify({"error": "User already exists"}), 409
    
    hshpass = bcrypt.generate_password_hash(password)

    nuser = User(email = email, password =hshpass)

    db.session.add(nuser)
    db.session.commit()

    session["user_id"] = nuser.id
    return jsonify({
        "id": nuser.id,
        "email":nuser.email
    })

@app.route("/login", methods = ["POST"])
def login_user():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email = email).first()
    
    

    if user is None:
        return jsonify({"error" : "Unathorized"}), 401

    if not bcrypt.check_password_hash(user.password,password):
        return jsonify({"error": "Unauthorized"}), 401
    
    

    session["user_id"] = user.id

    return jsonify({
        "id" : user.id,
        "email" : user.email
    })

@app.route("/logout", methods=["POST", 'GET'])
def logout_user():
    session.pop("user_id")
    return "200"

@app.route("/@me", methods = ["GET"])
def get_current_user():


    if("user_id" not in session):
        return jsonify({"error": "Unauthorized"}), 401
    
    
    user_id = session["user_id"]

    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    }) 
if __name__ == '__main__':
    app.run(debug=True)