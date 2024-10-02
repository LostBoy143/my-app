import React from "react";

const CarSearchComponent = () => {
  return (
    <div className="flex flex-col items-center  justify-center py-8 shadow-gray-400 bg-blend-darken">
      {/* Container */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-2xl">
        {/* Form Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Location Selector */}
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full mb-2">
              Fill Details
            </button>
            <input
              type="text"
              placeholder="Choose a city"
              className="w-full pb-1 text-center border-b border-gray-400 focus:outline-none mt-3"
            />
          </div>

          {/* Pickup Date and Time */}
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Pickup Date and Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Drop Date and Time */}
          <div className="w-full sm:w-1/3 flex flex-col items-center">
            <label className="block text-sm font-semibold text-gray-600 mb-2">
              Drop Date and Time
            </label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full flex items-center space-x-2">
            <span>Search Car</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarSearchComponent;
