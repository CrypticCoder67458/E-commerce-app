import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
export const BrandFilter = ({setProductsByCategory,productsByCategory,productsFilterecByCategory}) => {
    const [shouldShow, setShouldShow] = React.useState(true);
    const [brands,setBrands]=React.useState([])
   React.useEffect(() => {
        setBrands(getBrands());
    }, [productsFilterecByCategory]);
    function getBrands(){
        let brands=[]
        productsFilterecByCategory.map((product)=>{
            if(!brands.includes(product.brand)){
                brands.push(product.brand)
            }
        })
        return brands
    } 
    function handleClick(brand){
        console.log(`Clicked on brand: ${brand}`)
        console.log(`Filtering products ${JSON.stringify(productsFilterecByCategory)}}`)
        setProductsByCategory(productsFilterecByCategory.filter(product => product.brand.toLowerCase() === brand))
        console.log(`Updated products by category after filtering by brand: ${JSON.stringify(productsByCategory)}`)
        
    }
    
    return (
        <div className='filter-prompt' >
                <h3 
                    className='filter' 
                    onClick={() => setShouldShow(!shouldShow)}>
                        Brands 
                        <FaAngleDown size={20} className='arrow'/>
                </h3>
                {shouldShow && brands.length>0 ? brands.map((brand) => (
                <p onClick={() => handleClick(brand)} 
                className='category-tab'>{brand}</p>
            )) : null}
                
            </div>
  )
}
