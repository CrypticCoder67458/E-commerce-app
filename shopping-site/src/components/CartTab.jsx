import React from 'react'
import '../styles/components.css'
import { TabItem } from './TabItem'

export function CartTab({setCartProducts,cartProducts,setTotalQuantity}) {
  return (
    <div className='cart-tab'>
      {cartProducts.length>0?
        cartProducts.map(product=>{
      return <TabItem 
                product={product}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
                setTotalQuantity={setTotalQuantity}
/>
      })
      :<p>You havent added any product yet</p>
    }
      
    </div>
  )
}
