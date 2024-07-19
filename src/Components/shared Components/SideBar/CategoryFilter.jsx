import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { ProductsContext } from '../../../Context/ProductsContext';
import { CurrentCategoryContext } from '../../../Context/CurrentCategoryContext';
import { ShownProductsContext } from '../../../Context/ShownProductsContext';
import{Link} from 'react-router-dom'

const categories=["Tv","Laptop","Mobile","Audio","Gaming","Appliances"]
export const CategoryFilter = () => {
  const [shouldShow, setShouldShow] = React.useState(true);
  const { currentCategory, setCurrentCategory, productsByCategory } = React.useContext(CurrentCategoryContext);
  const { setShownProducts } = React.useContext(ShownProductsContext);

  React.useEffect(() => {
    setShownProducts(productsByCategory);
  }, [currentCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value.toLowerCase();
    setCurrentCategory(category);
  };

  return (
    <div className='filter-prompt'>
      <h3 className='filter' onClick={() => setShouldShow(!shouldShow)}>
        Categories {shouldShow ? <FaAngleUp size={20} /> : <FaAngleDown size={20} />}
      </h3>
      {shouldShow && (
        <form className='filter-form '>
          {categories.map((category) => (
            <label key={category}>
              <input
                type='radio'
                name='category'
                value={category}
                onChange={handleCategoryChange}
                className='filter-input'
                checked={currentCategory === category.toLowerCase()}
              />
              {category}
            </label>
          ))}
        </form>
      )}
      <div className="horizontal-line"></div>
    </div>
  );
};
