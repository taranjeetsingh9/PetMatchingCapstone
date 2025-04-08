import React from 'react';
import { Link } from 'react-router-dom';

function PetCards() {
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
      tags: ['Playful', 'Big', 'Cuddly'],
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
      tags: ['Calm', 'Affectionate', 'Indoor'],
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
      tags: ['Energetic', 'Small', 'Friendly'],
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
      tags: ['Loyal', 'Protective', 'Intelligent'],
    },
    {
      id: 5,
      name: 'Lucy',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Loves to play fetch',
      breed: 'Labrador',
      age: '1.5 years',
      size: 'Large',
      color: 'Yellow',
      tags: ['Playful', 'Active', 'Friendly'],
    },
    {
      id: 6,
      name: 'Simba',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'A very cuddly cat',
      breed: 'Maine Coon',
      age: '2 years',
      size: 'Large',
      color: 'Tabby',
      tags: ['Cuddly', 'Large', 'Gentle'],
    },
    {
      id: 7,
      name: 'Bella',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Enjoys quiet evenings',
      breed: 'Cocker Spaniel',
      age: '5 years',
      size: 'Medium',
      color: 'White',
      tags: ['Calm', 'Quiet', 'Affectionate'],
    },
    {
      id: 8,
      name: 'Rocky',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Always ready for an adventure',
      breed: 'Terrier Mix',
      age: '2.5 years',
      size: 'Small',
      color: 'Mixed',
      tags: ['Energetic', 'Adventurous', 'Small'],
    },
    {
      id: 9,
      name: 'Daisy',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Gentle and sweet',
      breed: 'Beagle',
      age: '3 years',
      size: 'Small',
      color: 'Tricolor',
      tags: ['Gentle', 'Sweet', 'Small'],
    },
    {
      id: 10,
      name: 'Charlie',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Playful and energetic',
      breed: 'Poodle',
      age: '1 year',
      size: 'Medium',
      color: 'White',
      tags: ['Playful', 'Energetic', 'Intelligent'],
    },
    {
      id: 11,
      name: 'Oliver',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Curious and adventurous',
      breed: 'Siamese',
      age: '2 years',
      size: 'Medium',
      color: 'Cream',
      tags: ['Curious', 'Adventurous', 'Vocal'],
    },
    {
      id: 12,
      name: 'Luna',
      image: 'https://placehold.co/200x150', // Replace with actual image URL
      description: 'Calm and affectionate',
      breed: 'Ragdoll',
      age: '1.5 years',
      size: 'Large',
      color: 'White and Cream',
      tags: ['Calm', 'Affectionate', 'Large'],
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Available for Adoption Row */}
      <div className="md:flex md:justify-between md:items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Available for Adoption
        </h2>
        <Link
          to="/pet-match"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4 md:mt-0"
        >
          Find Your Preference
        </Link>
      </div>

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
              {/* Tags */}
              <div className="mt-4 flex flex-wrap">
                {pet.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Available for Fostering Row */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
        Available for Fostering
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
              {/* Tags */}
              <div className="mt-4 flex flex-wrap">
                {pet.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PetCards;
