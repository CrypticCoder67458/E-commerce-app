import React from 'react'
import '../../../Styles/home-page.css'
import { CategoryFilter } from './CategoryFilter';
import { BrandFilter } from './BrandFilter';
import { PriceFilter } from './PriceFilter';

export const SideBar = () => {

return (
  <div className='categories-bar'>
      
      <CategoryFilter />
      <BrandFilter />
      <PriceFilter />
  </div>
)
}

