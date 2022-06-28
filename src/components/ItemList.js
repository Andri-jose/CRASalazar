import React, { useEffect, useState } from 'react';
import './ItemList.css';
import Description from './Item';


function ItemList() {
    
    const [info, setInfo] = useState([])

    useEffect(()=>{
        setTimeout ( ()=>fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data)),2000)
    }, [])
   
    return (
        <div className='d-flex justify-content-around info'>
            {info && info.map(i => <Description title={i.name} price={i.price} img={i.image} />)}
        </div>



    )


}



// setTimeout ( ()=>{},2000);



export default ItemList;