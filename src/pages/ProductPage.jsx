import {React,useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import '../Styles/styles.css'
import { Link } from "react-router-dom";
import { Navbar } from '../Components/shared Components/Navbar';
import { AddToCartButton } from "../Components/ProductsPageComponents/AddToCartButton";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
export function ProductPage() {
  const product=JSON.parse(useParams().Product);
  const [deliveryDate, setDeliveryDate] = useState('');

  useEffect(() => {
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 3);

    let day = ("0" + currentDate.getDate()).slice(-2);
    let month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    let year = currentDate.getFullYear();

    setDeliveryDate(`${day}/${month}/${year}`);
  }, []);
    return (
      <div className="product-page">
        <Navbar  />
    
       

        <div className="product-details">
          <div className="product-header">
            <Link to="/"><b><IoHomeOutline size={22} /></b></Link>
            <MdKeyboardArrowRight />
            <b>{product.category}</b>
          </div >
          <div className="product-main-details">
              <div  className="product-page-intro">
                <h2>{product?.title || "Product"}</h2>
                <img src={product?.image} alt={product?.title || "Product"} />
              </div>
              <div className="product-delivery-details">
                <div>
                  <h1>${product.price}</h1>
                  <ul>
                    <li><b>Brand:</b> {product?.brand || "N/A"}</li>
                    <li><b>Model:</b> {product?.model || "N/A"}</li>
                    <li><b>Color:</b> {product?.color || "N/A"}</li>
                  </ul>
                </div>
                
                <p><b>Delivery Date:</b> {deliveryDate} </p>
                <AddToCartButton 
                className="add-to-cart-btn "
                product={product}/>
              
              </div>
          </div>
              
              <h2>About this Product:</h2>
              <p>{product?.description || "N/A"}</p>

      </div>

        
      </div>
      
    );
}

