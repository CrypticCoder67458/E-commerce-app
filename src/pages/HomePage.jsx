import { useState,useEffect,useContext } from 'react'
import { Navbar } from '../Components/shared Components/Navbar';
import "../Styles/styles.css"
import { Slider } from '../Components/HomePageComponents/Slider';
import {Hero} from '../Components/HomePageComponents/Hero'

import { CategorySelection } from '../Components/HomePageComponents/CategorySelection';

function HomePage() {
  
  
  

  return(
    <div className='home page'>
      <Navbar />
      <Hero	/>
      <CategorySelection/>
          
       

        


        
        
      </div>
      
  )
}

export default HomePage
