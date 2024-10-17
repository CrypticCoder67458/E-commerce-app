import React from 'react'
import '../../../Styles/products-page.css'
import { CategoryFilter } from './CategoryFilter';
import { BrandFilter } from './BrandFilter';
import { PriceFilter } from './PriceFilter';
export const SideBar = () => {
return (
      <div className='side-bar   '>
        <CategoryFilter />
        <BrandFilter />
        <PriceFilter />
      </div>

)
}

