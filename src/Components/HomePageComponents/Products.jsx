import React from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'

export const Products = ({cartProducts,setCartProducts,productsByCategory,setProductsByCategory,products }) => {
  const [productNotFound, setProductNotFound] = React.useState(false);
  function handleClick() {
    setProductsByCategory(products);
    setProductNotFound(false);
  }
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
      <div>
          <div className='products-container'>
            {productsByCategory.map((product) => <Product
              key={product.id}
              product={product}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />)
            }
          </div>
          <div className={productNotFound ? 'product-not-found' : 'hidden'}>
          <p>No Product was Found</p>
          <button onClick={handleClick}>Continue Shopping</button>
          </div>

    </div>
      
           
    )
  }
  
  
        
        
        
        
        
   
   