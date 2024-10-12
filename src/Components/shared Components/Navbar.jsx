import React  from "react"
import {ShoppingCart} from "phosphor-react"
import "../../Styles/navbar.css"
import  logo from '../../../public/images/ecommerce-logo.png'
import { Link } from 'react-router-dom';
import{CartContext} from '../../Context/CartContext'
import{SearchBar} from './SearchBar'
import { GiHamburgerMenu } from "react-icons/gi";
export  function Navbar(){
    const{cartProducts}=React.useContext(CartContext)
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
            
            <div className="navbar">
                <div className="navbar-main" >
                    <Link to={"/"} className="flex">
                        <img 
                        src={logo} className="logo" alt="logo"/>
                        <h2>TechHaven</h2>
                    </Link>
                    <SearchBar/>
                    <Link to="/cart">
                        <div className="shopping-cart--logo ">
                            <span >{totalQuantity}</span>
                            <ShoppingCart size={42} color="white" className="shopping-cart" /> 
                        </div>
                    </Link>
                </div>
                {
                    /*
                    <div className="navbar-search">
                    <div className="navbar-categories">
                        <GiHamburgerMenu />
                        <h3>Categories</h3>
                    </div>

                    <SearchBar/>
                </div>
                    */
                }
                
            </div>
            

     
        
    )
    
}
