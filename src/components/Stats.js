import React from "react";

const Stats = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
        {/* 200K+ Customers Served */}
        <div className="bg-red-100 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://img.icons8.com/ios/50/000000/document--v1.png" // You can replace this with a relevant icon
              alt="Customers Served Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold text-purple-900 mb-2">
            200K+
          </h3>
          <p className="text-lg text-gray-700">
            Customers Served
          </p>
        </div>

        {/* 100 Million+ Kms */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://img.icons8.com/ios/50/000000/car--v1.png" // Replace this with a relevant icon
              alt="Kms Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold text-purple-900 mb-2">
            100 Million+
          </h3>
          <p className="text-lg text-gray-700">
            Kms
          </p>
        </div>

        {/* 4.3 Rating on App */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-center items-center mb-4">
            <img
              src="https://img.icons8.com/ios/50/000000/rating.png" // Replace this with a relevant icon
              alt="Rating Icon"
              className="w-12 h-12"
            />
          </div>
          <h3 className="text-xl font-bold text-purple-900 mb-2">
            4.3
          </h3>
          <p className="text-lg text-gray-700">
            Rating on App
          </p>
        </div>

        {/* 8 out of 10 Customers Love MyChoize */}
        <div className="flex flex-col items-start md:col-span-2 lg:col-span-1 lg:justify-center text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="text-yellow-400 text-3xl">
              ★
            </span>
            <span className="text-yellow-400 text-3xl">
              ★
            </span>
            <span className="text-yellow-400 text-3xl">
              ★
            </span>
            <span className="text-yellow-400 text-3xl">
              ★
            </span>
            <span className="text-yellow-400 text-3xl">
              ☆
            </span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            8 Out of 10 customers love{" "}
            <span className="text-purple-900">
              ANT
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
