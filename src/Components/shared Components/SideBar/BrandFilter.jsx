import {useState,useEffect,useContext} from 'react'
import '../../../Styles/home-page.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';

export const BrandFilter = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const [brands,setBrands]=useState([])
    const{setShownProducts}=useContext(ShownProductsContext)
    const{productsByCategory,currentCategory}=useContext(CurrentCategoryContext)

   useEffect(() => {
        setBrands(getBrands());
    }, [productsByCategory]);
    function getBrands(){
        let brands=[]
        productsByCategory.map((product)=>{
            if(!brands.includes(product.brand)){
                brands.push(product.brand)
            }
        })
        return brands
    } 

    function handleChange(){
        if(!productsByCategory) return;
        const selectedBrands = Array.from(document.querySelectorAll('input[name="selectedBrands"]:checked'), checkbox => checkbox.value);
        const updatedProducts = selectedBrands.length === 0 ? productsByCategory : productsByCategory.filter(product => product && selectedBrands.includes(product.brand.toLowerCase()));
        setShownProducts(updatedProducts)
    
    }
    
    
    
  
    return (
        <div className='filter-prompt' >
                <h3 
                    className='filter' 
                    onClick={() => setShouldShow(!shouldShow)}>
                        Brands 
                        {shouldShow ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
                </h3>
                {shouldShow && brands.length>0 ? (
                    <form className='filter-form' onChange={handleChange}>
                        {brands.map((brand, index) => (
                            <label key={index}>
                                <input type="checkbox" name="selectedBrands" 
                                value={brand} 
                                className='filter-input'/>
                                {brand}
                            </label>
                            
                        ))}
                    </form>
                ) : null}
            <div className="horizontal-line"></div>
            </div>
  )

}
