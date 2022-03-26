import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/amir-hossain113/laptop/main/data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);


    const handleCartBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    }

    return (
        <div className="store-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handleCartBtn={handleCartBtn}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Products</h2>
                <h3>Your Cart</h3>
                {
                    cart.map(item => <Cart key={item.id} img={item.img} name={item.name}></Cart>)
                }
                <div>
                    <button className="btn btn-one">Choose One</button>
                    <br />
                    <button className="btn btn-two">Choose Again</button>
                </div>
            </div>
        </div>
    );
};

export default Store;