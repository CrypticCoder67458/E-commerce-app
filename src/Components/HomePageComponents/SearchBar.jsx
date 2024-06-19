import React from 'react'
import { FiSearch } from 'react-icons/fi';
import '../../Styles/home-page.css'

export const SearchBar = () => {
  return (
    <div className="search-container">
        <input className="search-input" placeholder="Search for Product" />
        <span className="search-icon">
          <FiSearch size={24}  color='black'/>
        </span>
        
    </div>
  )
}
