import React from 'react'
import { Link } from 'react-router-dom';
import "../css/login.css";
function LoginComponent() {
    return (
        <div className = "login-container">
            <Link to = "/">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            className = "login-amazon-icon"></img>
            </Link>
            <form className = "login">
                <h1 className = "sign-in-heading">Sign in</h1>
                <label for = "email" className = "label-email">Email: </label>
                <input type = "email" id = "email" className = "text-email"></input>
                <label for = "password" className = "label-password">Password: </label>
                <input type = "password" id = "password" className = "text-password"></input>
                <button className = "sign-in-btn">Sign In</button>
                <small className = "privacy-notice-text">By signing-in you agree to <strong>Amazon's Fake clone</strong> Conditions of Use & Sale. Please see our Privacy Notice, 
                    our Cookies Notice and our Interest-Based Ads Notice.</small>
                <button className = "create-new-account-btn">Create New Account</button>
            </form>
        </div>
    )
}

export default LoginComponent
