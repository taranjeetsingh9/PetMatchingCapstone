from flask import Flask, request, jsonify
from models import db, User, Pet
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

# for testing purpose only
@app.route('/api/users', methods=['GET'])
def handle_users():
        users = [
            {
                "id": 1,
                "username": "john_doe",
                "age": 25,
                "gender": "Male",
                "location": "New York",
                "pet_preference": "Dog"
            },
            {
                "id": 2,
                "username": "jane_smith",
                "age": 30,
                "gender": "Female",
                "location": "Los Angeles",
                "pet_preference": "Cat"
            }
        ]
        return jsonify(users), 200



# Route to get all users with hardcoded data

# Route to create a user with hardcoded data
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        username=data['username'],
        age=data['age'],
        gender=data['gender'],
        location=data['location'],
        pet_preference=data['pet_preference']
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201
# Route to get user details with hardcoded data
@app.route('/api/users/<int:id>', methods=['GET'])
def get_user(id):
    # Hardcoded user data (for testing purposes)
    if id == 1:
        user = {
            "id": 1,
            "username": "john_doe",
            "age": 30,
            "gender": "Male",
            "location": "New York",
            "pet_preference": "Dog"
        }
        return jsonify(user)
    return jsonify({"message": "User not found"}), 404

# Route to create a pet with hardcoded data
@app.route('/api/pets', methods=['POST'])
def create_pet():
    data = request.get_json()
    new_pet = Pet(
        name=data['name'],
        type=data['type'],
        age=data['age'],
        size=data['size'],
        location=data['location']
    )
    db.session.add(new_pet)
    db.session.commit()
    return jsonify({"message": "Pet created successfully"}), 201

# Route to get all pets with hardcoded data
@app.route('/api/pets', methods=['GET'])
def get_pets():
    # Hardcoded pet data (for testing purposes)
    pets = [
        {"id": 1, "name": "Buddy", "type": "Dog", "age": 3, "size": "Medium", "location": "New York"},
        {"id": 2, "name": "Max", "type": "Cat", "age": 2, "size": "Small", "location": "Los Angeles"}
    ]
    return jsonify(pets)

# Route to match user preferences with pets with hardcoded data
@app.route('/api/match', methods=['POST'])
def match_pets():
    data = request.get_json()
    user = User.query.get(data['user_id'])

    if not user:
        return jsonify({"message": "User not found"}), 404
    
    # Fetch pets matching the user's preference and that are NOT adopted
    matched_pets = Pet.query.filter_by(type=user.pet_preference, adopted=False).all()
    
    matched_pet_list = [{"id": pet.id, "name": pet.name, "type": pet.type} for pet in matched_pets]
    
    return jsonify({"matched_pets": matched_pet_list})


# pet adoption feature
@app.route('/api/adopt/<int:pet_id>', methods=['POST'])
def adopt_pet(pet_id):
    pet = Pet.query.get(pet_id)
    if not pet:
        return jsonify({"message": "Pet not found"}), 404
    
    # Check if the pet has already been adopted
    if pet.adopted:
        return jsonify({"message": "This pet has already been adopted"}), 400
    
    # Update the pet's adoption status
    pet.adopted = True
    db.session.commit()

    return jsonify({"message": f"Pet {pet.name} adopted successfully!"}), 200

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5001)
