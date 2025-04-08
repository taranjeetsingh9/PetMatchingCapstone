import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto py-4 px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer" onClick={() => window.location.reload()}>
          PetConnect
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-4">
        <Link to="/pets" className="text-gray-700 hover:text-indigo-500">Explore</Link>
          <button className="rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            <div className="h-8 w-8 rounded-full flex items-center justify-center">
              Profile
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default TopBar;
