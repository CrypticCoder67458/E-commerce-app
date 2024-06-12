
export function increaseQuantity(cartProducts,product){
    
    let newCartProducts = cartProducts.map(cartProduct => {
        if (cartProduct.id === product.id) {
        return { ...cartProduct, 
            quantity: cartProduct.quantity + 1 
        };
        } else {
            return cartProduct;
        }
    });
    return newCartProducts
}

export function decreaseQuantity(cartProducts,product){
    let newCartProducts = cartProducts.map(cartProduct => {
        if (cartProduct.id === product.id) {
            return { ...cartProduct, 
                quantity: cartProduct.quantity - 1 };
        } 
        else {
            return cartProduct;
        }
    });
    return newCartProducts
    }    
/*export function resetQuantity(cartProducts,product){
    let newCartProducts = cartProducts.map(cartProduct => {
        if (cartProduct.id === product.id) {
            return { ...cartProduct, 
                quantity: 1 };
        } 
        else {
            return cartProduct;
        }
    });
    return newCartProducts
}*/

