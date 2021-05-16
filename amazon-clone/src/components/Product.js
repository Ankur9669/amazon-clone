import React from 'react'
import "../css/product.css";
function Product(props)
{
    let product = props.product;
    let productTitle = product.productTitle;
    let productPrice = product.productPrice;
    let productRating = product.productRating;
    let productImage = product.productImage;

    return (
        <div className="product">
        <div className="product-info">
          <p className="product-title">
            {productTitle}
          </p>
          <p className="product-price">{productPrice}</p>
          <p className="product-rating">⭐⭐⭐⭐
          </p>
        </div>
        <div className="product-image-container">
          <img
            className="product-image"
            src={productImage}
            alt="noimage"
          />
        </div>
        <div className = "product-btn-container">
            <button className="product-add-to-basket-btn"
            onClick = {() => props.setNoOfItemsInCart()}>Add to Basket</button>
        </div>
        
      </div>
    )
}

export default Product
