import React from 'react';
import './Item.css';
import ItemDetailContainer from './Detail/ItemDetailContainer';

function Description({id, title, price, img}) {
    return (
        <article className='item mx-3 pt-2 mt-5'>
            <diV>{id}</diV>
            <p>{title}</p>
            <img className='img' src={img} alt='description product'></img> 
            <p className='pt-2'>{price}</p>
            {/* <button>Show Detail</button> */}
            <ItemDetailContainer />
        </article>

    )
   
}
// img src={ require('./img/${i.image}')} />)}

export default Description;

