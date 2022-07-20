import React from 'react';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

function Navbar() {
    return (
        <nav className="flex px-4 justify-between">
            <img src={logo} alt="Jack Tubbenhauer Logo"/>
            <img src={hamburger} alt="Hamburger Icon"/>
        </nav>
    );
}

export default Navbar;