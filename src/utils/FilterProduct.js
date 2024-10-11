function filterByPrice(products, minPrice, maxPrice) {
    if (maxPrice === Infinity && minPrice === 0) {
        return products;
    }
    if (maxPrice === Infinity) {
        return products.filter((product) => product.price >= minPrice);
    }
    if (minPrice === 0) {
        return products.filter((product) => product.price <= maxPrice);
    }
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
}


export function filterByCategory(products, category) {
    return category === '' ? products : products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
}

function filterByBrand(products, brands) {
    return brands.length === 0 ? products : products.filter((product) => brands.includes(product.brand.toLowerCase()));
}

export function filterProducts(products, category, brands, minPrice, maxPrice) {
    let filtered = filterByCategory(products, category);
    filtered = filterByBrand(filtered, brands);
    filtered = filterByPrice(filtered, minPrice, maxPrice);
    return filtered;
}
