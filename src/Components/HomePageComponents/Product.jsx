import React from "react"
import '../../Styles/styles.css'
import '../../Styles/home-page.css'
import {ShoppingCart} from "phosphor-react"

export function Product({product,cartProducts,setCartProducts}) {
    
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
      <div key={product.id} 
      className="product card zoom-effect">
        <img src={product.image}/>
        <h3>{product.title}</h3>
        <div className="product-price">
          <p>${product.price}</p>
          
        </div>
        <button onClick={addToCart}>
          <ShoppingCart size={25} />Add to Cart  
        </button>
        
      </div>
      )
      
    
  }