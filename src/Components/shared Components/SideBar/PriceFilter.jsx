import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}


export const PriceFilter = () => {
    const{shownProducts,setShownProducts}=React.useContext(ShownProductsContext)
    const [shouldShow, setShouldShow] = React.useState(false);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(9999);
    let productsByCategory=shownProducts
    React.useEffect(() => {
        
        if(shownProducts.length === 0) 
            setShownProducts(productsByCategory)
        setShownProducts((products) =>products.filter(product => product.price >= minPrice && product.price <= maxPrice))
    }, [minPrice, maxPrice])
    return (
        <div className='filter-prompt' >
            <h3 
                className='filter' 
                onClick={() => setShouldShow(!shouldShow)}>
                    Price
                    <FaAngleDown size={20} className='arrow'/>
            </h3>
            {shouldShow ? <div>
                <b className='filter-price-text'>${minPrice} - ${maxPrice}+</b>
                <br/>
                <br/>
                <br/>
                <Box sx={{ width: 120 }}>
                    
                    <Slider
                        aria-label="Small steps"
                        defaultValue={0}
                        getAriaValueText={valuetext}
                        step={0.00000001}
                        min={0}
                        max={3000}
                        value={[minPrice, maxPrice]}
                        onChange={(e, newValue) => {
                            setMinPrice(newValue[0])
                            setMaxPrice(newValue[1])
                        }}
                        valueLabelDisplay="auto"
                    />
                </Box>
            </div> : null}
           
        </div>
  )
}

