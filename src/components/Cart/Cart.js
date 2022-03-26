import React from 'react';
import './Cart.css';
import { AiFillDelete } from 'react-icons/ai';

const Cart = (props) => {
    const {img, name} = props;

    return (
        <div>
            <div className="cart-product">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <div className="delete-btn">
                    <AiFillDelete className="delete-btn"></AiFillDelete>
                </div>
            </div>
        </div>
    );
};

export default Cart;