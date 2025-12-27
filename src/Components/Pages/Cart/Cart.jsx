import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useCart } from '../../../context/CartContext'

function Cart() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const { cartItems, setCartItems } = useCart()

    const themeStyles = {
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        color: theme === 'light' ? '#333' : '#FFF',
        margin: '2rem',
        padding: '2rem',
    }

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId)
        setCartItems(updatedCart)
    }
    const updateCount(productId, opt){
        const itemFound = cartItems.find(item => item.id === productId)
        if (itemFound) {

        }
    }
    return (
        <>
            <div>Cart</div>
            <div style={themeStyles}>
                <h2>Items in Cart ({cartItems.length})</h2>
                <ul>
                    {cartItems.map((item, index) => {
                        return <li key={index}>{item.title} - {item.qty}<button onClick={() => removeFromCart(item.id)}>Remove</button></li>
                    })}
                </ul>
                <p>The current theme is {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>

    )
}

export default Cart