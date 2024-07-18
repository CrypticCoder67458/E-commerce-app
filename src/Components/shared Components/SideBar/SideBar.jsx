import React from 'react'
import '../../../Styles/products-page.css'
import { CategoryFilter } from './CategoryFilter';
import { BrandFilter } from './BrandFilter';
import { PriceFilter } from './PriceFilter';
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
export const SideBar = () => {
const{shownProducts}=React.useContext(ShownProductsContext)
return (
  <div >
    <h3 className='side-bar-search-result'>{shownProducts.length > 0 && `(${shownProducts.length} results)`}</h3>
    <div className='side-bar'>
      <CategoryFilter />
      <BrandFilter />
      <PriceFilter />
  </div>
  </div>
  
)
}

