import React, { useEffect, useState } from 'react';
import './Store.css';

const Store = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/amir-hossain113/laptop/main/data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Store;