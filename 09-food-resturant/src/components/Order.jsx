import React, { useState } from "react";

const biryaniOptions = [
  { id: 1, name: "Hyderabadi Biryani", price: 250 },
  { id: 2, name: "Lucknowi Biryani", price: 300 },
  { id: 3, name: "Kolkata Biryani", price: 200 },
  { id: 4, name: "Malabar Biryani", price: 280 },
];

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    biryani: "",
  });
  const [orderDetails, setOrderDetails] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedBiryani = biryaniOptions.find(
      (biryani) => biryani.name === formData.biryani
    );
    setOrderDetails({ ...formData, price: selectedBiryani?.price });
  };

  return (
    <div className="container py-10 bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Place Your Order
      </h1>
      <form
        className="max-w-lg mx-auto bg-white shadow-lg p-6 rounded-lg dark:bg-gray-800"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-900 dark:text-gray-100 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-900 dark:text-gray-100 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-900 dark:text-gray-100 font-medium">
            Mobile
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-900 dark:text-gray-100 font-medium">
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="biryani" className="block text-gray-900 dark:text-gray-100 font-medium">
            Select Biryani
          </label>
          <select
            id="biryani"
            name="biryani"
            value={formData.biryani}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Choose your favorite biryani</option>
            {biryaniOptions.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name} - ₹{option.price}
              </option>
            ))}
          </select>
        </div>
        <button 
            onClick={() => alert("Your Biryani is Booked")}
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-transform transform hover:scale-105"
        >
          Place Order
        </button>
      </form>

      {orderDetails && (
        <div className="mt-8 max-w-lg mx-auto bg-green-100 border border-green-400 text-green-800 p-4 rounded-lg dark:bg-gray-700 dark:text-gray-200">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <p>
            <strong>Name:</strong> {orderDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {orderDetails.email}
          </p>
          <p>
            <strong>Mobile:</strong> {orderDetails.mobile}
          </p>
          <p>
            <strong>Address:</strong> {orderDetails.address}
          </p>
          <p>
            <strong>Biryani:</strong> {orderDetails.biryani}
          </p>
          <p>
            <strong>Price:</strong> ₹{orderDetails.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Order;
