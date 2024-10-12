import {useState,useEffect,useContext} from 'react'
import '../../../Styles/home-page.css'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { ProductsContext } from '../../../Context/ProductsContext';
import { filterByCategory } from '../../../utils/FilterProduct';
export const BrandFilter = () => {  
    const [shouldShow, setShouldShow] = useState(true);  
    const { setCurrentBrands,currentCategory,products } = useContext(ProductsContext);  
    const [brands, setBrands] = useState([]);  
    const [isChecked, setIsChecked] = useState([]);  
    const[productsByCategory, setProductsByCategory] = useState([]);


    useEffect(() => {
        setProductsByCategory(filterByCategory(products, currentCategory));
    }, [currentCategory, products]);

    useEffect(() => {  
        const fetchedBrands = getBrands();  
        setBrands(fetchedBrands);  
        setIsChecked(new Array(fetchedBrands.length).fill(false));
    }, [productsByCategory]);  

     
    useEffect(() => {  
        setCurrentBrands(brands.filter((brand, index) => isChecked[index]));  
    }, [isChecked, brands]);

    const handleChange = (position) => {  
        const updatedCheckedState = isChecked.map((item, index) =>  
            index === position ? !item : item  
        );  
        setIsChecked(updatedCheckedState);  
    };  

    function getBrands() {  
        const uniqueBrands = new Set();
        productsByCategory.forEach((product) => {  
            uniqueBrands.add(product.brand);  
        });  
        return Array.from(uniqueBrands); 
    }  

    return (  
        <div className='filter-prompt'>  
            <h3   
                className='filter'   
                onClick={() => setShouldShow(!shouldShow)}>  
                Brands   
                {shouldShow ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}  
            </h3>  
            {shouldShow && brands.length > 0 ? (  
                <form className='filter-form'>  
                    {brands.map((brand, index) => (  
                        <label key={brand + '-' + index}>  
                            <input   
                                type="checkbox"   
                                name={brand}   
                                value={brand}  
                                checked={isChecked[index]}  
                                onChange={() => handleChange(index)}   
                                className='filter-input'  
                            />  
                            {brand}  
                        </label>  
                    ))}  
                </form>  
            ) : null}  
            <div className="horizontal-line"></div>  
        </div>  
    );  
};  
