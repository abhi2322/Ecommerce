import React from 'react';
import './Header.css';
export default function Header() {
    return (
        <header className="row">
            <div>
                <a className="brand-logo" href ="/">amazona</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signIn">Sign In</a>
            </div>
        </header>
    )
}
