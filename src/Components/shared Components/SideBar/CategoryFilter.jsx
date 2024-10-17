import React from 'react'
import '../../../Styles/home-page.css'
import { FaAngleDown,FaAngleUp } from "react-icons/fa";
import { ProductsContext } from '../../../Context/ProductsContext';

const categories=["Tv","Laptop","Mobile","Audio","Gaming","Appliances"]
export const CategoryFilter = () => {
  const [shouldShow, setShouldShow] = React.useState(true);
  const { currentCategory, setCurrentCategory } = React.useContext(ProductsContext);



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
            <label key={category} className='oswald-title-light'>
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
