import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function OrderPlaced() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 6000);
    return () => clearTimeout(timer);
  }, [navigate]);


  return (
    <div className="success-container">
      {/* Confetti */}
      <div className="confetti"></div>
      <div className="success-box">
        <div className="tick-mark">✔</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with us.</p>
      </div>
    </div>
  )
}
