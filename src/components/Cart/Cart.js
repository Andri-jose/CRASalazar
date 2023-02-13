import React, { useContext} from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../context/cart-context';
// import ItemDetail from './Detail/ItemDetail';



function Cart ({ 
    visibility,
    onClose,
   
 })
 
 {
    const { cart }  = useContext(CartContext);
    

    // console.log(cart)
    
    return (
        <section className='cart_font' style={{display: visibility ? "block" : "none"}}>
            <div className='cart_container'>
                <div className='cart_header'>
                    <button className='cart_close' onClick={onClose}> 
                    <FontAwesomeIcon icon={faCircleXmark }/>
                    </button>
                    <h1 className='cart_letter'>CART</h1>
                </div>
                <div className='cart_product' >
                   {/* aqui van los productos */}
                   {cart.map(i => (
                    <h2>{i.name}</h2>
                   )) }



                </div>
            </div>
            

        </section>
    )
   
}


export default Cart;



        // {/* aqui van los productos */}
        //             {/* {Context.cart.map((i) => (
        //                 <div className='' key={i.id}>
        //                     <img src={i.image} alt={i.name}/>
        //                     <h2>{i.name}</h2>
        //                 </div>
                        
        //              ))} */}



        //               {/* {cart.map(i => <ItemDetail

        //                  image= {i.data.image } 
        //                  name= {i.data.name}
        //                 quantity= {i.quantity}
                        
        //                 /> )}  */}