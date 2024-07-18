
export const sortBy = (functionality,setShownProducts,productsByCategory) => {
    

    const sortByRelevance = () => setShownProducts(productsByCategory);
    const sortByPopularity = () =>
        setShownProducts((products) =>
            products.filter(({ popular }) => popular)
        );
        const sortByPriceAsc = () => {
            setShownProducts((products) => {
                const newProducts = [...products];
                return newProducts.sort((a, b) => b.price - a.price);
            });
        };
        
        const sortByPriceDesc = () => {
            setShownProducts((products) => {
                const newProducts = [...products];
                return newProducts.sort((a, b) => a.price - b.price);
            });
        };
    const sortByOnSale = () =>
        setShownProducts((products) =>
            products.filter(({ discount }) => discount > 0)
        );

    switch (functionality) {
        case 'relevance':
            sortByRelevance();
            break;
        case 'popularity':
            sortByPopularity();
            break;
        case 'price-desc':
            sortByPriceDesc();
            break;
        case 'price-asc':
            sortByPriceAsc();
            break;
        case 'onSale':
            sortByOnSale();
            break;
        default:
            sortByRelevance();
            break;
    }
};
