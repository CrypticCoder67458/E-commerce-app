import React from 'react'
export const ProductsContext = React.createContext()
export const ProductsProvider = ({children}) => {
    
  const [products,setProducts]=React.useState([])
  React.useEffect(() => {
    fetchProducts();
  }, []);
 
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.in/api/products?limit=150");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Fetching products failed: ", error);
    }
  }
  

  return (
    <ProductsContext.Provider value={{products,setProducts}}>{children}</ProductsContext.Provider>
  )
}
