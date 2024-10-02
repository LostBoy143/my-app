import React, { useState } from "react";

const images = [
  {
    id: 1,
    name: "Maruti Suzuki",
    seats: 5,
    tank: "45ltr",
    type: "Diesel",
    image:
      "https://buscdn.cardekho.com/in/force/traveller-4020/force-traveller-4020.jpg?impolicy=resize&imwidth=480",
  },
  {
    id: 2,
    name: "Mahindra Scorpio N",
    seats: 5,
    tank: "45ltr",
    type: "Diesel",
    image:
      "https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/bus1.jpg",
  },
  {
    id: 3,
    name: "Mahindra Thar",
    seats: 5,
    tank: "45ltr",
    type: "Diesel",
    image: "url_to_image_3",
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    seats: 7,
    tank: "65ltr",
    type: "Diesel",
    image: "url_to_image_4",
  },
  {
    id: 5,
    name: "Hyundai Creta",
    seats: 5,
    tank: "50ltr",
    type: "Petrol",
    image: "url_to_image_5",
  },
  {
    id: 6,
    name: "Ford EcoSport",
    seats: 5,
    tank: "52ltr",
    type: "Diesel",
    image: "url_to_image_6",
  },
  {
    id: 7,
    name: "Honda City",
    seats: 5,
    tank: "40ltr",
    type: "Petrol",
    image: "url_to_image_7",
  },
  {
    id: 8,
    name: "Nissan Magnite",
    seats: 5,
    tank: "45ltr",
    type: "Petrol",
    image: "url_to_image_8",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] =
    useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + images.length) %
        images.length
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 relative bg-gray-100 pt-3">
      {/* Header */}
      <h1 className="text-center text-gray-700 text-2xl lg:text-4xl  mb-8 mt-3 font-bold">
        Featured Cars
      </h1>

      {/* Slides */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${
              currentIndex * 100
            }%)`,
          }}
        >
          {images.map((car, index) => (
            <div
              key={car.id}
              className="min-w-full flex flex-col items-center p-6  rounded-xl shadow-lg"
            >
              <img
                src={car.image}
                alt={car.name}
                className="h-50 w-3/4 rounded-xl object-contain"
              />
              <h3 className="text-xl font-semibold mt-4">
                {car.name}
              </h3>
              <p className="text-gray-700">
                {car.seats} Seats | {car.tank}{" "}
                Tank | {car.type}
              </p>
              <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Rent Now - ₹42/hr
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
