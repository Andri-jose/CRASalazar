import React from 'react';
import { useState } from "react";
import './ItemCount.css';


function Count(){
    const [ number, setNumber ] = useState(0)
    const [ stock, setStock ] = useState(6)
    
    const sum = () => {
        if(number < 6){
            setNumber(number + 1);
        }
        
        if(stock > 0){
            setStock(stock - 1);
        }
        
    }

    const less = () => {
        if(number > 0){
            setNumber(number - 1)   
        }
        if(stock <= 6){
            setStock(stock + 1);
        }
        
    }

    const onAdd = () => {
        alert("you chose " + number + " perfumes");
    }
    
    return (
        <article>
            <div className='d-flex m-auto justify-content-around count'>
                <button className='buttonCount d-flex align-items-center justify-content-center' onClick={less}>-</button>
                <p>{number}</p>
                <button className='buttonCount d-flex align-items-center justify-content-center' onClick={sum}>+</button>
            </div>
            <div>    
                <button onClick={onAdd}>Add to Cart</button>
            </div>
        </article>
    )

}


export default Count;








