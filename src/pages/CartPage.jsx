// CartPage.jsx
import { useContext,useState,useEffect } from 'react';
import { CartContext } from './CartContext';
import { CartProductItems } from '../Components/CartPageComponents/CartProductItems';
import '../Styles/styles.css'
import {Navbar} from '../Components/shared Components/Navbar'
import { OrderSummary } from '../Components/CartPageComponents/OrderSummary';

export function CartPage() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
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
      <Navbar cartProducts={cartProducts}/>
      <h1 className='cart-title'>Your Cart:({totalQuantity} items)</h1>
      <div className='cart'>
        {cartProducts.length > 0 ? (
          <div className='cart' >
            <CartProductItems 
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
            <OrderSummary
              cartProducts={cartProducts}
            />
          </div>
          ) : (
            <p className='empty-cart'>You have no product in your cart</p>
          )}
      </div>
      
</div>
  
  )
  
}
