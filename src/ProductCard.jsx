import React from 'react'
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

export default function ProductCard({ product, onViewDetails }) {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">₹{product.price}</p>

            <div className="btns">
                <button onClick={() => dispatch(addToCart(product))}>
                    Add To Cart
                </button>
                <button onClick={() => onViewDetails(product)}>
                    View Details
                </button>
            </div>
        </div>
    )
}
