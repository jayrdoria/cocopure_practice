// src/pages/BenefitsPage.tsx
import React, { useState } from "react";

const BenefitsPage: React.FC = () => {
  // State for active benefit
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  // Benefits Data
  const benefits = [
    {
      id: 1,
      title: "Lauric Acid",
      description: "Supports immune system and promotes heart health.",
      position: { x: 25, y: 25 },
    },
    {
      id: 2,
      title: "Medium-Chain Triglycerides",
      description: "Boosts energy and supports weight management.",
      position: { x: 75, y: 40 },
    },
    {
      id: 3,
      title: "Antioxidants",
      description: "Helps fight free radicals and slows aging.",
      position: { x: 20, y: 70 },
    },
    {
      id: 4,
      title: "Hydration",
      description: "Enhances skin health and maintains hydration.",
      position: { x: 70, y: 80 },
    },
  ];

  return (
    <div className="bg-white text-gray-900 py-12 px-4 md:px-8">
      <div className="container mx-auto space-y-8">
        {/* First Row: Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover the Benefits
          </h2>
        </div>

        {/* Second Row: Subtitle */}
        <div className="text-center">
          <p className="text-gray-600">
            Click on the points to explore the amazing benefits of our coconut
            products.
          </p>
        </div>

        {/* Third Row: Interactive Banner */}
        <div
          className="relative h-[600px] transition-opacity duration-1000"
          style={{ opacity: 1 }}
        >
          <div className="relative w-full h-full">
            <img
              src="https://placehold.co/800x800"
              alt="Coconut cross-section"
              className="mx-auto h-full object-contain"
            />

            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${benefit.position.x}%`,
                  top: `${benefit.position.y}%`,
                }}
              >
                <div
                  className={`w-4 h-4 rounded-full bg-blue-500 hover:bg-blue-600 
                    transition-all duration-300 animate-pulse
                    ${
                      activeBenefit === benefit.id ? "scale-150" : "scale-100"
                    }`}
                  onClick={() =>
                    setActiveBenefit(
                      activeBenefit === benefit.id ? null : benefit.id
                    )
                  }
                />

                {activeBenefit === benefit.id && (
                  <div
                    className="absolute z-10 w-64 p-4 mt-4 bg-white rounded-lg shadow-xl 
                      transform -translate-x-1/2 transition-all duration-300"
                  >
                    <h3 className="text-sm sm:text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
