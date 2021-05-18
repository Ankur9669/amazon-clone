import React from 'react'
import "../css/navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';

function NavbarComponent(props) 
{
    // let userName = props.userName;
    // let noOfItemsInCart = props.noOfItemsInCart;
    const [state, dispatch] = useStateValue();
    let signInBtnText;
    if(state.user === "Hello Guest")
    {
        signInBtnText = "SignIn";
    }
    else{
        signInBtnText = "SignOut";
    }
    return (
        <div className = "navbar">

            {/* Menu icon */}
            <MenuIcon className = "navbar-menu-icon"/>

            <Link to = "/">
            {/* Amazon icon */}
            <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className = "navbar-amazon-icon"/>
            </Link>

            {/* Search Bar Input */}     
            <input type = "text" className = "navbar-input"></input>

            <button>
            {/* Search Bar Icon */}
            <SearchIcon className = "navbar-search-icon"/>
            </button>

            {/* option-1 */}
            <Link to = "/signin" className = "link">
            <div className = "navbar-option">
                <p className = "navbar-option-line-one">{state.user}</p>
                <p className = "navbar-option-line-two">{signInBtnText}</p>
            </div>
            </Link>

            {/* option-2 */}
            <div className = "navbar-option">
                <button>
                <p className = "navbar-option-line-one">Returns</p>
                <p className = "navbar-option-line-two">&Orders</p>
                </button>
            </div>

            {/* option-3 */}
            <div className = "navbar-option">
                <button>
                <p className = "navbar-option-line-one">Your</p>
                <p className = "navbar-option-line-two">Prime</p>
                </button>
            </div>

            <Link to = "/checkout" className = "link">
            {/* option-4 */}
            <div className = "navbar-option">
                <p className = "options-shopping-cart-quantity">{state.basket?.length}</p>
                <ShoppingCartIcon className = "options-shopping-cart-icon"/>
            </div>   
            </Link>
        </div>
    )
}

export default NavbarComponent
