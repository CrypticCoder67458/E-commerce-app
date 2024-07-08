import { useState,useEffect,useContext } from 'react'
import {CartContext} from './CartContext';
import { Navbar } from '../Components/shared Components/Navbar';
import "../Styles/styles.css"
import { Slider } from '../Components/HomePageComponents/Slider';
import { SideBar } from '../Components/HomePageComponents/SideBar/SideBar';
import { Products } from '../Components/HomePageComponents/Products';
import { SearchBar } from '../Components/HomePageComponents/SearchBar';


function HomePage() {
  
  const [products,setProducts]=useState([])
  const [productsByCategory,setProductsByCategory]=useState([])
  const [productNotFound, setProductNotFound] = useState(false);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  useEffect(() => {
    fetchProducts();
  }, []);
 
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products?limit=50");
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
        cartProducts={cartProducts}
        />
      <div className='container' >
        
        <SideBar 
          productsByCategory={productsByCategory}
          products={products}
          setProductsByCategory={setProductsByCategory}/>
        <div className='home-page-content'>
          <Slider/>
          <SearchBar 
            products={products}
            productsByCategory={productsByCategory}
            setProductsByCategory={setProductsByCategory}
            setProductNotFound={setProductNotFound}
          />
          <Products 
            products={products}
            productsByCategory={productsByCategory}
            setProductsByCategory={setProductsByCategory}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
            productNotFound={productNotFound} 
            setProductNotFound={setProductNotFound}
          />
        </div>
      </div>
        
        
      </div>
      
  )
}

export default HomePage
