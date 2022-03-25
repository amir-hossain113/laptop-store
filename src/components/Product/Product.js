import React from 'react';
import './Product.css';
import {ImCart} from 'react-icons/im';

const Product = (props) => {
    const { name, img, price} = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p>{name}</p>
                <p>${price}</p>
            </div>
            <button className="btn-cart">
                <p>Add To Cart</p>
                <ImCart className="cart"></ImCart>
            </button>
        </div>
    );
};

export default Product;