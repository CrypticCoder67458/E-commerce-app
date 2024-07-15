import {useState,useEffect,useContext}from 'react'
import React from 'react'
import { ProductsContext } from './ProductsContext';
export const CurrentCategoryContext = React.createContext();

export const CurrentCategoryProvider = ({ children }) => {
  const{products}=useContext(ProductsContext)
  const[currentCategory,setCurrentCategory]=useState("")
  const[productsByCategory,setProductsByCategory]=useState(products)
  useEffect(()=>{
    const filteredProducts = currentCategory==='' ? products : products.filter(product => product.category.toLowerCase() === currentCategory);
    setProductsByCategory(filteredProducts)
  },[currentCategory])

  return (
    <CurrentCategoryContext.Provider value={{currentCategory,setCurrentCategory,productsByCategory}}>{children}</CurrentCategoryContext.Provider>
  )
}
