import React from 'react'
import { CartProductItem } from './CartProductItem'
import '../../Styles/cart-page.css'
import { CartContext } from '../../Context/CartContext'
export const CartProductItems = () => {
  const { cartProducts } = React.useContext(CartContext)
  return (
    <div className='cart-items'>
      {
        cartProducts.map(product=>{
      return <CartProductItem
                product={product.product}
                quantity={product.quantity}
                key={product.product.id}
              />     
      }
      
    )
    }
      
    </div>
  )
}
