import React from "react"
import '../../Styles/styles.css'
import '../../Styles/home-page.css'
import{Link} from 'react-router-dom'
import{CartContext} from '../../Context/CartContext'
export function Product({product}) {
    const{cartProducts,setCartProducts}=React.useContext(CartContext)
    return (
          
          
            <Link  to={`/${encodeURIComponent(JSON.stringify(product))}`}key={product.id}
          className="product  ">
              <img src={product.image} alt={product.title} />
              <div>
                <h3>{product.title}</h3>            
                  {product.discount>0?<div  className="product-price">
                    <div  className="discount-price">
                      <p className="discount">-{product.discount}%</p>
                      <p className="old-price">${product.price}</p>
                    </div>
                    <b className="new-price">${product.price-(product.price*(product.discount/100))}</b>
                  </div>:<p className="price">${product.price}</p>}
     
              </div>
              
            </Link>
           
          
    );
  }
  
