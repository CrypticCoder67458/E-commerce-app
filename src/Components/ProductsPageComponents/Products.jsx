import { useContext, useEffect } from "react";
import { Product } from "./Product";
import "../../Styles/home-page.css";
import { ProductsContext } from "../../Context/ProductsContext";
import { filterByCategory } from "../../utils/FilterProduct";

export const Products = () => {
    const { shownProducts, setShownProducts, currentCategory, products, setMinPrice, setMaxPrice, setCurrentBrands } = useContext(ProductsContext);

    const renderProducts = () => {
        console.log('Rendering products:', shownProducts);
        const productsContainer = (
            <div className='products-container'>
                {
                    shownProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        );

        const resetFilters = () => {
            setMinPrice(0);
            setMaxPrice(Infinity);
            setCurrentBrands([]);
            setShownProducts(filterByCategory(products, currentCategory));
        };

        const noProductsFound = (
            <div className={shownProducts.length ? 'hidden' : 'product-not-found'}>
                <p>No Products Found</p>
                <button onClick={resetFilters}>Continue Shopping</button>
            </div>
        );

        return (
            <>
                {productsContainer}
                {noProductsFound}
            </>
        );
    };

    useEffect(() => {
        console.log('Products updated:', products);
    }, [products]);

    return renderProducts();
};
  
  
        
        
        
        
        
   
   