import React from 'react'
import "../css/navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function NavbarComponent() 
{
    return (
        <div className = "navbar">

            {/* Menu icon */}
            <button>
            <MenuIcon className = "navbar-menu-icon"/>
            </button>
            {/* Amazon icon */}
            <img src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            className = "navbar-amazon-icon"/>

            {/* Search Bar Input */}     
            <input type = "text" className = "navbar-input"></input>

            <button>
            {/* Search Bar Icon */}
            <SearchIcon className = "navbar-search-icon"/>
            </button>

            {/* option-1 */}
            <div className = "navbar-option">
                <p className = "navbar-option-line-one">Hello guest</p>
                <button>
                <p className = "navbar-option-line-two">Signin</p>
                </button>
            </div>
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
            {/* option-4 */}
            <div className = "navbar-option">
                <p>1</p>
                <button>
                    <ShoppingCartIcon className = "options-shopping-cart-item"/>
                </button>
            </div>   
        </div>
    )
}

export default NavbarComponent
