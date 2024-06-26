import React from 'react'

import sliderImg3 from'../../../public/images/slider-image-3.jpg'
import { PiCaretLineLeftBold,PiCaretLineRightBold } from "react-icons/pi";
import '../../Styles/home-page.css'
import '../../Styles/styles.css'


const sliderImages=[
    
    "https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336669.jpg",
    "https://img.freepik.com/premium-psd/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.jpg",
    
    sliderImg3
    
]


export const Slider = () => {
    const[indexCurrentImg,setIndexCurrentImg]=React.useState(0)
    React.useEffect(()=>{
        const interval=setInterval(()=>
            {handleRightClick()},3000)
        return ()=>{
            clearInterval(interval)
        }
    })
    
    function handleLeftClick(){
        if(indexCurrentImg===0){
            setIndexCurrentImg(sliderImages.length-1)
        }
        else{
            setIndexCurrentImg((prevIndex)=>prevIndex-1)
        }
    }
    function handleRightClick(){
        if(indexCurrentImg===sliderImages.length-1){
            setIndexCurrentImg(0)
        }
        else{
            setIndexCurrentImg((prevIndex)=>prevIndex+1)
        }
    }
    return (
        <div className='slider'>
            <div className='slider-content'>
                <PiCaretLineLeftBold
                    size={40} 
                    color="white"
                    className='slider-icon left'
                    onClick={handleLeftClick}
                />
                <img 
                    src={sliderImages[indexCurrentImg]}
                    className='card'
                />
                
                <PiCaretLineRightBold
                    size={40} 
                    color="white"
                    className='slider-icon right'
                    onClick={handleRightClick}
                />
            </div>
        </div>
    );
    
}