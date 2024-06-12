import React from 'react'

export function TabItem ({setCartProducts,product,cartProducts,setTotalQuantity}){
    const[localQuantity,setLocalQuantity]=React.useState(product.quantity)
    React.useEffect(()=>setLocalQuantity(product.quantity),[product.quantity])
    function handleMinus(){
        if(localQuantity===1)
            alert('the quantity of a product cannot be less than 1')
        else{
            setTotalQuantity((prevQuantity)=>prevQuantity-1)
            setLocalQuantity((prevQuantity)=>prevQuantity-1)
        }
    }
    function handlePlus(){
        setTotalQuantity((prevQuantity)=>prevQuantity+1)
        setLocalQuantity((prevQuantity)=>prevQuantity+1)
    }
    function removeFromCart(product){
        setCartProducts((Products)=>Products.filter((productToKeep)=>productToKeep!=product))
        setTotalQuantity((prevQuantity)=>prevQuantity-localQuantity)
        setLocalQuantity(0)

    }
  return (
    <div className='cart-item'>
        <h5>{product.productName}</h5>
        <div className='cart-item--flex'>
            <img src={product.productImage}/>
            <div className='cart-item--details'>
                <div className='cart-item--quantity '>
                    <p>quantity: </p>
                    <span onClick={handleMinus}>-</span>
                    <p>{localQuantity}</p>
                    <span onClick={handlePlus}>+</span>
                </div>
                <p>price: ${product.price*localQuantity}</p>
                <div className='cart-item--btn '>
                    <button onClick={handlePlus}>Add to Cart</button>
                    <button onClick={()=>removeFromCart(product)}>remove</button>
                </div>
   
            </div>
        </div>
        
    </div>
  )
}
