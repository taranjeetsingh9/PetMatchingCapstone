import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between md:items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <a href="#" className="text-gray-500 hover:text-indigo-600 mr-4">
              <i className="fab fa-facebook-f fa-lg"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 mr-4">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 mr-4">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">
              <i className="fab fa-linkedin-in fa-lg"></i>
            </a>
          </div>

          {/* Other Links */}
          <div>
            <ul className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center md:items-start">
              <li className="mr-6 mb-2"><a href="#" className="text-gray-600 hover:text-indigo-600">Mission</a></li>
              <li className="mr-6 mb-2"><a href="#" className="text-gray-600 hover:text-indigo-600">About Us</a></li>
              <li className="mr-6 mb-2"><a href="#" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
              <li className="mr-6 mb-2"><a href="#" className="text-gray-600 hover:text-indigo-600">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="text-gray-600 hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} PetConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
