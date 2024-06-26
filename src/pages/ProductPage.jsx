import React from "react";
import { useParams } from "react-router-dom";
import '../Styles/styles.css'
import { Link } from "react-router-dom";
export function ProductPage() {
  const product=JSON.parse(useParams().Product);

    return (
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
        <Link to='/'><button>Go back Shopping</button></Link>
        
      </div>
    );
}

