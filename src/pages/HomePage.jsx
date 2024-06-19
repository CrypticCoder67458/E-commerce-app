import { useState,useEffect,useContext } from 'react'
import {CartContext} from './CartContext';
import { Navbar } from '../Components/shared Components/Navbar';
import "../Styles/styles.css"
import { Slider } from '../Components/HomePageComponents/Slider';
import { CategoriesBar } from '../Components/HomePageComponents/CategoriesBar';
import { Products } from '../Components/HomePageComponents/Products';
import { SearchBar } from '../Components/HomePageComponents/SearchBar';


function HomePage() {
  
  const [products,setProducts]=useState([])
  const [productsByCategory,setProductsByCategory]=useState([])
  const { cartProducts, setCartProducts } = useContext(CartContext);
  useEffect(() => {
    fetchProducts();
  }, []);
 
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
      setProductsByCategory(data.products)
    } catch (error) {
      console.error("Fetching products failed: ", error);
    }
  }
  console.log(products)

  return(
    <div className='home page'>
      <Navbar 
        cartProducts={cartProducts}/>
      <div className='container' >
        <CategoriesBar 
          products={products}
          setProductsByCategory={setProductsByCategory}/>
        <div>
          <Slider/>
          <SearchBar 
          productsByCategory={productsByCategory}
          setProductsByCategory={setProductsByCategory}
          products={products}
          />
          <Products 
            productsByCategory={productsByCategory}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        </div>
        </div>
        
        
      </div>
      
  )
}

export default HomePage
