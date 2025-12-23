import React from 'react'
import './MenuItem.css'
import { NavLink } from 'react-router'
function MenuItem(props) {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-menu">
                    <li className='navbar-item'>
                        <NavLink className="navbar-link" to={props.link}>{props.linkName}

                            {props.badge > 0 && (<span className='cart-badge'>{props.badge}</span>)}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuItem