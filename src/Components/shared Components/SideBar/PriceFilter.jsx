import {React, useState, useEffect, useContext} from 'react'
import '../../../Styles/products-page.css'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { ProductsContext } from '../../../Context/ProductsContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import{formatPrice,valuetext,findHighestPrice,findLowestPrice} from '../../../utils/PriceFunctions'
import { filterByCategory } from '../../../utils/FilterProduct';

export const PriceFilter = () => {

    const { products,minPrice, setMinPrice, maxPrice, setMaxPrice} = useContext(ProductsContext);
    const [shouldShow, setShouldShow] = useState(false);
  
    
    
    
    const handleSliderChange = (event, newValue) => {
        setMinPrice(newValue[0]);
        setMaxPrice(newValue[1]);
    };

    return (
        <div className='filter-prompt'>
            <h3 className='filter' onClick={() => setShouldShow(!shouldShow)}>
                Price
                {shouldShow ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
            </h3>
            {shouldShow ? 
                <div>
                    <b className='filter-price-text oswald-title-light'>{`$${formatPrice(minPrice)}`} - {`$${formatPrice(maxPrice)}`}</b>
                    <br/>
                    <Box className='price-box'>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={[minPrice, maxPrice]}
                            getAriaValueText={valuetext}
                            step={1}
                            min={0}
                            max={findHighestPrice(products)}
                            value={[(minPrice||0),(maxPrice||Infinity)]}
                            onChange={handleSliderChange}
                            valueLabelDisplay="off"
                        />
                    </Box>
                </div> 
                : 
                null
            }
            <div className="horizontal-line"></div>
        </div>
    );
}
