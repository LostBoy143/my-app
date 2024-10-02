//updated code

import React, { useState } from "react";
import Slider from "react-slick";

const TrendingOffers = () => {
  const [offerType, setOfferType] =
    useState("daily");
  let sliderRef = null; // This will reference the slider

  const dailyOffers = [
    {
      discount: "20% off",
      code: "RAIN20",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjy1YbIJiFSniLdcMHTbPRaSu6h0F5mUKH7Q&s",
      minAmount: "Rs. 8,000",
    },
    {
      discount: "25% off",
      code: "RAIN25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6vyvpT5Q5Awt6lgMP2_Gj6a51ajNKPwvu1A&s",
      minAmount: "Rs. 16,000",
    },
    {
      discount: "30% off",
      code: "RAIN30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxEFJrmboQ8s_gzjfQENicOvvp0sYgBQJSg&s",
      minAmount: "Rs. 24,000",
    },
    {
      discount: "35% off",
      code: "RAIN35",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsZGQtxWM115bXNiSLVtx30E2Jdc91k9-3hA&s",
      minAmount: "Rs. 30,000",
    },
  ];

  const monthlyOffers = [
    {
      discount: "10% off",
      code: "MONTH10",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77NmqCQa-mywW61nTzFZT7X63bLMwUBUrMw&s",
      minAmount: "Rs. 5,000",
    },
    {
      discount: "15% off",
      code: "MONTH15",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqJfkTksKG3j5BYsWxW1Oe7JN7E4_PipixA&s",
      minAmount: "Rs. 12,000",
    },
    {
      discount: "20% off",
      code: "MONTH20",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pyyQlYLwef3Vh1KxCVp9e0UMJIm58ugcBA&s",
      minAmount: "Rs. 18,000",
    },
    {
      discount: "25% off",
      code: "MONTH25",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgssbDOm-jlWINLGfoRc7tJlXCir3_MeFMA&s",
      minAmount: "Rs. 25,000",
    },
  ];

  const settings = {
    dots: true,
    infinite: false, // Set infinite to false to stop after the last slide
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows for custom buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false, // Keep infinite false for smaller breakpoints as well
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false, // Ensure it remains non-infinite
        },
      },
    ],
  };

  const offers =
    offerType === "daily"
      ? dailyOffers
      : monthlyOffers;

  return (
    <div className="relative px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Trending Offers
      </h2>

      {/* Toggle buttons for Daily and Monthly Offers */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setOfferType("daily")}
          className={`px-4 py-2 font-bold rounded-full ${
            offerType === "daily"
              ? "text-white bg-indigo-600"
              : "text-indigo-600 border border-indigo-600"
          }`}
        >
          Daily Offers
        </button>
        <button
          onClick={() => setOfferType("monthly")}
          className={`px-4 py-2 font-bold rounded-full ml-4 ${
            offerType === "monthly"
              ? "text-white bg-indigo-600"
              : "text-indigo-600 border border-indigo-600"
          }`}
        >
          Monthly Offers
        </button>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full z-10"
          onClick={() => sliderRef.slickPrev()}
        >
          &#9664;
        </button>

        {/* Slider itself */}
        <Slider
          ref={(slider) => (sliderRef = slider)}
          {...settings}
        >
          {offers.map((offer, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.discount}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Flat {offer.discount}
                  </h3>
                  <p className="text-indigo-600 font-semibold">
                    Use Code: {offer.code}
                  </p>
                  <p className="text-gray-500">
                    Flat {offer.discount} on Daily
                    Rentals. Minimum Rental Amount
                    should be {offer.minAmount}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full z-10"
          onClick={() => sliderRef.slickNext()}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default TrendingOffers;
