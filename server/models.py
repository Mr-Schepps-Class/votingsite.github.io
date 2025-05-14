from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "User"
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String(30))


class Website(db.Model):
    __tablename__ = "Website"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String)
    url = db.Column(db.String, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    
class Votes(db.Model):
    __tablename__ = "Votes"
    id = db.Column(db.Integer, primary_key = True)
    rating = db.Column(db.Integer, unique = False)
    userId = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    websiteId = db.Column(db.Integer, db.ForeignKey("Website.id"), nullable = False)
    
    __table_args__ = (db.UniqueConstraint('userId', 'websiteId', name='unique_user_website'), )






