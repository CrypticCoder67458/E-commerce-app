import React from 'react'
import '../styles/components.css'

export function Product({product,setCartProducts,cartProducts, setTotalQuantity}) {
  const [isHoverOn,setIsHoverOn]=React.useState(false);
  function handleClick(){
    setTotalQuantity((prevQuantity) => prevQuantity + 1);
let productExists = cartProducts.find(item => item.id === product.id);

if (productExists) {
  let newCartProducts = cartProducts.map(cartProduct => {
    if (cartProduct.id === product.id) {
      return { ...cartProduct, quantity: cartProduct.quantity + 1 };
    } else {
      return cartProduct;
    }
  });
  setCartProducts(newCartProducts);
} else {
  setCartProducts((prevCartArr) => [...prevCartArr, product]);
}


  }
  return (
    <div 
    key={product.id}
    className= {isHoverOn?'product shadow-effect':'product'}
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
