import React from 'react'
import './App.css'
import Cart from './Cart';
import Home from "./Home";
import ConfirmOrder from "./ConfirmOrder";
import OrderPlaced from "./OrderPlaced";
import ProductDetail from "./ProductDetail";
// import { useNavigate } from "react-router-dom";

import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/confirm-order" element={<ConfirmOrder />} />
      <Route path="/order-placed" element={<OrderPlaced />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );

}

export default App
