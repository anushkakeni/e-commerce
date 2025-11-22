import React from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

export default function ProductDetail() {
      const dispatch = useDispatch();

       const { state } = useLocation();


       const product = state?.product;

        if (!product) {
        return (
            <h2 style={{ padding: "40px" }}~~>
                No product data found. Please go back to Home.
            </h2>
        );
    }


    return (
        <div className="product-detail">
            <div className="detail-container">
             {/* Image */}
                <img src={product.image}  alt={product.title} className="detail-img" />

                {/* Info */}
                <div className="detail-info">
                    <p className="category">{product.category}</p>
                    <h2 className="product-name">{product.title}</h2>
                    <div className="rating">{product.rating}</div>


                    <p className="description">
                         {product.description}
                    </p>


                    <div className="color-section">
                        <h4>Color</h4>
                        <div className="colors">
                            <span className="color-dot color1"></span>
                            <span className="color-dot color2"></span>
                            <span className="color-dot color3"></span>
                        </div>
                    </div>


                    <div className="price-section">
                        <h3>₹{(product.price * 83).toFixed(0)}</h3>
                        <div className="btns">
                            <button className="wishlist-btn">Add to Wishlist</button>
                            <button className="cart-btn"  onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}
