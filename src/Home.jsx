import React from 'react'
import { useState, useEffect } from 'react'

import { FaHeart, FaShoppingCart } from "react-icons/fa";

import './App.css'
import ProductDetail from './ProductDetail'
import Cart from './Cart'

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

export default function Home() {
    const [showCart, setShowCart] = useState(false);

    const dispatch = useDispatch();
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);


    //show and load product from api
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);



    // ✅ Fetch products from FakeStore API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    // const products = [
    //   {
    //     id: 1,
    //     name: "Dress 1",
    //     description: "Beautiful summer dress in floral pattern",
    //     price: 799,
    //     image: "Images/dress1.jpeg",
    //   },
    //   {
    //     id: 2,
    //     name: "Dress 2",
    //     description: "Elegant party wear dress",
    //     price: 999,
    //     image: "Images/dress2.jpeg",
    //   },
    //   {
    //     id: 3,
    //     name: "Shoes 1",
    //     description: "Casual sneakers for everyday wear",
    //     price: 1299,
    //     image: "Images/shoes1.jpeg",
    //   },
    //   {
    //     id: 4,
    //     name: "Shoes 3",
    //     description: "Trendy sports shoes for all occasions",
    //     price: 1599,
    //     image: "Images/Shoes3.jpeg",
    //   },
    // ];







    return (
        <>
            <div className='ecommerce'>

                {/*header*/}
                <header className='header-section'>
                    <div className="heading" onClick={() => setShowCart(false)}>Store</div>

                    <input type="text" placeholder='Search' className='search-box' />

                    <div className="header-right">
                        <button className="icon-btn">
                            <FaHeart className="icon-heart" />
                            <span className="wishlist-count">0</span>
                        </button>

                        <button className="icon-btn" onClick={() => setShowCart(true)} >
                            <FaShoppingCart className="icon-cart" />
                            <span className="cart-count">{totalQuantity}</span>
                        </button>

                        <button className="login-btn">Log In</button>
                    </div>
                </header>




                {showCart ? (
                    <main className='main-area'>
                        <Cart />
                    </main>
                ) : (
                    <section className='main-content'>

                        {/* side Bar */}
                        <aside className="sidebar">
                            <h2>Categories</h2>
                            <ul>
                                <li>All</li>
                                <li>Clothes</li>
                                <li>Electronics</li>
                                <li>Furniture</li>
                                <li>Shoes</li>
                                <li>Miscellaneous</li>
                            </ul>
                        </aside>

                        {/* Products */}
                        {/* <section className="products-section">
              <h2>Products</h2>
              <div className="product-grid">
                {products.map((item) => (
                  <div className="product-card" key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <div className="btns">
                      <button onClick={() => dispatch(addToCart(item))}>
                        Add To Cart
                      </button>
                      <button>Add To Wishlist</button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section> */}

                        <section className="products-section">
                            <h2>Products</h2>

                            {loading ? (
                                <p className="loading-text">Loading products...</p>
                            ) : (
                                <div className="product-grid">
                                    {products.map((item) => (
                                        <div className="product-card" key={item.id}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="product-img"
                                            />
                                            <h3>{item.title}</h3>
                                            <p>₹{(item.price * 83).toFixed(0)}</p> {/* Converts USD to INR approx */}
                                            <div className="btns">
                                                <button onClick={() => dispatch(addToCart(item))}>
                                                    Add To Cart
                                                </button>
                                                <button>Add To Wishlist</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>
                    </section>


                )}





                <footer className="footer">
                    <div>Store</div>
                    <div className="footer-links">
                        <a href="#">About</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Licensing</a>
                        <a href="#">Contact</a>
                    </div>
                </footer>

            </div>


        </>
    )
}
