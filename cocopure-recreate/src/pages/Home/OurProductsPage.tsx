// src/pages/OurProductsPage.tsx
import React from "react";

const OurProductsPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-20 px-4 md:px-8 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://placehold.co/800x600"
            alt="Our Products"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 md:pl-8">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Products
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          {/* Buttons */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-2">
            <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-3xl shadow hover:bg-green-600 transition duration-300">
              Discover Cocopure
            </button>
            <button className="px-6 py-2 border border-gray-500 text-gray-500 font-semibold rounded-3xl shadow hover:bg-gray-100 hover:text-gray-900 transition duration-300">
              Discover Cocochips
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsPage;
