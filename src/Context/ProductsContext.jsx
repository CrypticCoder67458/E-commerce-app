import {useState,useEffect,createContext} from 'react'
import {filterProducts} from '../utils/FilterProduct'
export const ProductsContext = createContext()
export const ProductsProvider = ({children}) => {
    
  const [products,setProducts]=useState([])
  const [shownProducts,setShownProducts]=useState([])
  const[loading,setLoading]=useState(false);
  const[currentCategory,setCurrentCategory]=useState('');
  const[currentBrands,setCurrentBrands]=useState([]);
  const [minPrice, setMinPrice] =useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

    
  useEffect(() => {
    fetchProducts();
  }, []);
  
  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.in/api/products?limit=150");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      const productsWithDiscount = data.products.map(product => {
        if(product.discount>=15)
          return product
        else
          return {...product, discount: 0}
      });
      setProducts(productsWithDiscount);
      setShownProducts(productsWithDiscount);
    } catch (error) {
      console.error("Fetching products failed: ", error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!loading && products.length > 0) {
        const filteredProducts = filterProducts(products, currentCategory, currentBrands, minPrice, maxPrice);
        setShownProducts(filteredProducts);
    }
}, [currentCategory, currentBrands, minPrice, maxPrice, products, loading]);



  

  return (
    <ProductsContext.Provider value={{
      products, loading,
      shownProducts,setShownProducts,
      currentCategory,setCurrentCategory,
      currentBrands,setCurrentBrands,
      minPrice,setMinPrice,
      maxPrice,setMaxPrice,
      }
    }>{children}</ProductsContext.Provider>
  )
}
