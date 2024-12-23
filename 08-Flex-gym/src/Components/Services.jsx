import React from "react";
import { useNavigate } from "react-router-dom";

const packagesData = [
  {
    name: "Basic Membership",
    price: 499,
    bgColor: "bg-green-400",
    description: [
      "Access to gym during working hours.",
      "Use of basic equipment.",
      "Locker facilities.",
    ],
    duration: "1 month",
  },
  {
    name: "Standard Membership",
    price: 1399,
    bgColor: "bg-blue-400",
    description: [
      "Access to gym during working hours.",
      "Use of all equipment.",
      "Locker and shower facilities.",
      "Free group fitness classes.",
    ],
    duration: "3 months",
  },
  {
    name: "Platinum Membership",
    price: 1999,
    bgColor: "bg-pink-400",
    description: [
      "24/7 gym access.",
      "Use of all equipment and premium zones.",
      "Locker, shower, and sauna facilities.",
      "Personal trainer sessions.",
      "Free group fitness classes.",
      "Diet consultation and progress tracking.",
    ],
    duration: "6 months",
  },
];

const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <span id="packages"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12 text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-5xl">
              Our <span className="text-primary">Gym Packages</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Choose a membership plan that suits your fitness goals and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {packagesData.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 
                  ${pkg.bgColor} text-black`}
              >
                <h1 className="mt-4 text-2xl font-bold text-center">
                  {pkg.name}
                </h1>
                <h2 className="text-center text-4xl font-semibold text-black mt-4">
                  ₹{pkg.price}
                </h2>
                <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-200">
                  {pkg.description.map((desc, index) => (
                    <li key={index} className="text-sm">
                      • {desc}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-lg font-semibold text-center">
                  Duration: {pkg.duration}
                </p>
                <button
                  onClick={() => navigate('/register')}
                  className="w-full mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all">
                  Join Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
