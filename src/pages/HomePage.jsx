import { useState,useEffect,useContext } from 'react'
import { Navbar } from '../Components/shared Components/Navbar';
import "../Styles/styles.css"
import { Slider } from '../Components/HomePageComponents/Slider';
import {Hero} from '../Components/HomePageComponents/Hero'
import { ProductsContext } from '../Context/ProductsContext';
import { CategorySelection } from '../Components/HomePageComponents/CategorySelection';
import { ProductSlider } from '../Components/shared Components/ProductSlider';

function HomePage() {
  
  const{products}=useContext(ProductsContext)
  

  return(
    <div className='home page'>
      <Navbar />
      <Hero	/>
      <div className='home-page-main-content'>
        <CategorySelection/>
        <ProductSlider products={products} text={"Featured Products"}/>
      </div>
      
          
       

        


        
        
      </div>
      
  )
}

export default HomePage
