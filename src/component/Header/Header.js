import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='nav'>
            <h1>Teachers Community</h1>
            <div className='links'>
                <a href="#home">Home</a>
                <a href="#dashboard">Dashboard</a>
                <a href="#about">About</a>
                <a href="#log-in">Log In</a>
            </div>
        </div>
    );
};

export default Header;