import React from "react";

const CitiesAvailable = () => {
  const selfDriveCities = [
    "Delhi",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Jaipur",
    "Hyderabad",
    "Amritsar",
    "Chandigarh",
    "Chennai",
    "Dehradun",
    "Indore",
    "Jodhpur",
    "Kolkata",
    "Rishikesh",
    "Udaipur",
    "Lucknow",
    "Kota",
    "Bikaner",
    "Jaisalmer",
  ];

  const carSubscriptionCities = [
    "Delhi",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Jaipur",
    "Hyderabad",
    "Amritsar",
    "Chandigarh",
    "Chennai",
    "Dehradun",
    "Indore",
    "Jodhpur",
    "Kolkata",
    "Rishikesh",
    "Udaipur",
    "Lucknow",
    "Kota",
    "Bikaner",
    "Jaisalmer",
  ];

  return (
    <div className="px-4 py-8">
      <h2 className="text-3xl font-semibold text-purple-900 text-center mb-8">
        Cities We are Available
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
        {/* Self-Drive Car Rental Column 1 */}
        <div>
          <ul className="space-y-2">
            {selfDriveCities
              .slice(0, 5)
              .map((city, index) => (
                <li
                  key={index}
                  className="lg:text-lg text-base  text-gray-500"
                >
                  Self-Drive Car Rental in{" "}
                  <span className="font-semibold  text-purple-900">
                    {city}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Self-Drive Car Rental Column 2 */}
        <div>
          <ul className="space-y-2">
            {selfDriveCities
              .slice(5, 10)
              .map((city, index) => (
                <li
                  key={index}
                  className="lg:text-lg text-base  text-gray-500"
                >
                  Self-Drive Car Rental in{" "}
                  <span className="font-semibold text-purple-900">
                    {city}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Car Subscription Column 1 */}
        <div>
          <ul className="space-y-2">
            {carSubscriptionCities
              .slice(0, 5)
              .map((city, index) => (
                <li
                  key={index}
                  className="lg:text-lg text-base  text-gray-500"
                >
                  Car Subscription in{" "}
                  <span className="font-semibold text-purple-900">
                    {city}
                  </span>
                </li>
              ))}
          </ul>
        </div>

        {/* Car Subscription Column 2 */}
        <div>
          <ul className="space-y-2">
            {carSubscriptionCities
              .slice(5, 10)
              .map((city, index) => (
                <li
                  key={index}
                  className="lg:text-lg text-base  text-gray-500"
                >
                  Car Subscription in{" "}
                  <span className="font-semibold text-purple-900">
                    {city}
                  </span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CitiesAvailable;
