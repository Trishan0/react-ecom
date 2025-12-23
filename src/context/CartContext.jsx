import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    let [cartQty, setCartQty] = useState(0)
    console.log("Global Cart:", cartItems)
    console.log("Total Cart Qty :", cartItems.length)


    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id)

        if (existingItem) {
            setCartItems(prevCart =>
                prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item))
        } else {
            setCartItems(prevCart =>
                [...prevCart, { ...product, qty: 1 }])
        }
        setCartQty(cartItems.length)

    }
    console.log("Cart Qty ", cartQty)


    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}