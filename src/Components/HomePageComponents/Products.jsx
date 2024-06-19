import React from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'

export const Products = ({cartProducts,setCartProducts,productsByCategory }) => {

    //const [productsByCategory, setProductsByCategory] = React.useState(products)
    //const [currentCategory, setCurrentCategory] = React.useState('phone')
    //const[pageNumber,setPageNumber]=React.useState(0)
  
    
    console.log(cartProducts)
    return (
      <div className='products-container'>
          {productsByCategory.map((product) => <Product
            key={product.id}
            product={product}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}

          />)
          }
        </div>
           
    )
  }
      
        {/*<div className='categories'>
          {categories.map(category => <Category
            key={category}
            category={category}
            currentCategory={currentCategory}
            setCurrentCategory={setCurrentCategory} />)
          }
        </div>
        <h2>Our Products</h2>
        <p className='catchy-phrase'>Discover the tech that will change your life!</p>
        <p className='catchy-phrase'>Where technology meets style - shop now!</p>
        
        */}
        
        
        
        
        
   
   