import {useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import {ProductsContext} from '../Context/ProductsContext'
import { Navbar } from '../Components/shared Components/Navbar'
import{SideBar} from '../Components/shared Components/SideBar/SideBar'
import{Products} from '../Components/ProductsPageComponents/Products'
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { SortBy } from '../Components/ProductsPageComponents/SortBy'
import { ShownProductsContext } from '../Context/ShownProductsContext';

export const ProductsPage = () => {
  const{cartProducts,setCartProducts}=useContext(CartContext)
  const{products}=useContext(ProductsContext)
  const{shownProducts}=useContext(ShownProductsContext)

  const {params}=useParams()
  
  return (
    <>
      <Navbar/>
      <div>
        <h3 className='side-bar-search-result'>{shownProducts.length > 0 && `(${shownProducts.length} results)`}</h3>
      </div>
      <div className='container' >
        <SideBar />
        <div className='home-page-content'>
          {/*<div className="product-header">
                      

              <Link to="/"><b><IoHomeOutline size={22} /></b></Link>
              <MdKeyboardArrowRight />
              <b>{category}</b>
          </div >*/}
          <SortBy/>
          <Products/>
        </div>     
      </div>
    </>
    
  )
}