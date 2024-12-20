import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NewUserPage from "./pages/NewUserPage";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
     <Navbar />
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/new-user" element={<NewUserPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);