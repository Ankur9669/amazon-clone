import React from 'react'
import "../css/checkout.css";
import Subtotal from './SubtotalComponent';
function CheckoutComponent() 
{
    return (
        <div className = "checkout">
            <div className = "checkout-left">
                <img className = "checkout-title-image" src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"></img>
                <h1 className = "checkout-title">Your Shopping Basket</h1>
            </div>  
            <div className = "checkout-right">
                <Subtotal/>
            </div>      
        </div>
    )
}

export default CheckoutComponent
