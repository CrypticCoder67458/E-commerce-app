import React from 'react'
import { CurrentCategoryProvider} from'./CurrentCategoryContext'
import { ProductsProvider } from './ProductsContext'
import{ CartProvider } from './CartContext'
import { ShownProductsProvider } from './ShownProductsContext'
import { FiltersProvider } from './FiltersContext'
export const ContextProvider = ({ children }) => {
  return (
    <ProductsProvider>
        <CurrentCategoryProvider>
          <ShownProductsProvider>
            <CartProvider>
                <FiltersProvider>
                    {children}
                </FiltersProvider>
            </CartProvider>
          </ShownProductsProvider>
        </CurrentCategoryProvider>
    </ProductsProvider>
  )
}
