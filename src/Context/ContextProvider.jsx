import React from 'react'
import { CurrentCategoryProvider} from'./CurrentCategoryContext'
import { ProductsProvider } from './ProductsContext'
import{ CartProvider } from './CartContext'
import { ShownProductsProvider } from './ShownProductsContext'
export const ContextProvider = ({ children }) => {
  return (
    <ProductsProvider>
        <CurrentCategoryProvider>
          <ShownProductsProvider>
            <CartProvider>
                {children}
            </CartProvider>
          </ShownProductsProvider>
        </CurrentCategoryProvider>
    </ProductsProvider>
  )
}
