import {useState,useEffect,useContext} from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown } from "react-icons/fa";
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';
import { Link } from 'react-router-dom';
export const BrandFilter = () => {
    const [shouldShow, setShouldShow] = useState(true);
    const [brands,setBrands]=useState([])
    const{shownProducts,setShownProducts}=useContext(ShownProductsContext)
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

    function handleChange(event){
        const selectedBrands = Array.from(event.target.selectedOptions, option => option.value);
        const updatedProducts = productsByCategory.filter(product => selectedBrands.includes(product.brand.toLowerCase()));
        setShownProducts(updatedProducts)
        console.log(updatedProducts)
    }
    
  
    return (
        <div className='filter-prompt' >
                <h3 
                    className='filter' 
                    onClick={() => setShouldShow(!shouldShow)}>
                        Brands 
                        <FaAngleDown size={20} className='arrow'/>
                </h3>
                {shouldShow && brands.length>0 ? (
                    <form className='filter-form' onChange={handleChange}>
                        {brands.map((brand, index) => (
                            <label key={index}>
                                <input type="checkbox" name="selectedBrands" value={brand} className='filter-input'/>
                                {brand}
                            </label>
                            
                        ))}
                    </form>
                ) : null}
            <div className="horizontal-line"></div>
            </div>
  )

}
