import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { useCart } from "../../../context/CartContext";
import "./Cart.css";
function Cart() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cartItems, setCartItems } = useCart();

    const themeStyles = {
        backgroundColor: theme === "light" ? "#FFF" : "#333",
        color: theme === "light" ? "#333" : "#FFF",
        margin: "2rem",
        padding: "2rem",
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCart);
    };
    const updateCount = (productId, opt = "plus") => {
        const updatedCart = cartItems.map((item) => {
            if (item.id !== productId) return item;

            if (opt === "minus" && item.qty === 1) {
                alert("Quantity can't be Zero");
                return item;
            }
            return {
                ...item,
                qty: opt === "plus" ? item.qty + 1 : item.qty - 1,
            };
        });
        setCartItems(updatedCart);
    };
    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + item.price * item.qty;
    }, 0);

    return (
        <div>
            <div style={themeStyles}>
                <h2>Items in Cart ({cartItems.length})</h2>
                <ul>
                    {cartItems.map((item) => {
                        return (
                            <div className="item-top" key={item.id}>
                                <li className="item-line">
                                    <span>
                                        {item.title} × {item.qty}
                                    </span>
                                    <span>{item.price * item.qty}$</span>

                                    <div className="btn-section">
                                        <button
                                            className="btn btn-inc"
                                            onClick={() =>
                                                updateCount(item.id, "plus")
                                            }
                                        >
                                            +
                                        </button>

                                        <button
                                            className="btn btn-dec"
                                            disabled={item.qty === 1}
                                            onClick={() =>
                                                updateCount(item.id, "minus")
                                            }
                                        >
                                            −
                                        </button>

                                        <button
                                            className="btn btn-remove"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            </div>
                        );
                    })}
                </ul>
                <p>Total Price: {totalPrice}$</p>
                <p>The current theme is {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </div>
    );
}

export default Cart;
