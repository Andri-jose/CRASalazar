import React from 'react';
import './ItemDetail.css';


function ItemDetail({id, title, description, price, img}) {
    return (
        <article key={id} className='itemDetail'>
            <diV>{id}</diV>
            <h1 className='titleDetail'>{title}</h1>
            <img className='img' src={img} alt='description product'></img>
            <p className='descriptionDetail'>{description}</p> 
            <p className='pt-2 mb-4'>{price}</p>
            <button className='mb-5'>To buy</button>
        </article>

    )
   
}
// img src={ require('./img/${i.image}')} />)}

export default ItemDetail;

