import React, { createContext, useState } from 'react'
import products from "../products.json"

export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i <  products.length + 1;  i++){
        cart[i] =0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const manualCountCartItem = (newAmount, itemId) =>{
        setCartItem((prev) => ({...prev, [itemId]: newAmount}));

    }

    const contextValue = {cartItem, addToCart, removeFromCart, manualCountCartItem}
    console.log("ShopContent", cartItem)


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;