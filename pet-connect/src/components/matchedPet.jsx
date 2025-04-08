import React from 'react';

function MatchedPet() {
  // Sample pet data (replace with your actual data)
  const pets = [
    {
      id: 1,
      name: 'Buddy',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Friendly and playful',
      breed: 'Golden Retriever',
      age: '3 years',
      size: 'Large',
      color: 'Golden',
    },
    {
      id: 2,
      name: 'Whiskers',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Calm and affectionate',
      breed: 'Siamese',
      age: '1 year',
      size: 'Medium',
      color: 'Cream',
    },
    {
      id: 3,
      name: 'Coco',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Energetic and curious',
      breed: 'Yorkie',
      age: '2 years',
      size: 'Small',
      color: 'Brown',
    },
    {
      id: 4,
      name: 'Max',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Loyal and Protective',
      breed: 'German Sheperd',
      age: '4 years',
      size: 'Large',
      color: 'Black',
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Pets of Your Choice Row */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Pets of Your Choice
      </h2>
      <div className="overflow-x-auto whitespace-nowrap py-4">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="inline-block w-64 rounded-lg shadow-md bg-white mr-4"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
                <i className="fas fa-heart text-red-500 cursor-pointer"></i>
              </div>
              <p className="text-gray-600 mb-2">{pet.description}</p>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Breed: {pet.breed}</span>
                <span>Age: {pet.age}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-700 mt-2">
                <span>Size: {pet.size}</span>
                <span>Color: {pet.color}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchedPet;
