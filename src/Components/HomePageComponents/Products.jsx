import React from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'


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
              
              <Product
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              />
            )
            }
          </div>
          <div className={productNotFound ? 'product-not-found' : 'hidden'}>
          <p>No Product was Found</p>
          <button onClick={()=>{setProductsByCategory(products)}}>Continue Shopping</button>
          </div>

    </>
      
           
    )
  }
  
  
        
        
        
        
        
   
   