import React from 'react';
import './ItemDetail.css';
// import ItemDetailContainer from './ItemDetailContainer';

function ItemDetail({id,name,description,price,image}) {

    return (
        <article  className='itemDetail'>
            <p>{id}</p>
            <h1 className='titleDetail'>{name}</h1>
            <img className='imgDetail' src={image} alt='description product'></img>
            <p className='descriptionDetail'>{description}</p> 
            <p className='pt-2 mb-4'>{price}</p>
            <button className='mb-5'>To buy</button>
        </article>

    )
   
}
// img src={ require('./img/${i.image}')} />)}

// {require(`../assets/${img}`)}

export default ItemDetail;


// src={require(`../${img}`)}

