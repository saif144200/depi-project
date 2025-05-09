import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

import HomePage from "./HomePage/HomePage"
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';


function App() {
  return (
    <div>
    <HomePage/>

    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
    </Routes>
    </div>
  );
}

export default App;
