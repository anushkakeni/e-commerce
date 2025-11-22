import React from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./redux/cartSlice.js";
// import { removeFromCart, clearCart } from "../redux/cartSlice.js";



export default function Cart() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty 🛒</h2>
      </div>
    );
  }


  //confirm Checkout
  

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>

        <span><button className="clear-cart-btn" onClick={() => dispatch(clearCart())}> Clear Cart</button></span>

      
          <div className="cart-content">

            {/* left section - cart items */}
            <div className="cart-leftside">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />

                  <div className="cart-item-info">
                    <h4 className="item-name">{item.name}</h4>
                    <p className="price">
                      ₹{(item.price * 83).toFixed(0) }
                      {/* {item.oldPrice && (
                        <span className="old-price">₹{item.oldPrice}</span>
                      )} */}
                    </p>

                    <div className="cart-item-actions">
                      <div className="quantity-control">
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                          -
                        </button>
                        <input type="text" value={item.quantity} readOnly />
                        <button onClick={() => dispatch(addToCart(item))}>
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* right section - price details */}

            <div className="cart-rightside">
              <h3>Price Details</h3>
              <div className="price-row">
                <span>Price ({cartItems.length} item{cartItems.length > 1 ? "s" : ""})</span>
                <span>₹{(totalPrice * 83).toFixed(0)}</span>
              </div>
              <div className="price-row">
                <span>Delivery Charges</span>
                <span className="free">Free</span>
              </div>
              <hr />
              <div className="total-row">
                <strong>Total Amount</strong>
                <strong>₹{(totalPrice * 83).toFixed(0)}</strong>
              </div>
              <button className="checkout-btn" onClick={() => navigate("/confirm-order")}>Checkout Now</button>

            </div>
          </div>
        
      </div>
    </div>
  );
}
