import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";

export const PriceFilter = ({productsByCategory,setProductsByCategory,productsFilterecByCategory}) => {
    const [shouldShow, setShouldShow] = React.useState(false);
    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(9999);
    React.useEffect(() => {
        
        if(productsByCategory.length === 0) setProductsByCategory(productsFilterecByCategory)
        setProductsByCategory((products) =>products.filter(product => product.price >= minPrice && product.price <= maxPrice))
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
                <form className='price-filter-form'>
                    <label>from:</label>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </form>
                <form className='price-filter-form'>
                    <label>to:</label>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </form>
            </div> : null}
        </div>
  )
}
