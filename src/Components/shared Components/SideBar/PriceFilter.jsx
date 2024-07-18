import {React, useState, useEffect, useContext} from 'react'
import '../../../Styles/products-page.css'
import { FaAngleDown } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



export const PriceFilter = () => {
    const { shownProducts, setShownProducts } = useContext(ShownProductsContext);
    const { productsByCategory } = useContext(CurrentCategoryContext);
    const [shouldShow, setShouldShow] = useState(false);
    const [minPrice, setMinPrice] =useState(0);
    const [maxPrice, setMaxPrice] = useState(3000);
    
    useEffect(() => {
        
    setShownProducts(productsByCategory);
    setShownProducts((products) => products.filter(product => product.price >= minPrice && product.price <= maxPrice));
    }, [minPrice, maxPrice]);
    
    const formatPrice = (price) => {
        return Math.trunc(price);
    };
    function valuetext(value) {
        return `${formatPrice(value)}`;
      }
      

    return (
        <div className='filter-prompt'>
            <h3 className='filter' onClick={() => setShouldShow(!shouldShow)}>
                Price
                <FaAngleDown size={20} className='arrow'/>
            </h3>
            {shouldShow ? 
                <div>
                    <b className='filter-price-text'>{`$${formatPrice(minPrice)}`} - {`$${formatPrice(maxPrice)}`}+</b>
                    <br/>
                    
                    {/* sx={{ width: 0 }} */}
                    <Box className='price-box'>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={0}
                            getAriaValueText={valuetext}
                            step={1}
                            min={0}
                            max={3000}
                            value={[minPrice, maxPrice]}
                            onChange={(e, newValue) => {
                                setMinPrice(newValue[0]);
                                setMaxPrice(newValue[1]);
                            }}
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

