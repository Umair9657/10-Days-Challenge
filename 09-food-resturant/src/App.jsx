import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Order from "./components/Order.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      
      <Hero />
      <Services />
      <Routes>
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
      
    </div>
    </Router>
  );
};

export default App;
