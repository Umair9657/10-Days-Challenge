import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

import CartPage from './pages/CartPage';
import ProductCard from './components/ProductCard';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/products"
            element={<ProductsPage onAddToCart={handleAddToCart} />}
          />
       
          <Route path='/products/:id' element={<ProductCard />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;