import {React, useState, useEffect, useContext} from 'react'
import '../../../Styles/products-page.css'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import{FiltersContext} from '../../../Context/FiltersContext'


export const PriceFilter = () => {
    const { shownProducts, setShownProducts } = useContext(ShownProductsContext);
    const { productsByCategory } = useContext(CurrentCategoryContext);
    const { minPrice, setMinPrice, maxPrice, setMaxPrice,productsByBrand} = useContext(FiltersContext);
    const [shouldShow, setShouldShow] = useState(false);

    function filterByPrice(products) {
        return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    }
    useEffect(() => {
       
        setMaxPrice(findHighestPrice(productsByCategory));
        setMinPrice(0);
    }, [productsByCategory]);
    console.log(minPrice, maxPrice);
    useEffect(() => {
        let filteredProducts = productsByCategory;
      
        if (productsByBrand.length > 0) {
            filteredProducts = productsByBrand;
        }
        console.log(filteredProducts);

        filteredProducts = filterByPrice(filteredProducts);

        setShownProducts(filteredProducts);
    }, [minPrice, maxPrice, productsByCategory, productsByBrand]);

    
    const formatPrice = (price) => {
        return Math.trunc(price);
    };

    function valuetext(value) {
        return `${formatPrice(value)}`;
    }

    function findHighestPrice(products) {
        let highestPrice = 0;
        products.forEach((product) => {
            if (product.price > highestPrice) {
                highestPrice = product.price;
            }
        });
        return highestPrice;
    }

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
                    <b className='filter-price-text'>{`$${formatPrice(minPrice)}`} - {`$${formatPrice(maxPrice)}`}</b>
                    <br/>
                    <Box className='price-box'>
                        <Slider
                            aria-label="Small steps"
                            defaultValue={[minPrice, maxPrice]}
                            getAriaValueText={valuetext}
                            step={1}
                            min={0}
                            max={findHighestPrice(productsByCategory)}
                            value={[(minPrice||0),(maxPrice||0)]}
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
