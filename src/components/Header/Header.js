import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg'

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='nav-logo'>
                <img src= {logo} alt="" />
            </div>
            <div className='nav-link'>
                <a href="./Home">Home</a>
                <a href="./About">About us</a>
                <a href="./Contact">Contact</a>
                <a href="./Support">Support</a>
            </div>
        </nav>
    );
};

export default Header;