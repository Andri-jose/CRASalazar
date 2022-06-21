import React from 'react';
import Cart from './CartWidget';
import './Navbar.css';


function Navbar() {
    return (
        <header className='head'>
            <p className='mx-5'>Fragrance</p>
            <ul className='nav'>
                <li>start</li>
                <li>register</li>
                <li>contact</li>
                <li><Cart/></li>
            </ul>
        </header>

    )
}


export default Navbar;