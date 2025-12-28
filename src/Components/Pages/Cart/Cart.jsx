import {useContext} from 'react'
import {ThemeContext} from '../../../context/ThemeContext'
import {useCart} from '../../../context/CartContext'

function Cart() {
    const {theme, toggleTheme} = useContext(ThemeContext)
    const {cartItems, setCartItems} = useCart()

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
    const updateCount = (productId, opt = 'plus') => {
        const updatedCart = cartItems.map(item => {
            if (item.id !== productId) return item;

            if (opt === 'minus' && item.qty === 1) {
                alert("Quantity can't be Zero");
                return item
            }
            return {
                ...item
                , qty: opt === 'plus' ? item.qty + 1 : item.qty - 1
            }
        })
        setCartItems(updatedCart)
    }

    return (
        <>
            <div>Cart</div>
            <div style={themeStyles}>
                <h2>Items in Cart ({cartItems.length})</h2>
                <ul>
                    {cartItems.map((item, index) => {
                        return <li key={index}>{item.title} - {item.qty}
                            <button style={{margin: '10px'}} onClick={() => updateCount(item.id, 'plus')}>Increase
                            </button>
                            <button style={{margin: '10px'}} disabled={item.qty === 1}
                                    onClick={() => updateCount(item.id, 'minus')}>Decrease
                            </button>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    })}
                </ul>
                <p>The current theme is {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>

    )
}

export default Cart