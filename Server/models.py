#this is just a practice for checking the set up of the app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer)
    gender = db.Column(db.String(10))
    location = db.Column(db.String(100))
    pet_preference = db.Column(db.String(50))

    def __repr__(self):
        return f'<User {self.username}>'

class Pet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    type = db.Column(db.String(50))
    age = db.Column(db.Integer)
    size = db.Column(db.String(50))
    location = db.Column(db.String(100))
    adopted = db.Column(db.Boolean, default=False)  

    def __repr__(self):
        return f'<Pet {self.name}>'