
export function addQuantity(cartProducts){
    
    let newCartProducts = cartProducts.map(cartProduct => {
        if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        } else {
        return cartProduct;
        }
    });
    return newCartProducts
}

export function decreaseQuantity(cartProducts){
    let newCartProducts = cartProducts.map(cartProduct => {
        if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity - 1 };
        } else {
        return cartProduct;
        }
    });
    return newCartProducts
    }    


