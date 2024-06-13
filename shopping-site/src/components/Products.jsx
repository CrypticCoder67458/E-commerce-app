import React from 'react'
import { products } from '../../public/data/products'
import '../styles/components.css'
import { Product } from './Product'



export const Products =({setTotalQuantity,setCartProducts,cartProducts}) => {
  return (
    <div className='products-section'>
      <h2>Our products</h2>
      <div className='product-container'>
        {
            products.map((product)=> <Product 
              product={product} 
              setTotalQuantity={setTotalQuantity} 
              setCartProducts={setCartProducts}
              cartProducts={cartProducts}
            />)
        }
       
       
    </div>
  
    </div>
    
  )
}
