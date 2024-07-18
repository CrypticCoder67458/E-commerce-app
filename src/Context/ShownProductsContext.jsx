import React, { createContext, useState,useEffect ,useContext} from 'react';
import { CurrentCategoryContext } from './CurrentCategoryContext';
export const ShownProductsContext = createContext();

export const ShownProductsProvider = ({ children }) => {
    const [shownProducts,setShownProducts]=useState([])
    const [productNotFound, setProductNotFound] = useState(false);
    const{productsByCategory}=useContext(CurrentCategoryContext)

    useEffect(() => {
      if (shownProducts.length === 0) { 
        setProductNotFound(true);
      } else {
        setProductNotFound(false);
      }})
      useEffect(() => {
        setShownProducts(productsByCategory)
      },[productsByCategory])
console.log(shownProducts)

  return (
    <ShownProductsContext.Provider value={{ shownProducts,setShownProducts,productNotFound}}>
      {children}
    </ShownProductsContext.Provider>
  );
};