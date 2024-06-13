import React from 'react'
import { decreaseQuantity,increaseQuantity } from '../utils/quantityFunctions';

export function TabItem ({setCartProducts,product,cartProducts,setTotalQuantity}){ 
    const[localQuantity,setLocalQuantity]=React.useState(product.quantity)
    React.useEffect(()=>setLocalQuantity(product.quantity),[product.quantity])
    function handleMinus(){
        if(localQuantity===1){
            setCartProducts((Products)=>Products.filter    ((productToKeep)=>productToKeep!=product))
            setTotalQuantity((prevQuantity)=>prevQuantity-localQuantity)
            
        }  
        else{
            setTotalQuantity((prevQuantity)=>prevQuantity-1)
            setLocalQuantity((prevQuantity)=>prevQuantity-1)
            let newCart=decreaseQuantity(cartProducts,product)
            setCartProducts(newCart)
        }
    }
    function handlePlus(){
        setTotalQuantity((prevQuantity)=>prevQuantity+1)
        setLocalQuantity((prevQuantity)=>prevQuantity+1)
        let newCart=increaseQuantity(cartProducts,product)
        setCartProducts(newCart)
    }

  return (
        <div className='cart-item'>
            <img src={product.productImage}/>
            <h5>{product.productName}</h5>
            <p>${Math.round((product.price * localQuantity) * 100) / 100}</p>
            <div className='cart-item--quantity '>

                <span onClick={handleMinus}>-</span>
                <p>{localQuantity}</p>
                <span onClick={handlePlus}>+</span>
            </div>
        </div>
  )
}
