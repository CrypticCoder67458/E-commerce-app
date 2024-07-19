import React from 'react';
import { sortBy } from '../../utils/SortByFunctions';
import {useContext} from 'react'
import{ShownProductsContext} from '../../Context/ShownProductsContext'
import{CurrentCategoryContext} from '../../Context/CurrentCategoryContext'
export const SortBy = () => {
    const{productsByCategory}=useContext(CurrentCategoryContext)
    const{setShownProducts}=useContext(ShownProductsContext)
  const handleSelectChange = (event) => {
    sortBy(event.target.value,setShownProducts,productsByCategory);
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