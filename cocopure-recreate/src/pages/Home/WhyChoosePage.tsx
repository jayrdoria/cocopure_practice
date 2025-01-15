// src/pages/WhyChoosePage.tsx
import React from "react";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";

const WhyChoosePage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Cocopure
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-4 md:py-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <Leaf className="h-16 w-16 text-green-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            100% Natural
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <Heart className="h-16 w-16 text-red-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Health Benefits
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <Shield className="h-16 w-16 text-blue-500 mb-4 pb-2" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Assured
          </h3>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePage;
