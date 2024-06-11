import React  from "react"
import {ShoppingCart} from "phosphor-react"
import "../styles/styles.css"

export  function Navbar(){
    return(
        <div className="navbar">
        <h2>Shop</h2>
        <ShoppingCart size={32}/>

    </div>
    )
    
}