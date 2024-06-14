import React from 'react'
import { products } from '../../public/data/products'
import '../styles/components.css'
import { Product } from './Product'
import phoneImg from '../../public/data/assets/logos/iphone deco-1.png'
import { Category } from './Category'

const categories=[
  {type:"phone",
    img:phoneImg,
  },
  {type:"laptop",
    img:phoneImg,
  },
  {type:"tablet",
    img:phoneImg,
  },
  {type:"others",
    img:phoneImg,
  }
]

export const Products = ({ setTotalQuantity, setCartProducts, cartProducts }) => {

  const [productsByCategory, setProductsByCategory] = React.useState(products)
  const [currentCategory, setCurrentCategory] = React.useState('phone')
  const[pageNumber,setPageNumber]=React.useState(0)

  React.useEffect(() => {
    setProductsByCategory(products.map(product => {
      if (product.category !== 'phone' && product.category !== 'laptop' && product.category !== 'tablet') {
        return { ...product, category: 'others' };
      }
      return product;
    }).filter(product => product.category === currentCategory));
  }, [currentCategory]);

  return (
    <div className='products-section'>
      <div className='categories'>
        {categories.map(category => <Category
          key={category}
          category={category}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory} />)
        }
      </div>
      <h2>Our Products</h2>
      <p className='catchy-phrase'>Discover the tech that will change your life!</p>
      <div className='product-container'>
        {productsByCategory.map((product) => <Product
          key={product.id}
          product={product}
          setTotalQuantity={setTotalQuantity}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />)
        }
      </div>
      
      <p className='catchy-phrase'>Where technology meets style - shop now!</p>
      <h2>Our Products</h2>
      
      <div className='product-container'>
        {products.map((product,index) => {
          if(index>=((pageNumber+1)*4) && index<=((pageNumber)*4)  ){
            return
          }
          else{
            return <Product
            key={product.id}
            product={product}
            setTotalQuantity={setTotalQuantity}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />}
          })
        }
        <button onClick={()=>setPageNumber((prevPageNum)=>prevPageNum+1)}>Load more</button>
      </div>
    </div>
  )
}

