import React from "react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🚗", // You can replace this with an actual SVG or icon from a library
      title: "Unlimited km to drive",
    },
    {
      icon: "🏙️",
      title: "100+ Locations in 16 cities",
    },
    {
      icon: "🌍",
      title: "Anywhere delivery",
    },
    {
      icon: "🛡️",
      title: "Privacy & freedom",
    },
  ];

  return (
    <div className="bg-gray-50 ">
      <h2 className="text-2xl font-bold text-center text-purple-900 mb-6 ">
        Features & Benefits of Renting a
        Self-Drive Car
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 ">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md text-gray-800 duration-700 hover:bg-blue-950 hover:text-white"
          >
            <div className="text-4xl mb-4 ">
              {benefit.icon}
            </div>
            <p className="text-center text-lg font-medium ">
              {benefit.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
