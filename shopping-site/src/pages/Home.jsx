import React from 'react'
import {Navbar} from '../components/Navbar'
import { Products } from '../components/Products'
import '../styles/pages.css'
import { CartTab } from '../components/CartTab'



export const Home = () => {

  const [totalQuantity,setTotalQuantity]=React.useState(0);
  const[isCartClicked,setIsCartClicked]=React.useState(false);
  const[cartProducts,setCartProducts]=React.useState([]);
  console.log(cartProducts)
  



  return (
    <div >
      <Navbar 
        totalQuantity={totalQuantity} 
        setIsCartClicked={setIsCartClicked}
      />
      
      <div className='products'>
        <Products 
          setTotalQuantity={setTotalQuantity}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
        
        <CartTab
          setTotalQuantity={setTotalQuantity}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
        
      </div>
      
    </div>
  )
}
