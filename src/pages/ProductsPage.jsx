import {useContext} from 'react'
import { Navbar } from '../Components/shared Components/Navbar'
import{SideBar} from '../Components/shared Components/SideBar/SideBar'
import{Products} from '../Components/ProductsPageComponents/Products'
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { SortBy } from '../Components/ProductsPageComponents/SortBy'
import { ProductsContext } from '../Context/ProductsContext';

export const ProductsPage = () => {
  
  const{shownProducts,currentCategory}=useContext(ProductsContext)
  
  return (
    <>
      <Navbar/>
      <div>
        <h3 className='side-bar-search-result'>{shownProducts && shownProducts.length > 0 && `(${shownProducts.length} results)`}</h3>
      </div>
      <div className='container' >
        <SideBar />
        <div className='home-page-content'>
          <div className="product-header">
                      

              <Link to="/"><b><IoHomeOutline size={22} /></b></Link>
              <MdKeyboardArrowRight />
              <b>{currentCategory}</b>
          </div >
          <SortBy/>
          <Products/>
        </div>     
      </div>
    </>
    
  )
}
