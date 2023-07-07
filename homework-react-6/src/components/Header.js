import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Header() {
    const { cartItems } = useSelector(state => state.cart);

    return (
        <nav>
            <div>
                <Link  to="/">React Shopping Cart</Link>
                    <button type="button">
                <span ></span>
                </button>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Basket</Link>
                        </li>
                        <li>
                            <Link  to="/cart"><i className="bi bi-cart-check"></i> ({cartItems.length})</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}