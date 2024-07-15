import React from 'react'
import { PiCaretLineLeftBold,PiCaretLineRightBold } from "react-icons/pi";
import banner1 from '../../../public/images/ad-banner1.jpg'
import banner2 from '../../../public/images/ad-banner 2.jpg'
import banner3 from'../../../public/images/ad-banner3.jpg'


import '../../Styles/home-page.css'
import '../../Styles/styles.css'


const sliderImages=[
    
    /*"https://img.freepik.com/free-photo/big-sale-discounts-products_23-2150336669.jpg",
    "https://img.freepik.com/premium-psd/smart-phone-sale-promotion-black-friday-sale-web-banner-template_179771-192.jpg",*/
    banner1,
    banner2,
    banner3
    
]


export const Slider = () => {
    const[indexCurrentImg,setIndexCurrentImg]=React.useState(0)
    React.useEffect(()=>{
        const interval=setInterval(()=>
            {handleRightClick()},4000)
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
            <PiCaretLineLeftBold
                    size={40} 
                    color="black"
                    onClick={handleLeftClick}
                />
                <img 
                    src={sliderImages[indexCurrentImg]}
                    className='card slider-content'
                />
            <PiCaretLineRightBold
                    size={40} 
                    color="black"
                    onClick={handleRightClick}
                />
        </div>
    );
    
}