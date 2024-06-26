import React from 'react'
import {ShoppingCart} from "phosphor-react"
import '../../Styles/home-page.css'
import '../../Styles/styles.css'

export const AddToCartButton = ({cartProducts,setCartProducts,product}) => {
    function addToCart(){
        let productExists = cartProducts.find(item => item.product.id === product.id);
        if (productExists) {
          setCartProducts(prevCartProducts => prevCartProducts.map(cartProduct => {
            if (cartProduct.product.id === product.id) {
              return { ...cartProduct, quantity: cartProduct.quantity + 1 };
            } else {
              return cartProduct;
            }
          }));
          
        } else {
          setCartProducts((cartProducts)=>{return [...cartProducts,{product:product,quantity:1}]
          });
        }}
        
      
  return (
    <button onClick={addToCart} className='add-to-cart-btn' >
        <ShoppingCart size={25} /> Add to Cart
    </button>
  )
}
