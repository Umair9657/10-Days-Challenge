import React from 'react';

const ProductCard = ({ product, onAddToCart }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <img
      src={product.images[0]}
      alt={product.title}
      className="w-full h-48 object-cover rounded-md"
    />
    <h2 className="text-lg font-bold mt-2">{product.title}</h2>
    <p className="text-gray-700">${product.price}</p>
    <button 
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => onAddToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;