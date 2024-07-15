import {useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import {ProductsContext} from '../Context/ProductsContext'
import { Navbar } from '../Components/shared Components/Navbar'
import{SideBar} from '../Components/shared Components/SideBar/SideBar'
import{Products} from '../Components/ProductsPageComponents/Products'
export const ProductsPage = () => {
  const{cartProducts,setCartProducts}=useContext(CartContext)
  const{products}=useContext(ProductsContext)
  const {category}=useParams()
  
  return (
    <>
      <Navbar/>
      <div className='container' >
        <SideBar />
          <div className='home-page-content'>
 
          <Products/>
        </div>     
      </div>
    </>
    
  )
}
