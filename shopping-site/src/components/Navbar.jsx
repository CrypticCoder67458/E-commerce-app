import React  from "react"
import {ShoppingCart} from "phosphor-react"
import "../styles/components.css"
import  logo from '../../public/data/assets/logos/ecommerce-logo.png'
export  function Navbar({totalQuantity,setIsCartClicked}){
    return(
        <div className="navbar">
        <img src={logo} className="logo"/>
        <div className="shopping-cart">
            <h2>Shop</h2>
            <div className="shopping-cart--logo"
            onClick={()=>setIsCartClicked((prevValue)=>!prevValue)}>
                <span >{totalQuantity}</span>
                <ShoppingCart size={42} /> 
            </div>
        </div>
        
        

    </div>
    )
    
}