import React from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'
import{Link} from 'react-router-dom'


export const Products = ({cartProducts,setCartProducts,productsByCategory,setProductsByCategory,products,productNotFound, setProductNotFound }) => {
    
    React.useEffect(()=>{
      if(productsByCategory.length===0){
        setProductNotFound(true)
      }
      else{
        setProductNotFound(false)
      }
    },[productsByCategory])

    console.log(cartProducts)
    return (
      <>
          <div className='products-container'>
            {productsByCategory.map((product) => 
              <Link key={product.id} to={`/products/${encodeURIComponent(JSON.stringify(product))}`}>
              <Product
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            </Link>)
            }
          </div>
          <div className={productNotFound ? 'product-not-found' : 'hidden'}>
          <p>No Product was Found</p>
          <button onClick={()=>{setProductsByCategory(products)}}>Continue Shopping</button>
          </div>

    </>
      
           
    )
  }
  
  
        
        
        
        
        
   
   