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
    name = db.Column(db.String)
    url = db.Column(db.String, unique = True)
    userId = db.Column(db.Integer, db.ForeignKey("User.id"), nullable = False)
    







