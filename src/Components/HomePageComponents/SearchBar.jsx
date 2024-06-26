import React from 'react'
import { FiSearch } from 'react-icons/fi';
import '../../Styles/home-page.css'

export const SearchBar = ({ productsByCategory, setProductsByCategory, setProductNotFound,products }) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const filterProducts = React.useCallback((event) => {
    const productsFiltred = products.filter(product =>
      product.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setProductNotFound(productsFiltred.length === 0);
    setProductsByCategory(productsFiltred);
    setSearchTerm(event.target.value);
  }, [productsByCategory, setProductNotFound, setProductsByCategory, products]);
  

  return (
    <div className="search-container">
      <input
        className="search-input"
        placeholder="Search for Product"
        onChange={filterProducts}
        value={searchTerm}
      />
      <span 
        className="search-icon" 
        onClick={() => setSearchTerm('')}>
        <FiSearch size={24} color="black" />
      </span>
    </div>
  );
};