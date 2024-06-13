import React from 'react'
import '../styles/components.css'
import { increaseQuantity } from '../utils/quantityFunctions';

export function Product({product,setCartProducts,cartProducts, setTotalQuantity}) {
  const [isHoverOn,setIsHoverOn]=React.useState(false);
  function handleClick(){
    setTotalQuantity((prevQuantity) => prevQuantity + 1);
let productExists = cartProducts.find(item => item.id === product.id);

if (productExists) {
  let newCartProducts =increaseQuantity(cartProducts,product)
  setCartProducts(newCartProducts);
} else {
  setCartProducts((prevCartArr) => [...prevCartArr, product]);
}


  }
  return (
    <div 
    key={product.id}
    className={`product white-box-effect ${isHoverOn?'shadow-effect':''}`}
     onMouseEnter={()=>setIsHoverOn(true)}
      onMouseLeave={()=>setIsHoverOn(false)} 
      >
      <img src={product.productImage}/>
      <h3>{product.productName}</h3>
      <div className="product--flex">
        <p>${product.price}</p>
        <button 
        onClick={handleClick}
        >Buy now</button>
      </div>
      
    </div>
    )
    
  
}
