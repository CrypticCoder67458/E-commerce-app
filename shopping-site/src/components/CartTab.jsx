import React from 'react'
import '../styles/components.css'
import { TabItem } from './TabItem'

export function CartTab({setCartProducts,cartProducts,setTotalQuantity}) {
  return (
    <div className='cart-tab'>
      {
      cartProducts.map(product=>{
      return <TabItem 
                product={product}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
                setTotalQuantity={setTotalQuantity}
/>
      })
    }
      
    </div>
  )
}
