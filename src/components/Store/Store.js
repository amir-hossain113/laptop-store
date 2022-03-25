import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/amir-hossain113/laptop/main/data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="store-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}>
                    </Product>)
                }
            </div>
            <div className="card-container">

            </div>
        </div>
    );
};

export default Store;