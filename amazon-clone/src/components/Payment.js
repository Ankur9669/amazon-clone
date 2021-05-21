import React from 'react';
import "../css/payment.css";
import { useStateValue } from '../StateProvider';
import Product from "../components/Product";
import { getBasketTotal } from '../Reducer';
import SubtotalComponent from './SubtotalComponent';
function Payment() 
{
    const [state, dispatch] = useStateValue();
    let totalItemsInBasket = state.basket?.length;
    let basket = state.basket;
    let basketTotal = getBasketTotal(state.basket);
    let productCss = {
        product_container_css : "payment-product",
        product_title_css: "payment-product-title",
        product_info_css: "payment-product-info",
        product_price_css: "payment-product-price",
        product_rating_css: "payment-product-rating",
        product_image_container_css: "payment-product-image-container",
        product_image_css: "payment-product-image",
        product_btn_container_css: "payment-product-btn-container",
        product_add_to_basket_btn_css: "payment-product-remove-from-basket-btn"
      }

    return (
        <div className = "payment-page">
            <div className = "delivery-details-container">
                <h3 className = "delivery-address-label">Delivery Address:</h3>
                <div className = "delivery-details">
                    <h5 className = "customer-name">ankur75@gmail.com</h5>
                    <h5 className = "customer-address">741, kamaniya gate, jabalpur</h5>
                    <h5 className = "customer-country">Bhopal, India</h5>
                </div>
            </div>

            <div className = "products-bought-details-container">
                <h1 className = "products-bought-details-title">Review Items</h1>
                {
                    basket.map(item => {
                        //console.log(item);
                        return <Product product = {item} 
                        key = {item.id}
                        productCss = {productCss}
                        productBtnText = {"Remove from basket"}/>
                    })
                }
            </div>
            
            <div className = "payment-method-container">
                <h3 className = "payment-method-label">Payment Method:</h3>
                <div className = "payment-details-container">
                    <h3>Card Details</h3>
                    <div className = "payment-total-price-container">
                        <h3>Order Total: ${basketTotal}</h3>
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
