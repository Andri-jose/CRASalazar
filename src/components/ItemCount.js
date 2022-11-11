import React from 'react';
import { useState } from "react";
import './ItemCount.css';


function Count(props){
    const [ number, setNumber ] = useState(1);
    let stock = 6;
    
    const sum = () => {
        if(number < stock){
            setNumber(number + 1);
        }
       
    }
   
    const less = () => {
        if(number > 1){
            setNumber(number - 1)   
        }
      
    }

    const onAdd = (e) => {
        const value = {
           unit : number
        }
        props.onSave(value)
       
    }


   
    

    
    return (
        <article>
            <div className='d-flex m-auto justify-content-around count'>
                <button className='buttonCount d-flex align-items-center justify-content-center' onClick={less}>-</button>
                <p>{number}</p>
                <button className='buttonCount d-flex align-items-center justify-content-center' onClick={sum}>+</button>
            </div>
            <div>    
                <button onClick={onAdd}>To buy</button>
            </div>
        </article>
    )

}


export default Count;








 // console.log("you chose " + number + " perfumes");