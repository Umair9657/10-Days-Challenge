import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    localStorage.removeItem('cart');
    setCart([]);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md mb-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>${item.price}</p>
            </div>
          ))}
          <button
            onClick={handleCheckout}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      )}
    </main>
  );
};

export default CartPage;