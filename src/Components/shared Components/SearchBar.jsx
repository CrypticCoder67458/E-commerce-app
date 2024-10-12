import {useContext,useState,useEffect} from 'react'
import { FiSearch } from 'react-icons/fi';
import '../../Styles/navbar.css'
import { ProductsContext } from '../../Context/ProductsContext';
import '../../Styles/searchbar.css'
import { useNavigate, useLocation } from 'react-router-dom';
export const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const[suggestions,setSuggestions] = useState([]);
  const {products,setCurrentCategory} = useContext(ProductsContext);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if(searchTerm !== '') {
    setSuggestions(products.filter((product) => product.title.toLowerCase().includes(searchTerm.toLowerCase())))
  }},[searchTerm,products])


  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/products/product/${suggestions[0].id}`, { replace: true, state: { from: location.pathname } });
    }
  };

  const handleClick = (event) => {
    navigate(`/products/product/${event.target.id}`, { replace: true, state: { from: location.pathname } });
  };
  

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          placeholder="Search for Product"
          onChange={handleChange}
          value={searchTerm}
          onKeyDown={handleKeyDown}
        />
        <span 
          className="search-icon" 
          onClick={() => setSearchTerm('')}>
          <FiSearch size={24} color="black" />
        </span>
      </div>

      {suggestions.length > 0 && searchTerm!=='' && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            
              <div
                key={'suggestion-'+index}
                className="suggestion"
                onClick={handleClick}
                id={suggestion.id}
                >
                  {suggestion.title}
                
              </div>
           
            
          ))}
        </div>
      )}
    </>
    
  );
};

