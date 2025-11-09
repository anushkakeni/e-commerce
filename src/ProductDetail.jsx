import React from 'react'

export default function ProductDetail() {
    return (
        <div className="product-detail">
            <div className="detail-container">
                <img src="Images/shoes1.jpeg" alt="Rainbow Glitter High Heels" className="detail-img" />
                <div className="detail-info">

                    <p className="category">Shoes</p>
                    <h2 className="product-name">Rainbow Glitter High Heels</h2>
                    <div className="rating">⭐⭐⭐⭐⭐</div>


                    <p className="description">
                        Step into the spotlight with these eye-catching rainbow glitter high heels.
                        Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that
                        catch and reflect light with every step. Perfect for special occasions or a
                        night out, these stunners are sure to turn heads and elevate any ensemble.
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
                        <h3>₹39</h3>
                        <div className="btns">
                            <button className="wishlist-btn">Add to Wishlist</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}
