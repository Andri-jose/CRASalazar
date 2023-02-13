import React, { useState } from 'react';



const CartContext = React.createContext({ 
 
});

export default CartContext;


export const Context = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const addToCart = (data, quantity) => {
        if (isInCart(data.id)) {  // if the product is on cart 
            const newCart = [...cart]
            newCart.map((e) => {
                e.quantity = e.quantity + quantity
                return e
            })
            setCart(newCart);
        } else { 
            const newCart = [...cart, {data: data, quantity: quantity }]
            setCart(newCart)
        }
    }

    const isInCart = (id) => {
        return cart.map((e) => e.data.id).includes(id);
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id);
        setCart(newCart)
    }

    const clearCart = () => {
        setCart([]);
    }

    const getQUantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }       

    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.item.price)
        })
        return total
    }

    



    const contextValues = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getQUantity,
        getTotal
        
    }
    
    // console.log(cart)

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







