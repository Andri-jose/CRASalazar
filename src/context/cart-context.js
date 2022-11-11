import React, { useState } from 'react';



const CartContext = React.createContext({ 
 
});

export default CartContext;


export const Context = ({ defaultValue = [], children }) => {
    const [ cart, setCart ] = useState(defaultValue);

    const addToCart = (data,units) => {
        if(isInCart(data.id)) {  // if the product is on cart 
            const newCart = [...cart]  // we do copy of cart with spread operator
            for(const element of newCart) {  // Search which product match with the selected product
                if(element.data.id === data.id) {
                   element.number = units.unit +  units.unit;  // When we find it we add the amount
                    
                }  
            }
            setCart(newCart);
        } else{
            setCart(
                [
                    ...cart,
                    {   
                        data: data,
                        units: units
                    }
                ]
            )
        }
        
    }

    const isInCart = (id) => {
        return cart.find((element) => element.data.id === id);
    }

    const contextValues = {
        cart,
        addToCart
        
    }
    
    console.log(cart)

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
    
}



// const total = element.units.reduce((totalUnits, item) => {
//     return totalUnits + item.units;
// }, 0);


// function componente() {
//     const cart = useContext(CartContext)
//     return  <h1>{`Hello ${cart}!`}</h1>
// }

// export function CartArray() {
//     const [ cart, setCart ] = useState("que lo q");
//     // setCart(newData)

//     function onClick() {
//         console.log('pasa la prueba')
//     }
//     return (
//         <CartContext.Provider value={cart}>
//            {/* <button onClick={onClick} className=' mx-4 text-primary'>To buy</button> */}
//            <app/>
//         </CartContext.Provider>
//     )

// }







