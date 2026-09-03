"use client"
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const ProviderPage = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://zenji-t-shirt.vercel.app/product.json`)
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])
    const data = {
        products,
        setProducts
    }
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ProviderPage;