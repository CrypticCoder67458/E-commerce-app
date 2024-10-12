import React from 'react'
import { FiSearch } from 'react-icons/fi';
import '../../Styles/navbar.css'
import { ProductsContext } from '../../Context/ProductsContext';
import '../../Styles/searchbar.css'
import { Link } from 'react-router-dom';
export const SearchBar = () => {

  const [searchTerm, setSearchTerm] = React.useState('');
  const[suggestions,setSuggestions] = React.useState([]);
  const {products,setCurrentCategory} = React.useContext(ProductsContext);
  

  React.useEffect(() => {
    if(searchTerm !== '') {
    setSuggestions(products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())))
  }},[searchTerm,products])

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for Product"
          onChange={handleChange}
          value={searchTerm}
        />
        <span 
          className="search-icon" 
          onClick={() => setSearchTerm('')}>
          <FiSearch size={24} color="black" />
        </span>
      </div>

      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            
              <Link
                to={`/products/product/${suggestion.id}`}
                key={'suggestion-'+index}
                className="suggestion"
                onClick={() => {
                  setCurrentCategory(suggestion.category);
                  setSearchTerm('');
                  setSuggestions([]);
                }}
                >
                  {suggestion.title}
                
              </Link>
           
            
          ))}
        </div>
      )}
    </>
    
  );
};

