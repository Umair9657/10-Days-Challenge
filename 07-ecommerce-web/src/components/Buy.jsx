import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import assets from "../assets/iphone-16-Pro.jpeg";
import assets1 from "../assets/iphone 15.webp";
import assets2 from "../assets/iphone 14.webp";
import assets3 from "../assets/iphone 13.jpeg";
import assets4 from "../assets/iphone12.webp";
import assets5 from "../assets/iphone 11.jpg";

const products = [
  { id: 1, img: assets, title: "iPhone 16 Pro Max (8 RAM, 1TB ROM)", price: "16,00,00" },
  { id: 2, img: assets1, title: "iPhone 15 Pro Max (6 GB RAM, 256 GB ROM)", price: "13,00,00" },
  { id: 3, img: assets2, title: "iPhone 14 Pro Max (6 GB RAM, 256 GB ROM)", price: "10,00,00" },
  { id: 4, img: assets3, title: "iPhone 13 Pro Max (6 GB RAM, 256 GB ROM)", price: "90,000" },
  { id: 5, img: assets4, title: "iPhone 12 Pro Max (6 GB RAM, 256 GB ROM)", price: "75,000" },
  { id: 6, img: assets5, title: "iPhone 11 Pro Max (6 GB RAM, 256 GB ROM)", price: "50,000" },
];

const Buy = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
    paymentMethod: "",
  });

  const product = products.find((item) => item.id === parseInt(id));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productWithDetails = { ...product, userDetails: formData };
    addToCart(productWithDetails);
    navigate("/cart");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Buy {product.title}</h2>
      <p>Price: ₹{product.price}</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          required
        ></textarea>
        <select
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          className="block w-full p-2 border rounded"
          required
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="debitCard">Debit Card</option>
          <option value="upi">UPI</option>
          <option value="cod">Cash on Delivery</option>
        </select>
        <button onClick={() => alert("You have Successfully Purchased!")}
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Purchase Order
        </button>
      </form>
    </div>
  );
};

export default Buy;
