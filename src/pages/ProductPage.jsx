import {React,useState,useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import '../Styles/styles.css'
import { Link } from "react-router-dom";
import { Navbar } from '../Components/shared Components/Navbar';
import { AddToCartButton } from "../Components/ProductsPageComponents/AddToCartButton";
import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoReturnUpBack } from "react-icons/io5";
import { ProductSlider } from "../Components/shared Components/ProductSlider";
import{LoadingPage} from "../pages/LoadingPage";
import { ProductsContext } from "../Context/ProductsContext";
import { filterByCategory } from "../utils/FilterProduct";
export function ProductPage() {  
    const { currentCategory, setCurrentCategory, products, loading } = useContext(ProductsContext);  
    const { productId } = useParams();  
    const product = products.find(product => product.id === parseInt(productId, 10));  
    const [deliveryDate, setDeliveryDate] = useState('');  

    useEffect(() => {  
        if (product && product.category !== currentCategory) {  
            setCurrentCategory(product.category);  
        }  
    }, [product, currentCategory, setCurrentCategory]);  

    useEffect(() => {  
        let currentDate = new Date();  
        currentDate.setDate(currentDate.getDate() + 3);  

        const day = ("0" + currentDate.getDate()).slice(-2);  
        const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);  
        const year = currentDate.getFullYear();  

        setDeliveryDate(`${day}/${month}/${year}`);  
    }, []);  

    // Return loading or product details  
    return (  
        <>  
            {loading ? (  
                <LoadingPage />  
            ) : product ? ( // Check if product exists  
                <div className="product-page page">  
                    <Navbar />  
                    <div className="product-details">  
                        <div className="product-header">  
                            <Link to="/">  
                                <b><IoHomeOutline size={22} /></b>  
                            </Link>  
                            <MdKeyboardArrowRight />  
                            <Link to={`/products/${product.category}`}>  
                                <b>{product.category}</b>  
                            </Link>  
                        </div>  
                        <div className="product-main-details">  
                            <div className="product-page-intro">  
                                <h2>{product.title || "Product"}</h2>  
                                <img src={product.image} alt={product.title || "Product"} />  
                            </div>  
                            <div className="product-delivery-details">  
                                <div>  
                                    <h1>${product.price.toFixed(2)}</h1> // Ensuring price is formatted correctly  
                                    <ul>  
                                        <li><b>Brand:</b> {product.brand || "N/A"}</li>  
                                        <li><b>Model:</b> {product.model || "N/A"}</li>  
                                        <li><b>Color:</b> {product.color || "N/A"}</li>  
                                    </ul>  
                                </div>  
                                <p><b>Delivery Date:</b> {deliveryDate}</p>  
                                <AddToCartButton  
                                    className="add-to-cart-btn"  
                                    product={product}  
                                />  
                                <Link to={`/products/${product.category}`} className="add-to-cart-btn">  
                                    <button className="add-to-cart-btn">  
                                        <IoReturnUpBack size={25}/> Go back Shopping  
                                    </button>  
                                </Link>  
                            </div>  
                        </div>  
                        <h2>About this Product:</h2>  
                        <p>{product.description || "N/A"}</p>  
                    </div>  
                    <ProductSlider products={filterByCategory(products, product.category)} text='Products that may also interest you' />  
                </div>  
            ) : (  
                <p>Product not found.</p> // User-friendly message if the product doesn't exist  
            )}  
        </>  
    );  
}  