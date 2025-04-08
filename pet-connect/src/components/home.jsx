import React from 'react';

function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Logo and Project Name */}
      <div className="flex flex-col items-center mb-6">
        <img src="/logo.png" alt="PetConnect Logo" className="h-20 w-20 mb-2" />
        <h1 className="text-3xl font-bold text-indigo-600">PetConnect</h1>
      </div>

      {/* Descriptive Text */}
      <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
        Give a loving home to a pet in need. Our adoption process connects hearts
        and paws, creating lifelong bonds and happy families.
      </p>

      {/* Find Your True Companion Header */}
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
        Find Your True Companion
      </h2>

      {/* Browse All Pets Button */}
      <div className="text-center mb-8">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Browse All Pets
        </button>
      </div>

      {/* Adoption Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Dog Adoption Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fas fa-dog fa-3x text-indigo-600 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Dog Adoption</h2>
          <p className="text-gray-600">
            Find your loyal companion. Dogs of all breeds and ages waiting for
            their forever homes.
          </p>
        </div>

        {/* Cat Adoption Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fas fa-cat fa-3x text-indigo-600 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Cat Adoption</h2>
          <p className="text-gray-600">
            Meet our feline friends. From playful kittens to mature cats seeking
            loving families.
          </p>
        </div>

        {/* Small Pets Adoption Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <i className="fas fa-paw fa-3x text-indigo-600 mb-4"></i>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Small Pets</h2>
          <p className="text-gray-600">
            Perfect for apartments. Rabbits, hamsters, and other small pets ready
            for adoption.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
