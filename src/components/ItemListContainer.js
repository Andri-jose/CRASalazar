import React from 'react';
import './ItemListContainer.css';
import Count from './ItemCount';

function Item({product, price}) {
    return (
        <article className='border border-dark w-25 py-5 mt-5 rounded d-flex flex-column  m-auto item'  >   
            <p>Product: {product}</p>
            <p>${price}</p>
            <Count />
        </article>

    )
}


export default Item;


