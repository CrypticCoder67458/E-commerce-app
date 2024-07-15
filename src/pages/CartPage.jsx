// CartPage.jsx
import { useContext,useState,useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import { CartProductItems } from '../Components/CartPageComponents/CartProductItems';
import '../Styles/styles.css'
import {Navbar} from '../Components/shared Components/Navbar'
import { OrderSummary } from '../Components/CartPageComponents/OrderSummary';

export function CartPage() {
  const { cartProducts} = useContext(CartContext);
  const[totalQuantity,setTotalQuantity]=useState(0)
  useEffect(()=>{getTotalQuantity()},[cartProducts])
  function getTotalQuantity(){
      let quantity=0;
      if(cartProducts.length>0){
          cartProducts.map(cartProduct=>quantity+=cartProduct.quantity)
      }
      setTotalQuantity(quantity)
      
  }
  return(
    <div className='page '>
      <Navbar />
      <h1 className='cart-title'>Your Cart:({totalQuantity} items)</h1>
      <>
        {cartProducts.length > 0 ? (
          <div className='cart' >
            <CartProductItems/>
            <OrderSummary/>
          </div>
          ) : (
            <p className='empty-cart'>You have no product in your cart</p>
          )}
      </>
      
</div>
  
  )
  
}
