import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';


function CartIcon() {

    const [openCart, setopenCart] = useState(false);


    return (
        <div>
            <button className='border border-dark p-2 rounded' onClick={() => setopenCart(true)}>
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <Cart  
                visibility={openCart}
                onClose={() => setopenCart(false)} 
            
            />  
        </div>
        
        
    )
    
}



export default CartIcon;