import React from "react";
import {
  FaCar,
  FaMapMarkerAlt,
  FaRoad,
  FaShieldAlt,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCar className="text-6xl" />,
      title: "Variety of Cars",
      description:
        "Choose from SUV, SEDAN & HATCHBACK",
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-6xl" />
      ),
      title: "Multiple Pickup Location",
      description:
        "Already growing list of cities and much more",
    },
    {
      icon: <FaRoad className="text-6xl" />,
      title: "Go Anywhere in India",
      description:
        "Drive through North, South, East and West",
    },
    {
      icon: <FaShieldAlt className="text-6xl" />,
      title: "License Certified",
      description:
        "Go anywhere and come anywhere. No questions asked",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-3">
        <h2 className="text-center text-gray-700 text-2xl lg:text-4xl  mb-8 mt-3 font-bold">
          Why Choose Us
        </h2>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-600 text-white p-6 rounded-lg text-center flex flex-col items-center"
            >
              <div className="mb-4 flex items-center justify-center h-20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
