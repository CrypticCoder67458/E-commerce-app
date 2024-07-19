import  { createContext, useState,useEffect ,useContext} from 'react';

import { ShownProductsContext } from './ShownProductsContext';
import { CurrentCategoryContext } from './CurrentCategoryContext';
export const FiltersContext = createContext();


export const FiltersProvider = ({ children }) => {
  /*findHighestPrice(productsByCategory)*/
  const [minPrice, setMinPrice] =useState(0);
  const [maxPrice, setMaxPrice] = useState(6000);
  const[productsByBrand,setProductsByBrand]=useState([])



  return (
    <FiltersContext.Provider value={{ minPrice, setMinPrice, maxPrice, setMaxPrice ,productsByBrand,setProductsByBrand}}>{children}</FiltersContext.Provider>
  )
}
