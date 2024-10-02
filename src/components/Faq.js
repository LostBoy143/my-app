import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] =
    useState(null);

  const faqs = [
    {
      question: "What Is ANT Car Rental Service?",
      answer:
        "ANT offers self-drive car rentals in India.",
    },
    {
      question: "Is ANT Available In My City?",
      answer:
        "ANT is available in most major cities in India.",
    },
    {
      question:
        "What Type Of Vehicles/Cars Does ANT Offer?",
      answer:
        "ANT offers a wide range of vehicles including SUVs, sedans, and hatchbacks.",
    },
    {
      question:
        "How Much Does It Cost To Rent A Car At ANT?",
      answer:
        "Prices depend on the car model and duration of the rental.",
    },
    {
      question:
        "What Are The Advantages Of Availing Cars On Rent At ANT?",
      answer:
        "You enjoy flexible self-driving options at affordable prices with easy cancellation.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <div className="bg-gray-50 py-12 md:flex md:flex-col ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-6">
        {/* Left Side - FAQ Title & Button */}
        <div className="col-span-1 flex flex-col items-start lg:items-center lg:justify-center">
          <h2 className="text-2xl font-bold text-purple-900 mb-4">
            FAQ's
          </h2>
          <p className="text-gray-600 mb-4">
            Frequently Asked Questions.
          </p>
          <button className="bg-purple-900 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-purple-800">
            View All
          </button>
        </div>

        {/* Right Side - Accordion FAQ */}
        <div className="col-span-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border-b border-gray-300"
            >
              <button
                onClick={() =>
                  toggleAccordion(index)
                }
                className="w-full text-left flex justify-between items-center p-4 bg-white text-purple-900 font-semibold hover:bg-purple-50"
              >
                {faq.question}
                <span>
                  {openIndex === index
                    ? "-"
                    : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
