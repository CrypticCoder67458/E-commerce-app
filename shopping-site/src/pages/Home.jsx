import React from 'react'
import {Navbar} from '../components/Navbar'
import { Products } from '../components/Products'
import '../styles/pages.css'
import { CartTab } from '../components/CartTab'
import { Slider } from '../components/Slider'


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
      
    {/*<div className='deco1'>
        <div>
          <h2>Tech Essentials: Unleash </h2>
          <h2>the Power of Modern Living</h2>
        </div>
        <img src={deco1}/>
      </div>
      <div className='deco2'>
          <img src={deco2}/>
           <h2> Discover the Tech That Defines You Tomorrow</h2>
        </div> */
    }
      {
        isCartClicked?
        <div className='products'>
          <div>
          <Slider/>
          <Products 
            setTotalQuantity={setTotalQuantity}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
          </div>
        
        
        <CartTab
          setTotalQuantity={setTotalQuantity}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
        
      </div>:
      <>
        <Slider/>
        <Products 
        setTotalQuantity={setTotalQuantity}
        setCartProducts={setCartProducts}
        cartProducts={cartProducts}
        />  
    </>
      

      }
      
      
    </div>
  )
}
