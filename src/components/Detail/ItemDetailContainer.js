import React, { useEffect, useState } from 'react';
import './ItemDetailContainer.css';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
    
    const [source, setSource] = useState([])
    const [buttonDetail, setButtonDetail] = useState(true)

    const fetchCards = ()=>{
        setButtonDetail(false)
        setTimeout ( ()=>fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setSource(data[0].dior)),2000)
    }
    
    return (
        <div className='d-flex justify-content-around mt-4 '>
            {source && source.map(i => <ItemDetail title={i.name} img={i.image} description={i.description} price={i.price} key={i.id}/>)}
            {buttonDetail && <button onClick={fetchCards} className="mt-5">Show Detail</button>}
        </div>



    )


}


export default ItemDetailContainer;


// setTimeout ( ()=>{},2000);