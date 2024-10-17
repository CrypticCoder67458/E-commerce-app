import React from 'react'
import '../../Styles/styles.css'
import '../../Styles/cart-page.css'
import {CartContext} from '../../Context/CartContext'
import { FaTrashAlt } from "react-icons/fa";
import { formatPrice,calculateAfterDiscount } from '../../utils/PriceFunctions';
export const CartProductItem = ({product,quantity,}) => {
    const{cartProducts,setCartProducts}=React.useContext(CartContext)
    React.useEffect(()=>setLocalQuantity(quantity),[cartProducts,quantity])
    const[localQuantity,setLocalQuantity]=React.useState(quantity)
    
    function handleMinus(){
        if(localQuantity===1){
               removeFromCart(product.id)        
        }  
        else{
            setCartProducts(prevCartProducts => prevCartProducts.map(cartProduct => {
                if (cartProduct.product.id === product.id) {
                  return { ...cartProduct, quantity: cartProduct.quantity - 1 };
                } else {
                  return cartProduct;
                }
              }));
        }
    }
    function handlePlus(){
        setCartProducts(prevCartProducts => prevCartProducts.map(cartProduct => {
            if (cartProduct.product.id === product.id) {
              return { ...cartProduct, quantity: cartProduct.quantity + 1 };
            } else {
              return cartProduct;
            }
          }));
    }
    function removeFromCart(productId) {
        setCartProducts((Products) => Products.filter((product) => product.product.id !== productId));
      }
      

  return (
        <div className='cart-item card'>
            <img src={product.image}/>
            <div className='cart-item--details'>
               <h5>{product.title}</h5>
               <div className='cart-item--details-price-quantity'> 
                  
                  <div className='cart-item--quantity '>
                    <span 
                    onClick={handleMinus}
                    >-</span>
                    <p>{localQuantity}</p>
                    <span 
                    onClick={handlePlus}
                    >+</span>         
                  </div>
                  <div className="normal-flex">
                      {product.discount>0 && 
                      <><p className="old-price">${formatPrice(product.price)}</p>
                      <b>${formatPrice(calculateAfterDiscount(product))}</b></>}
                      {!product.discount && <b>${formatPrice(product.price)}</b>}
                      
                  </div>  

               </div>
                
                        
                    
               
    
                
            </div>
            <FaTrashAlt  size={20}  className='remove-from-cart' onClick={() => removeFromCart(product.id)}/>
        </div>
            
  )
  
}
