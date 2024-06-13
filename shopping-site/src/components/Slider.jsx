import React from 'react'
import sliderImg1 from '../../public/data/assets/logos/slider-img-1.png'
import sliderImg2 from'../../public/data/assets/logos/slider-image-2.jpg'
import sliderImg3 from'../../public/data/assets/logos/slider-image-3.jpg'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'


const sliderImages=[sliderImg1,sliderImg2,sliderImg3]


export const Slider = () => {
    const[indexCurrentImg,setIndexCurrentImg]=React.useState(0)
    const [isHoverOn,setIsHoverOn]=React.useState(false);
    
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
        <BsArrowLeftCircleFill 
        size={40} 
        onClick={handleLeftClick}/>
        <img 
        src={sliderImages[indexCurrentImg]}
        onMouseEnter={()=>setIsHoverOn(true)}
        onMouseLeave={()=>setIsHoverOn(false)} 
         className={`white-box-effect ${isHoverOn?'shadow-effect':''}`}
         />
        <BsArrowRightCircleFill 
        size={40} 
        onClick={handleRightClick}/>
    </div>
  )
}
