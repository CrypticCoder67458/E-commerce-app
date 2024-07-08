import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";

const categories=["Tv","Laptop","Mobile","Audio"]
export const CategoryFilter = ({products,setProductsByCategory,currentCategory,setCurrentCategory,setProductsFilterecByCategory}) => {
    const [shouldShow, setShouldShow] = React.useState(true);
    const filteredProducts = products.filter(product => product.category.toLowerCase() === currentCategory);
    React.useEffect(() => {
        setProductsByCategory(filteredProducts)
        setProductsFilterecByCategory(filteredProducts)
    }, [currentCategory])
    
      return (
        <div className='filter-prompt' >
            <h3 
                className='filter' 
                onClick={() => setShouldShow(!shouldShow)}>
                    Categories 
                    <FaAngleDown size={20} className='arrow'/>
            </h3>
            {shouldShow ? (
                <p onClick={() => setProductsByCategory(products)} 
                className='category-tab'>All Products</p>
            ) : null}
            {shouldShow ?categories.map((category) => (
                <p onClick={() => setCurrentCategory(category.toLowerCase())} 
                className='category-tab'>{category}</p>
            )) : null}
        </div>
      )
}
