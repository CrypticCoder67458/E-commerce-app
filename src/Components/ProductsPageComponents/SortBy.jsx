import React from 'react';
import { sortBy } from '../../utils/SortByFunctions';
import {useContext} from 'react'
import{ProductsContext} from '../../Context/ProductsContext'
import{filterProducts} from '../../utils/FilterProduct'
export const SortBy = () => {
    
    const{setShownProducts, currentCategory, currentBrands, minPrice, maxPrice,products}=useContext(ProductsContext)

    const handleSelectChange = (event) => {
    const filteredProducts =filterProducts(products, currentCategory, currentBrands, minPrice, maxPrice)
  
    sortBy(event.target.value,setShownProducts,filteredProducts);
  };

  return (
    
      <select name="sortBy" 
        id="sortBy" 
        defaultValue="relevance"
        onChange={(handleSelectChange)}
        className='sortBy-select'>
          <option value="relevance">Sort By: Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="price-desc">Cheapest</option>
          <option value="price-asc">Most expensive</option>
          <option value="onSale">On sale</option>
      </select>
   
  );
};