"use client"
import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { AuthContext } from './AuthContext';

const favouriteStore = {
    listeners: new Set(),
    getSnapshot: () => {
        const savedFavourites = window.localStorage.getItem('zenji-favourites')
        return savedFavourites || '[]'
    },
    getServerSnapshot: () => '[]',
    subscribe: (onStoreChange) => {
        favouriteStore.listeners.add(onStoreChange)
        window.addEventListener('storage', onStoreChange)
        return () => {
            favouriteStore.listeners.delete(onStoreChange)
            window.removeEventListener('storage', onStoreChange)
        }
    },
    toggle: (productId) => {
        const current = JSON.parse(favouriteStore.getSnapshot())
        const next = current.includes(productId)
            ? current.filter(id => id !== productId)
            : [...current, productId]
        window.localStorage.setItem('zenji-favourites', JSON.stringify(next))
        favouriteStore.listeners.forEach(listener => listener())
    }
}

const orderStore = {
    listeners: new Set(),
    getSnapshot: () => window.localStorage.getItem('zenji-orders') || '[]',
    getServerSnapshot: () => '[]',
    subscribe: (onStoreChange) => {
        orderStore.listeners.add(onStoreChange)
        window.addEventListener('storage', onStoreChange)
        return () => {
            orderStore.listeners.delete(onStoreChange)
            window.removeEventListener('storage', onStoreChange)
        }
    },
    add: (order) => {
        const orders = JSON.parse(orderStore.getSnapshot())
        const nextOrders = [...orders, { ...order, id: `${order.productId}-${Date.now()}` }]
        window.localStorage.setItem('zenji-orders', JSON.stringify(nextOrders))
        orderStore.listeners.forEach(listener => listener())
    }
}

const ProviderPage = ({ children }) => {
    const [products, setProducts] = useState([])
    const savedFavouriteIds = useSyncExternalStore(
        favouriteStore.subscribe,
        favouriteStore.getSnapshot,
        favouriteStore.getServerSnapshot
    )
    const favouriteIds = JSON.parse(savedFavouriteIds)
    const savedOrders = useSyncExternalStore(
        orderStore.subscribe,
        orderStore.getSnapshot,
        orderStore.getServerSnapshot
    )
    const orders = JSON.parse(savedOrders)
    useEffect(() => {
        fetch(`https://zenji-t-shirt.vercel.app/product.json`)
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])
    const toggleFavourite = (productId) => {
        favouriteStore.toggle(productId)
    }
    const addOrder = (order) => {
        orderStore.add(order)
    }
    const data = {
        products,
        setProducts,
        favouriteIds,
        toggleFavourite,
        orders,
        addOrder
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