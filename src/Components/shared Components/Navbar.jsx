import React  from "react"
import {ShoppingCart} from "phosphor-react"
import "../../Styles/navbar.css"
import  logo from '../../../public/images/ecommerce-logo.png'
import { Link } from 'react-router-dom';


export  function Navbar({cartProducts}){
    const[totalQuantity,setTotalQuantity]=React.useState(0)
    React.useEffect(()=>{getTotalQuantity()},[cartProducts])
    function getTotalQuantity(){
        let quantity=0;
        if(cartProducts.length>0){
            cartProducts.map(cartProduct=>quantity+=cartProduct.quantity)
        }
        setTotalQuantity(quantity)
    }
    return(
            <div className="navbar" >
                <Link to={"/"}>
                    <img 
                    src={logo} className="logo" alt="logo"/>
                </Link>
                <Link to="/cart">
                    <div className="shopping-cart--logo ">
                        <span >{totalQuantity}</span>
                        <ShoppingCart size={42} color="white" className="shopping-cart" /> 
                    </div>
                </Link>
                    
            </div>
            

     
        
    )
    
}
