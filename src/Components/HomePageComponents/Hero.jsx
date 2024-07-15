import React from 'react'
import '../../Styles/home-page.css'
import ad1 from '../../../public/images/ad-banner1.jpg'	
export const Hero = () => {
  return (
    <div className='home-page-welcome '>
               
                <div className='home-page-welcome-text'>
                    <p>Find the best deals at</p>
                    <div className='flex'>
                      <h2 className='techhaven'>TechHaven</h2>
                      <p>.com</p>
                  </div>
                  <div className='shop-now'>
                        <a>Shop now!</a>      
                  </div>
                </div>
                <img src={ad1} alt="ad-1" className='card' />
    </div>
  )
}
