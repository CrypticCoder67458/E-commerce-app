export const formatPrice = (price) => {
    return Math.trunc(price);
};

export function valuetext(value) {
    return `${formatPrice(value)}`;
}

export function findHighestPrice(products) {
    let highestPrice = 0;
    if(products.length>0){
        products.forEach((product) => {
            if (product.price > highestPrice) {
                highestPrice = product.price;
            }
        });
    }
    
    
    return highestPrice;
}
export function findLowestPrice(products) {
    let lowestPrice = Infinity;
    if(products.length>0){
        products.forEach((product) => {
            if (product.price < lowestPrice) {
                lowestPrice = product.price;
            }
        });
    }
    return lowestPrice;
}