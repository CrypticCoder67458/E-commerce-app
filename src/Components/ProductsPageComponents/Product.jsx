import React from "react"
import '../../Styles/styles.css'
import '../../Styles/home-page.css'
import{Link} from 'react-router-dom'
import {AddToCartButton} from "./AddToCartButton"
import{CartContext} from '../../Context/CartContext'
export function Product({product}) {
    const{cartProducts,setCartProducts}=React.useContext(CartContext)
    return (
          
          
            <Link  to={`/${encodeURIComponent(JSON.stringify(product))}`}key={product.id}
          className="product  ">
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>
                <div className="product-price">
                  <p>${product.price}</p>
                </div>
              </div>
              
            </Link>
           
          
    );
  }
  
