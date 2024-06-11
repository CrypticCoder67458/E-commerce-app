import React  from "react"
import {ShoppingCart} from "phosphor-react"
import "../styles/components.css"

export  function Navbar({totalQuantity,setIsCartClicked}){
    return(
        <div className="navbar">
        <h2>Shop</h2>
        <div className="shopping-cart"
        onClick={()=>setIsCartClicked((prevValue)=>!prevValue)}>
            <span >{totalQuantity}</span>
            <ShoppingCart size={42} /> 
        </div>
        

    </div>
    )
    
}