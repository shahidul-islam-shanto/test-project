import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';



const Header = () => {

    return (
        <div className='header-area'>
            <img src={logo} alt="" />
            <nav>
                <a href="shop">Shop</a>
                <a href="review">Order Review</a>
                <a href="manege">Manege Inventory</a>
            </nav>
        </div>
    );
};

export default Header;