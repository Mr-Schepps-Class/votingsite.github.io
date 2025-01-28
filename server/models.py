from flask_sqlalchemy import SQLAlchemy
import uuid


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, unique = True)
    password = db.Column(db.String(30))

class Votes(db.Model):
    __tablename__ = "votes"

    






