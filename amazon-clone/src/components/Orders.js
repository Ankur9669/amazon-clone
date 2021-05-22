import React from 'react'
import "../css/order.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import { useEffect } from "react"; 
import Product from "./Product";
function Orders() 
{
    let [state, dispatch] = useStateValue();
    useEffect(() => 
    {
        //Here we are getting the orders from db
          db.collection("users")
          .doc(state.user)
          .collection("orders")
          .get()
          .then(querySnapshot => {
              basket = querySnapshot.docs;
                console.log(basket);
              //  console.log(querySnapshot.docs.map(doc => doc.data()));
              })
        
    }, [basket])


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
    let basket = [];
    return (
        <div>
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
    )
}

export default Orders
