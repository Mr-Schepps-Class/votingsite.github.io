import os
from flask import Flask, request, jsonify, session, send_from_directory
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
import base64
import math



#configuring app, cors, hashing, and making sure the session doesnt reset between queries
app = Flask(__name__)
app.config.from_object(ApplicationConfig)
app.config.update(SESSION_COOKIE_SAMESITE="None", SESSION_COOKIE_SECURE=True)
UPLOAD_FOLDER = 'server/static'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


CORS(app, supports_credentials=True)
bcrypt = Bcrypt(app)

db.init_app(app)
with app.app_context():
    #db.drop_all()
    db.create_all()

server_session = Session(app)

@app.route("/vote", methods = ["POST"])
def vote():
    value = request.json["Val"]
    email = request.json['email']
    url = request.json['url']

    if("email" not in request.json):
        return jsonify({"error": "Please Login"}), 400

    user = User.query.filter_by(email = email).first()
    site = Website.query.filter_by(url = url).first()

    print(user.id, site.id)
    vote = Votes.query.filter_by(userId=user.id, websiteId=site.id).first()




    if vote:
        vote.rating = value  # update existing vote
    else:
        vote = Votes(rating=value, userId=user.id, websiteId=site.id)
        db.session.add(vote)

    db.session.commit()

    return jsonify({"message": "Voted"}), 200



@app.route("/getSize", methods = ["GET"])
def getSize():
    print(db.session.query(Website).count())
    return jsonify({
        "size" : db.session.query(Website).count()
    })

@app.route('/query', methods = ['GET'])
def query():
    id = request.args.get("id")

    id = int(id) + 1

    site = Website.query.filter_by(id = id).first()

    if(site is None):
        return jsonify({"error" : "No site with this id"}), 401
    
    rating = db.session.query(func.avg(Votes.rating)).filter(Votes.websiteId == site.id).scalar()

    if(rating is None):
        rating = 0
    else:
        rating *= 100
        rating = math.ceil(rating)
        rating //= 10


    
    

    return jsonify({
        "name" : site.name,
        "url" : site.url,
        "userId" : site.userId,
        "rating" : rating
    })


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

    if("email" not in request.json):
        return jsonify({"error": "Please Login"}), 400
    email = request.json['email']
    url = request.json['url']
    title = request.json["title"]
    
    user = User.query.filter_by(email = email).first()

    if not url:
        return jsonify({"error": "No URL provided"}), 400

    if(Website.query.filter_by(url = url).first() is not None):
        return jsonify({"error": "This url already exists"}), 400

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    

    
    
    if(Website.query.filter_by(userId = user.id).first() is None):
        nsite = Website(name = title, url = url, userId = user.id)
        db.session.add(nsite)
    else:
        site = Website.query.filter_by(userId = user.id).first()

        site.name = title
        site.url = url

    image_data = base64.b64decode(loop.run_until_complete(take_screenshot(url)))
    file_path = os.path.join(UPLOAD_FOLDER, str(user.id) + ".png",)

    with open(file_path, "wb") as f:
        f.write(image_data)

    
    db.session.commit()

    

    return jsonify({"message": "File downloaded successfully"}), 200

  

@app.route("/register", methods = ["POST"])
def register_user():
    email = request.json["email"]
    password = request.json["password"]

    exists = User.query.filter_by(email = email).first() is not None

    if exists:
        return jsonify({"error": "User already exists"}), 409
    
    hshpass = bcrypt.generate_password_hash(password)

    print(email, password)

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
    
    print("FUCK", email, password, user.email)

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