
export const sortBy = (functionality, products,filteredProducts) => {
    const sortByRelevance = () => filteredProducts;

    const sortByPopularity = () =>
        products.filter(({ popular }) => popular);
    const sortByPriceDesc = () => [...products].sort((a, b) => a.price - b.price);
    const sortByPriceAsc = () => [...products].sort((a, b) => b.price - a.price);
    const sortByOnSale = () =>
        products.filter(({ discount }) => discount > 0);

    switch (functionality) {
        case 'relevance':
            return sortByRelevance();
        case 'popularity':
            return sortByPopularity();
        case 'price-desc':
            return sortByPriceDesc();
        case 'price-asc':
            return sortByPriceAsc();
        case 'onSale':
            return sortByOnSale();
        default:
            return sortByRelevance();
    }
};
