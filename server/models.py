from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String(30))


class Websites(db.Model):
    __tablename__ = "websites"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, unique = False)
    url = db.Column(db.String, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    
class Votes(db.Model):
    __tablename__ = "Votes"
    id = db.Column(db.Integer, primary_key = True)
    rating = db.Column(db.Integer, unique = False)
    userId = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    websiteId = db.Column(db.Integer, db.ForeignKey("Websites.id"), nullable = False)






