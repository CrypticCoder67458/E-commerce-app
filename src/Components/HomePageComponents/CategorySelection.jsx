import React from 'react'
import '../../Styles/home-page.css'
import mobile from '../../../public/images/phone.png'
import tv from '../../../public/images/tv.png'
import laptop from '../../../public/images/laptop.png'
import audio from '../../../public/images/headphone.png'
import gaming from '../../../public/images/gaming.png'
import appliance from '../../../public/images/appliance.png'

import { Link } from 'react-router-dom'
import { ProductsContext } from '../../Context/ProductsContext'
export const CategorySelection = () => {
  const { setCurrentCategory } = React.useContext(ProductsContext);

  const categories = [
    { name: 'mobile', image: mobile },
    { name: 'tv', image: tv },
    { name: 'laptop', image: laptop },
    { name: 'audio', image: audio },
    { name: 'gaming', image: gaming },
    { name: 'appliances', image: appliance },
  ];
  

  const renderCategory = ({ name, image }, index) => (
    <Link key={index} 
      to={`/products/${name}`}
      onClick={() => setCurrentCategory(name)}
      className='home-page-category'
    >
      <div className='category-border'>
        <img src={image} alt={name} id={name} />
      </div>
      <b>{name}</b>
    </Link>
  );

  return (
    <div className='home-page-categories-container'>
      <h2>Our Categories:</h2>
      <div className='home-page-categories'>{categories.map(renderCategory)}</div>
    </div>
  );
};

