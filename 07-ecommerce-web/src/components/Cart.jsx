import React from "react";

const Cart = ({ cartItems }) => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
    {cartItems.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map((item, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 bg-white">
            <img
              src={item.img || "https://via.placeholder.com/150"}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600">Price: ₹{item.price}</p>
            {item.userDetails && (
              <div className="mt-4 text-sm text-gray-800">
                <p><strong>Name:</strong> {item.userDetails.name}</p>
                <p><strong>Mobile:</strong> {item.userDetails.mobile}</p>
                <p><strong>Email:</strong> {item.userDetails.email}</p>
                <p><strong>Address:</strong> {item.userDetails.address}</p>
                <p><strong>Payment Method:</strong> {item.userDetails.paymentMethod}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">Your cart is empty.</p>
    )}
  </div>
);

export default Cart;