import React from 'react';
import './ItemListContainer.css';

function Item({product, price}) {
    return (
        <article className='border border-dark w-25 py-4 mt-5 rounded d-flex flex-column  m-auto item'  >
            <h2>Choose your product</h2>
            <p>Product: {product}</p>
            <p>${price}</p>
        </article>

    )
}


export default Item;