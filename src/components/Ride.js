import React from "react";

const WhyRideWithUs = () => {
  const features = [
    {
      icon: "💳", // Placeholder icon for payment options
      title: "Multiple Payment Options",
      description:
        "Don't let payment mode come in between you and your dream car! Choose from credit card, debit card, net banking, or UPI.",
    },
    {
      icon: "❌",
      title: "Easy Cancellation",
      description:
        "Change of plans made easy with MyChoize. Enjoy the flexibility to cancel your rental car reservation with just a few clicks.",
    },
    {
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "We guarantee the lowest prices on self-drive car rentals and subscriptions in India!",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-2xl font-bold text-center text-purple-900 mb-8">
        Why ride with ANT?
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-white rounded-lg shadow-md items-center duration-700 hover:-translate-y-6"
          >
            <div className="text-5xl mb-4 text-purple-700">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-center text-gray-600">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyRideWithUs;
