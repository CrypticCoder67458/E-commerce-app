import React from "react"
import '../../Styles/styles.css'
import '../../Styles/home-page.css'
import{Link} from 'react-router-dom'
import { formatPrice } from "../../utils/PriceFunctions"
export function Product({product}) {
    const productHighlight = product.discount>0?"limited offer":product.popular?"bestseller":null;
    return (
          
          
            <Link  to={`/products/product/${product.id}`}key={product.id}
          className="product  ">
              {productHighlight && <div className="product-highlight">{productHighlight}</div>}
              <img src={product.image} alt={product.title} />
                <div className="product-titles">
                  <h3>{product.title}</h3> 
                  <Link to={`/products/product/${product.id}` } 
                  className="more-info">more info</Link> 
                </div>
                          
                {product.discount>0?<div  className="product-price">
                  
                  <div  className="discount-price">
                    <p className="discount">-{product.discount}%</p>
                    <div className="price-container">
                      <b className="new-price">${formatPrice(product.price-(product.price*(product.discount/100)))}</b>
                      <p className="old-price">${formatPrice(product.price)}</p>

                    </div>
                    
                    
                    </div>
                  
                    </div>:
                    <p className="price">${formatPrice(product.price)}
                    </p>}
      
              
              
            </Link>
           
          
    );
  }
  
