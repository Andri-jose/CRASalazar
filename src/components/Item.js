import React from 'react';
import './Item.css';


function Description({id, title, price, img}) {
    return (
        <article className='item mx-3 pt-2 mt-5'>
            <diV>{id}</diV>
            <p>{title}</p>
            <img className='img' src={img} alt='description product'></img> 
            <p className='pt-2'>{price}</p>
            <button>Show detail</button>
        </article>

    )
   
}
// img src={ require('./img/${i.image}')} />)}

export default Description;


// <diV>{item.id}</diV>
//         <diV>
//             {item.img}
//             <p>{item.title}</p>
//             <p>{item.price}</p>
//         </diV>