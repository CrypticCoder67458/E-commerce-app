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
function handleClick(brand){
    
    const updatedProducts = productsByCategory.filter(product => product.brand.toLowerCase() === brand);
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
                    <ul className='category-tab'>
                        {brands.map((brand, index) => (
                            <Link to={`/products/${currentCategory}/${brand}`}>
                                <li key={index} onClick={() => handleClick(brand)} className='brand-item'>{brand}</li>
                            </Link>
                            
                        ))}
                    </ul>
                ) : null}
                
            </div>
  )

}
