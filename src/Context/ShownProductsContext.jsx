import React, { createContext, useState,useEffect } from 'react';

export const ShownProductsContext = createContext();

export const ShownProductsProvider = ({ children }) => {
    const [shownProducts,setShownProducts]=useState([])
    const [productNotFound, setProductNotFound] = useState(false);

    useEffect(() => {
      if (shownProducts.length === 0) { 
        setProductNotFound(true);
      } else {
        setProductNotFound(false);
      }})
      console.log(shownProducts)


  return (
    <ShownProductsContext.Provider value={{ shownProducts,setShownProducts,productNotFound}}>
      {children}
    </ShownProductsContext.Provider>
  );
};