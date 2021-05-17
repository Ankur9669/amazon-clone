import React from 'react'

function CheckoutComponent(props) 
{
    let productsList = props.shoppingCartItems;
    console.log(productsList);
    return (
        <div>
            <h1>Your Shopping Basket</h1>
            <hr></hr> 
        </div>
    )
}

export default CheckoutComponent
