import React from 'react'
import "../css/product.css";
import { useStateValue } from '../StateProvider';
function Product(props)
{
    let product = props.product;
    let productTitle = product.productTitle;
    let productPrice = product.productPrice;
    let productRating = product.productrating;
    let productImage = product.productImage;
    let productBtnText = props.productBtnText;

    //Following are the css properties sent by prop
    let productCss = props.productCss;    
    let product_container_css = productCss.product_container_css;
    let product_title_css = productCss.product_title_css;
    let product_info_css =  productCss.product_info_css;
    let product_price_css = productCss.product_price_css;
    let product_rating_css = productCss.product_rating_css;
    let product_image_container_css = productCss.product_image_container_css;
    let product_image_css = productCss.product_image_css;
    let product_btn_container_css = productCss.product_btn_container_css;
    let product_add_to_basket_btn_css = productCss.product_add_to_basket_btn_css;

    const [state, dispatch] = useStateValue();
    function onClick(buttonText)
    {
      buttonText = buttonText.toLowerCase();
      if(buttonText === "add to basket")
      {
        addToBasket();
      }
      else{
        removeFromBasket();
      }
    }
    function addToBasket()
    {
      dispatch({
        type: "ADD_TO_BASKET",
        item: product,
      });
    }

    function removeFromBasket()
    {
      dispatch({
        type: "REMOVE_FROM_BASKET",
        item: product,
      });
    }
    
    return (
        <div className = {product_container_css}>
        <div className = {product_info_css}>
          <p className = {product_title_css}>
            {productTitle}
          </p>
          <p className = {product_price_css}>${productPrice}</p>
          {
            Array(productRating)
            .fill()
            .map((i) => (
               <p className = {product_rating_css}>⭐</p>
            ))
          }
          
        </div>
        <div className = {product_image_container_css}>
          <img
            className = {product_image_css}
            src={productImage}
            alt="noimage"
          />
        </div>
        <div className = {product_btn_container_css}>
            <button className = {product_add_to_basket_btn_css}
            onClick = {() => onClick(productBtnText)}>{productBtnText}</button>
        </div>
        
      </div>
    )
}


export default Product
