// src/pages/Home.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-4 md:px-8">
        <div className="text-left text-white space-y-4 md:space-y-6 max-w-lg">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover the Pure <br /> Essence of Coconut
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-3xl shadow hover:bg-green-600 transition duration-300">
              Explore Products
            </button>
            <button className="px-6 py-3 border border-white text-white font-semibold rounded-3xl shadow hover:bg-gray-100 hover:text-gray-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;