import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
import { CategoryFilter } from './CategoryFilter';
import { BrandFilter } from './BrandFilter';
import { PriceFilter } from './PriceFilter';

export const SideBar = ({products,setProductsByCategory,productsByCategory}) => {
  const[currentCategory,setCurrentCategory]=React.useState("")
  const[productsFilterecByCategory,setProductsFilterecByCategory]=React.useState(productsByCategory)
return (
  <div className='categories-bar'>
      
      <CategoryFilter 
      products={products} 
      setProductsByCategory={setProductsByCategory} 
      currentCategory={currentCategory} 
      setCurrentCategory={setCurrentCategory}
      setProductsFilterecByCategory={setProductsFilterecByCategory}/>
      <BrandFilter
      productsFilterecByCategory= {productsFilterecByCategory}
      setProductsFilterecByCategory={setProductsFilterecByCategory}
      products={products} 
      setProductsByCategory={setProductsByCategory} productsByCategory={productsByCategory}
      currentCategory={currentCategory} />
      <PriceFilter 
      productsByCategory={productsByCategory}
      setProductsByCategory={setProductsByCategory}
      productsFilterecByCategory= {productsFilterecByCategory}
      />
  </div>
)
}

