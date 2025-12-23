import React from 'react'
import './NavBar.css'
import MenuItem
    from './MenuItem/MenuItem'

import { useCart } from '../../context/CartContext'


function NavBar() {
    const { cartItems } = useCart();
    const totalQty = cartItems.length;

    return (
        <div className='header-content'>
            <div className="header-logo">
                <h1>Cartly</h1>
            </div>
            <div className="navbar-items">
                <MenuItem link="/" linkName="Home" />
                <MenuItem link="/products" linkName="Products" />
                <MenuItem link="/cart" linkName="Cart" badge={totalQty} />
                <MenuItem link="/about" linkName="About" />
            </div>
        </div>
    )
}

export default NavBar