import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Confetti from "react-confetti";
import { useDispatch } from "react-redux";
import { clearCart } from "./redux/cartSlice";


export default function OrderPlaced() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Clear cart only when order success screen is shown
    dispatch(clearCart());

    // Redirect to home after 6 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, navigate]);


  return (
    <div className="success-container">
      {/* Confetti
      <div className="confetti"></div> */}
       <Confetti numberOfPieces={900} recycle={false} />
      <div className="success-box">
        <div className="tick-mark">✔</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with us.</p>
        <p className="redirect-msg">Redirecting to the home page...</p>
      </div>
    </div>
  )
}
