import React from 'react'
import { CartProductItem } from './CartProductItem'
import '../../Styles/cart-page.css'

export const CartProductItems = ({cartProducts,setCartProducts}) => {
  return (
    <div className='cart-tab'>
      {
        cartProducts.map(product=>{
      return <CartProductItem
                product={product.product}
                quantity={product.quantity}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
              />     
      }
      
    )
    }
      
    </div>
  )
}
