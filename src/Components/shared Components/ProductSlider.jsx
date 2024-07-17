import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from  '../ProductsPageComponents/Product';
import '../../Styles/styles.css'
export const ProductSlider = ({products,text}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 4,
          slidesToSlide: 4       },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4,
          slidesToSlide:4,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 3,
          slidesToSlide: 3,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 3,
        }
      };
  return (
    <div>
        <h2 className='slider-title'>{text}</h2>
        <Carousel responsive={responsive} 
        keyBoardControl={true}
        className='product-slider'
        
        >
            {products.map((product) => (
                    <Product key={product.id} product={product}  />
                ))}
        </Carousel>;
  </div>
  )
}
