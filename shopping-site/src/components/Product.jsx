import React from 'react'
import '../styles/components.css'

export function Product({product,setCartProducts,cartProducts, setTotalQuantity}) {
  const [isHoverOn,setIsHoverOn]=React.useState(false);
  let quantity=0;
  function handleClick(){
    setTotalQuantity(
      (prevQuantity)=>prevQuantity+1)
    if(cartProducts.find(item=>item===product))
      quantity++;
    else{
      setCartProducts((prevCartArr) => [...prevCartArr, product]);}
    
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
