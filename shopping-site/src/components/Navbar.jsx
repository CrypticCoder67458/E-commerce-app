import React  from "react"
import{Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"

export default function Navbar(){
    return(
        <div className="navbar">
        <p>Navbar</p>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart</Link>
        <ShoppingCart size={32}/>

    </div>
    )
    
}