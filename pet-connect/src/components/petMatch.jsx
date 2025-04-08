import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function PetMatch() {
  const [imageIndex, setImageIndex] = useState(0);
  const petImages = [
    'https://placedog.net/600/600?id=1',
    'https://placedog.net/600/600?id=2',
    'https://placedog.net/600/600?id=3',
  ];

  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % petImages.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [petImages.length]);

  const handleFindPetsClick = () => {
    navigate('/matched-pet'); // Navigate to /matched-pet route
  };

  return (
    <div className="container mx-auto py-8 px-4 h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Animated Pet Pictures */}
        <div className="flex justify-center">
          <div className="w-100 h-100 rounded-lg overflow-hidden shadow-lg">
            <img
              src={petImages[imageIndex]}
              alt="Animated Pet"
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Textbox and Button */}
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
            <textarea
              className="w-full h-56 border rounded-2xl p-6 mb-8 focus:outline-none resize-none text-lg"
              placeholder="Tell us about your ideal pet..."
            ></textarea>
            <div className="text-left">
              <button
                onClick={handleFindPetsClick} // Add onClick handler
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded text-xl"
              >
                Find Pets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetMatch;
