import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
import { ProductsContext } from '../../../Context/ProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';
import { ShownProductsContext } from '../../../Context/ShownProductsContext';


const categories=["Tv","Laptop","Mobile","Audio"]
export const CategoryFilter = () => {
    const { products } = React.useContext(ProductsContext);
    const [shouldShow, setShouldShow] = React.useState(true);
    const { currentCategory, setCurrentCategory, productsByCategory } = React.useContext(CurrentCategoryContext);
    const{shownProducts,setShownProducts}=React.useContext(ShownProductsContext)

    React.useEffect(() => {
        setShownProducts(productsByCategory)
    },[currentCategory])
    
      return (
        <div className='filter-prompt' >
            <h3 
                className='filter' 
                onClick={() => setShouldShow(!shouldShow)}>
                    Categories 
                    <FaAngleDown size={20} className='arrow'/>
            </h3>
            {shouldShow && (
                <>
                    
                    {categories.map((category) => (
                        <p onClick={() => setCurrentCategory(category.toLowerCase())} 
                        className='category-tab' key={category}>{category}</p>
                    ))}
                </>
            )}
        </div>
      )
}
