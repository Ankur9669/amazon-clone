import './app.css';
import Navbar from "./components/NavbarComponent";
import HomeImage from "./components/HomeImageComponent";
import Products from "./components/Product";
import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CheckOut from "./components/CheckoutComponent";
import { useStateValue } from './StateProvider';
function App() 
{
  let products = [
    {
      productId: 1,
      productTitle: "The Lean Startup: How Constant Innovation creates" 
      + "Constant succesfull business asdjasdjh, asdnasmd asd asdāśd" +  
     "as da sd a sda sdasd asdasdasd asdasd",
      productPrice: "$11.47",
      productrating: 3,
      productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
    {
      productId: 2,
      productTitle: "The Lean Startup: How Constant Innovation creates" 
      + "Constant succesfull business asdjasdjh, asdnasmd asd asdāśd" +  
     "as da sd a sda sdasd asdasdasd asdasd",
      productPrice: "$11.47",
      productrating: 3,
      productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
    {
      productId: 3,
      productTitle: "The Lean Startup: How Constant Innovation creates" 
      + "Constant succesfull business asdjasdjh, asdnasmd asd asdāśd" +  
     "as da sd a sda sdasd asdasdasd asdasd",
      productPrice: "$11.47",
      productrating: 3,
      productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
    {
      productId: 4,
      productTitle: "The Lean Startup: How Constant Innovation creates" 
      + "Constant succesfull business asdjasdjh, asdnasmd asd asdāśd" +  
     "as da sd a sda sdasd asdasdasd asdasd",
      productPrice: "$11.47",
      productrating: 3,
      productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    },
  
  ];

  return (
    <div className="app">
       <Router>
         {/* NavBar Component */}
       <Navbar/>
         <Switch>
          <Route path="/checkout">
            <CheckOut/>
          </Route>
          
         <Route exact path = "/">
           {/* HomePage */}
          
            {/* HomeImage */}
            <HomeImage/>

            {/* Products */}
            <div className = "products">
            {
              products.map(product => 
              {
                return <Products product = {product} key = {product.productId}/>
              })
            }
            </div>
         </Route>
         </Switch>
        </Router>
    </div>
  );
}

export default App;
