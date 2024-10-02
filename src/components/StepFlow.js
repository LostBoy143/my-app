import React from "react";

const StepFlow = () => {
  const steps = [
    {
      number: "01",
      title: "Select City & Travel Dates",
      icon: "🚗", // Placeholder icon (replace with your actual icons)
    },
    {
      number: "02",
      title: "Choose Car & Delivery Mode",
      icon: "🛠️", // Placeholder icon
    },
    {
      number: "03",
      title: "Verify Yourself",
      icon: "✅", // Placeholder icon
    },
    {
      number: "04",
      title: "Make Payment",
      icon: "💳", // Placeholder icon
    },
  ];

  return (
    <div className="py-16 bg-white p-6">
      <h2 className="text-3xl font-bold text-center text-indigo-900 mb-4">
        How To Book a Self-Drive Car Online
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Book a car online in Jaipur from MyChoize
        in 4 Simple steps.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative mb-8 md:mb-0"
          >
            {/* Step Icon */}
            <div className="flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full mb-2 shadow-md">
              <span className="text-4xl">
                {step.icon}
              </span>{" "}
              {/* Displaying icon as text */}
            </div>
            {/* Step Number */}
            <div className="text-2xl font-bold text-indigo-900">
              {step.number}
            </div>
            {/* Step Title */}
            <div className="text-gray-700 text-lg text-center">
              {step.title}
            </div>

            {/* Curved line between steps */}
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <svg height="50" width="50">
                  <path
                    d="M0 20 Q25 0, 50 20"
                    stroke="gray"
                    fill="transparent"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepFlow;
