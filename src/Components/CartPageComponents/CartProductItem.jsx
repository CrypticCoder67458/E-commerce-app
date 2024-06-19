import React from 'react'
import '../../Styles/styles.css'
import '../../Styles/cart-page.css'

export const CartProductItem = ({product,quantity,cartProducts,setCartProducts}) => {
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
                <p>
                    price: $
                    {Math.round((product.price * localQuantity) * 100) / 100}
                </p>
                <div className='cart-item--quantity '>
                    <p>quantity: </p>
                    <span 
                    onClick={handleMinus}
                    >-</span>
                    <p>{localQuantity}</p>
                    <span 
                    onClick={handlePlus}
                    >+</span>
                    <p 
                    className='remove-from-cart'
                    onClick={()=>removeFromCart(product.id)}>
                        remove from cart
                    </p>
                </div>
            </div>
        </div>
            
  )
  
}
