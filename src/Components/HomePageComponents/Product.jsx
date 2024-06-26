import React from "react"
import '../../Styles/styles.css'
import '../../Styles/home-page.css'
import{Link} from 'react-router-dom'
import { AddToCartButton } from "./AddToCartButton";

export function Product({product,cartProducts,setCartProducts}) {
    
    return (
          <div 
          key={product.id}
          className="product card zoom-effect">
            <Link  to={`/${encodeURIComponent(JSON.stringify(product))}`}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <div className="product-price">
                <p>${product.price}</p>
              </div>
            </Link>
            <AddToCartButton 
            product={product} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
            
          </div>
    );
  }
  
