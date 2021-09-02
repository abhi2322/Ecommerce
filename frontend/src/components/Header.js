import React from 'react';
import './Header.css';
export default function Header() {
    return (
        <header className="row">
            <div>
                <a className="brand-logo" href ="index.html">amazona</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
    )
}
