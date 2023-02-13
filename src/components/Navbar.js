import React from 'react';
import CartIcon from '../components/Cart/CartIcon';
import './Navbar.css';
import {Link} from 'react-router-dom';



function Navbar() {

    return (
        <header className='head'>
            <p className='mx-5'><Link to='/'>Fragrance</Link></p>
            <ul className='nav'>
                <li className='litest'><Link to='/'>Home</Link></li>
                <li className='litest'><Link to='/category/A'>Dior</Link></li>
                <li className='litest'><Link to='/category/B'>Hugo Boss</Link></li>
                <li><CartIcon/></li>
            </ul>
        </header>   

    )
}


export default Navbar;