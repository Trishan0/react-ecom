import './ProductCard.css'
import { useCart } from '../../context/CartContext';

function ProductCard(props) {

    const { addToCart } = useCart();


    const handleAddToCart = () => {
        addToCart(props)
    }


    return (
        <div>
            <div className="card-body">
                <button onClick={handleAddToCart} className="add-cart-btn" >
                    🛒
                </button>
                <img className="product-card-image" src={props.images[0]} alt={props.title} />
                <h3>
                    {props.title}
                </h3>
                <div className="price-card">
                    <p>{props.price} $</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard