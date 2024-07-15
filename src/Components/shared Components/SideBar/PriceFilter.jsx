import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';


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
                <form className='price-filter-form'>
                    <label>min:</label>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                </form>
                <form className='price-filter-form'>
                    <label>max:</label>
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                </form>
            </div> : null}
        </div>
  )
}
