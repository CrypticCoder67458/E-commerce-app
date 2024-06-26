import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/styles.css'
import { Link } from "react-router-dom";
import {CartContext} from './CartContext';
import { Navbar } from '../Components/shared Components/Navbar';
import { AddToCartButton } from "../Components/HomePageComponents/AddToCartButton";

export function ProductPage() {
  const product=JSON.parse(useParams().Product);
  const { cartProducts, setCartProducts } = React.useContext(CartContext);
    return (
      <d>
        <Navbar cartProducts={cartProducts} />
        <div className="product-details card ">
        <img src={product?.image} alt={product?.title || "Product"} />
        <h2>{product?.title || "Product"}</h2>
        <h1>${product.price}</h1>
        <div>
        <ul>
          <li><b>Brand:</b> {product?.brand || "N/A"}</li>
          <li><b>Model:</b> {product?.model || "N/A"}</li>
          <li><b>Color:</b> {product?.color || "N/A"}</li>
        </ul>
        <h4>About this Product:</h4>
        <p>{product?.description || "N/A"}</p>
        </div>
        <di className="product-buttons"> 
          <Link to='/' ><button 
          className="go-back-shopping-btn">Go back Shopping</button></Link>
          <AddToCartButton 
          className="add-to-cart-btn "
          cartProducts={cartProducts} setCartProducts={setCartProducts} 
          product={product}/>
        </di>
        
        
      </div>
      </d>
      
    );
}

