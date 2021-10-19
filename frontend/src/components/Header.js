import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import {useSelector} from 'react-redux';
export default function Header() {
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
    return (
        <header className="row">
            <div>
                <Link className="brand-logo" to="/">amazona</Link>
            </div>
            <div>
                <Link to="/cart">
                    Cart
                    {cartItems.length>0&&(
                     <span className='badge'>{cartItems.length}</span>)
                    }
                    </Link>
                <Link to="/signIn">Sign In</Link>
            </div>
        </header>
    )
}
