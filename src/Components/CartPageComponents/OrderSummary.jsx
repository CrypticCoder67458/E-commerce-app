import React from 'react'
import '../../Styles/styles.css'
import { CartContext } from '../../Context/CartContext'
export const OrderSummary = () => {
    const {cartProducts}=React.useContext(CartContext)
    const[totalPrice,setTotalPrice]=React.useState(0)
    React.useEffect(()=>{getTotalPrice()},[cartProducts])
    function getTotalPrice(){
        let price=0
        cartProducts.map(cartProduct=>price+=cartProduct.product.price*cartProduct.quantity)
        setTotalPrice(price)
    }
  return (
    <div className='card order-summary'>
        <h2>Order Summary</h2>
        <hr/>
        <div className='order-summary--prices' >
            <p>Price:</p>
            <p className='order-summary--price'>${totalPrice}</p>
        </div>
        <div className='order-summary--prices' >
            <p>Delivery:</p>
            <p className='order-summary--price'>free</p>
        </div>
        <div className='order-summary--prices'>
            <p>Discount:</p>
            <p className='order-summary--price'>-</p>
        </div>
        <hr/>
        <div className='order-summary--prices'>
            <p>Subtotal:</p>
            <p className='order-summary--price'>${totalPrice}</p>
        </div>
    </div>
  )
}
