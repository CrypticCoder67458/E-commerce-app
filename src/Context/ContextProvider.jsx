import React from 'react'
import { ProductsProvider } from './ProductsContext'
import{ CartProvider } from './CartContext'



export const ContextProvider = ({ children }) => {
  return (
    <ProductsProvider>       
            <CartProvider> 
                    {children}   
            </CartProvider>
    </ProductsProvider>
  )
}
