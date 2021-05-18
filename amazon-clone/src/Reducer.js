export const initialState = {
    basket: [],
    user: "Hello Guest"
}

// export const getBasketTotal = (basket) => 
// basket?.reduce((amount, item) => item.productPrice + amount, 0);

export const getBasketTotal = (basket) => {
    let total = 0;
    basket.map(item => {
        total = total + item.productPrice;
    })
    return Math.round(total * 100) / 100;
}

const reducer = (state, action) => {
   //console.log(action);
    switch (action.type) 
    {
        case "ADD_TO_BASKET":
        return{
            ...state,
            basket: [...state.basket, action.item],
        };
        
        case "REMOVE_FROM_BASKET":

            let newBasket = [...state.basket];
            //Here we find the item index
            let index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            );

            if(index >= 0)
            {
                //Delete the item at that index
                newBasket.splice(index, 1);
            }
            else{
                console.warn("Not possible");
            }
            
            //Returning the updated basket
            return{
                ...state,
                basket: newBasket,
            };

        case "SIGN_IN":
            return{
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;