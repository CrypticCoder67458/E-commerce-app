import {useState,useEffect,useContext} from "react"
import { Product } from "./Product"
import '../../Styles/home-page.css'
import { ShownProductsContext } from "../../Context/ShownProductsContext"
import { ProductsContext } from "../../Context/ProductsContext"
import { CurrentCategoryContext } from "../../Context/CurrentCategoryContext"
export const Products = () => {
    const { shownProducts, setShownProducts, productNotFound } = useContext(ShownProductsContext);
    const { productsByCategory } = useContext(CurrentCategoryContext);

    useEffect(() => {
        setShownProducts(productsByCategory);
    }, [productsByCategory]);

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

  
  
        
        
        
        
        
   
   