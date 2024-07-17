import {useState,useEffect,useContext} from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'
import { ShownProductsContext } from "../../Context/ShownProductsContext"
import { CurrentCategoryContext } from "../../Context/CurrentCategoryContext"
import { useParams } from "react-router-dom"
export const Products = () => {
    const { shownProducts, setShownProducts, productNotFound } = useContext(ShownProductsContext);
    const { productsByCategory,currentCategory,setCurrentCategory } = useContext(CurrentCategoryContext);
    const{category}=useParams()

    const renderProducts = () => {
        const productsContainer = (
            <div className='products-container'>
                {shownProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        );

        const noProductsFound = (
            <div className={productNotFound ? 'product-not-found' : 'hidden'}>
                <p>No Products Found</p>
                <button onClick={() => setShownProducts(productsByCategory)}>Continue Shopping</button>
            </div>
        );

        return (
            <>
                {productsContainer}
                {noProductsFound}
            </>
        );
    };

    return renderProducts();
}

  
  
        
        
        
        
        
   
   