import React from 'react';

function PetCards() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Explore Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Example Pet Card (Repeat as needed) */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <img
            src="https://placekitten.com/300/200" // Replace with actual image URL
            alt="Pet"
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Pet Name</h2>
          <p className="text-gray-600">
            Breed: Example Breed <br />
            Age: 2 years
          </p>
        </div>
        {/* End Example Pet Card */}
      </div>
    </div>
  );
}

export default PetCards;
