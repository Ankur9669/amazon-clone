import React from 'react'
import "../css/menu.css";
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
function Menu(props) 
{
    
    let isOpen = props.isOpen;
    let setMenu = props.setMenu;
    let menu_container_classname;
    if(isOpen === true)
    {
        menu_container_classname = "menu-container-active";
    }
    else
    {
        menu_container_classname = "menu-container-inactive";
    }
    return (
        <div className = {menu_container_classname}>
            
            <CloseIcon className = "closing-icon" 
            fontSize = "large"
            onClick = {() => setMenu()}/>

            <div className = "menu-welcome-title">
                <h3>Hello User</h3>
            </div>
            
            <ul className = "menu-link-list-container">
                
                <Link className = "link">
                <li className = "list-item">
                    Home    
                </li>
                </Link>
                
                
                <li className = "list-item">
                    <Link to = "/checkout" className = "link item">
                        Your Cart
                    </Link>    
                </li>

                <li className = "list-item">
                    <Link to = "#" className = "link item">
                        SignIn
                    </Link>    
                </li>

                <li className = "list-item">
                    <Link to = "#" className = "link item">
                        Your Orders
                    </Link>    
                </li>
            </ul>
        </div>
    )
}

export default Menu
