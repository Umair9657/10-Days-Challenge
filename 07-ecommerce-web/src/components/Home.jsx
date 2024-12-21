import React from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/iphone-16-Pro.jpeg";
import assets1 from "../assets/iphone 15.webp";
import assets2 from "../assets/iphone 14.webp";
import assets3 from "../assets/iphone 13.jpeg";
import assets4 from "../assets/iphone12.webp";
import assets5 from "../assets/iphone 11.jpg";

const ImageList = [
  {
    id: 1,
    img: assets,
    price: "16,00,00",
    tag: "New",
    title: "iPhone 16 Pro Max (8 RAM, 1TB ROM)",
    description: "The iPhone 16 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology.",
  },
  {
    id: 2,
    img: assets1,
    price: "13,00,00",
    tag: "Sale",
    title: "iPhone 15 Pro Max (6 GB RAM, 256 GB ROM)",
    description: "The iPhone 15 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology.",
  },
  {
    id: 3,
    img: assets2,
    price: "10,00,00",
    tag: "Hot",
    title: "iPhone 14 Pro Max (6 GB RAM, 256 GB ROM)",
    description: "The iPhone 14 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology.",
  },
  {
    id: 4,
    img: assets3,
    price: "90,000",
    tag: "New",
    title: "iPhone 13 Pro Max (6 GB RAM, 256 GB ROM)",
    description: "The iPhone 13 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology.",
  },
  {
    id: 5,
    img: assets4,
    price: "75,000",
    tag: "New",
    title: "iPhone 12 Pro Max (6 GB RAM, 256 GB ROM)",
    description: "The iPhone 12 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology.",
  },
  {
    id: 6,
    img: assets5,
    price: "50,000",
    tag: "New",
    title: "iPhone 11 Pro Max (6 GB RAM, 256 GB ROM)",
    description: "The iPhone 12 Pro Max is a cutting-edge smartphone, stunning design, and state-of-the-art camera technology",
  },
];

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>

      <div className="container pb-8 sm:pb-0">
        <h1 className="text-4xl font-bold text-center mb-8">Explore Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ImageList.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:scale-105 transform transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              <p className="font-bold text-lg mt-2">₹{item.price}</p>
              <button
                onClick={() => navigate(`/buy/${item.id}`)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;