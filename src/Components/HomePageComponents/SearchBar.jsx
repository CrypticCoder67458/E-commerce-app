import React from 'react'
import { FiSearch } from 'react-icons/fi';
import '../../Styles/home-page.css'

export const SearchBar = ({ productsByCategory, setProductsByCategory, setProductNotFound }) => {

  const [searchTerm, setSearchTerm] = React.useState('');
  function filterProducts() {
    const productsFiltred = productsByCategory.filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (productsFiltred.length <= 0) 
      setProductNotFound(true);
      setProductsByCategory(productsFiltred);
      setSearchTerm('');
  }
  

  return (

      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for Product"
          onChange={e => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <span 
          className="search-icon" 
          onClick={filterProducts}>
          <FiSearch size={24} color="black" />
        </span>
      </div>
  
  );

};