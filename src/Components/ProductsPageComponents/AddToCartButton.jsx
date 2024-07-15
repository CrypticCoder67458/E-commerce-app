import {useContext} from 'react'
import {ShoppingCart} from "phosphor-react"
import '../../Styles/home-page.css'
import '../../Styles/styles.css'
import {CartContext} from '../../Context/CartContext'
export const AddToCartButton = ({product}) => {
  const{cartProducts,setCartProducts}=useContext(CartContext)
    const addToCart = () => {
      const productAlreadyExists = cartProducts.find(item => item.product.id === product.id);
      if (productAlreadyExists) {
        setCartProducts(prevCartProducts =>
          prevCartProducts.map(cartProduct => {
            if (cartProduct.product.id === product.id) {
              return { ...cartProduct, quantity: cartProduct.quantity + 1 };
            } else {
              return cartProduct;
            }
          })
        );
      } else {
        setCartProducts(prevCartProducts => [...prevCartProducts, { product, quantity: 1 }]);
      }
    };
        
      
  return (
    <button onClick={addToCart} className='add-to-cart-btn' >
        <ShoppingCart size={25} /> Add to Cart
    </button>
  )
}
