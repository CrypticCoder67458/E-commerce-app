// CartPage.jsx
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { CartProductItems } from '../Components/CartPageComponents/CartProductItems';
import '../Styles/styles.css'
import {Navbar} from '../Components/shared Components/Navbar'
import { OrderSummary } from '../Components/CartPageComponents/OrderSummary';

export function CartPage() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  return(
    <div className='page'>
      <Navbar cartProducts={cartProducts}/>
      <div>
      {cartProducts.length > 0 ? (
    <>
      <CartProductItems 
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <OrderSummary
        cartProducts={cartProducts}
      />
    </>
  ) : (
    <p>You have no product in your cart</p>
  )}
      </div>
      
</div>
  
  )
  
}
