import './app.css';
import Navbar from "./components/NavbarComponent";
import HomeImage from "./components/HomeImageComponent";
import Products from "./components/Product";
import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CheckOut from "./components/CheckoutComponent";
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
    {
      productId: 5,
      productTitle: "The Lean Startup: How Constant Innovation creates" 
      + "Constant succesfull business asdjasdjh, asdnasmd asd asdāśd" +  
     "as da sd a sda sdasd asdasdasd asdasd",
      productPrice: "$11.47",
      productrating: 3,
      productImage: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
    }
  ];

  var shoppingCartItems = [];

  const [userName, setUserName] = useState("Guest");
  const [noOfItemsInCart, setNoOfItemsIncart] = useState(0);

  //This increases the count over shopping cart
  function increase(product)
  {
    //Adding the particular item in the start of the array.
    shoppingCartItems.unshift(product);
    console.log(shoppingCartItems);

    //Inscresing the count by one.
    setNoOfItemsIncart(noOfItemsInCart + 1);
  }
  return (
    <div className="app">
       {/* NavBar Component */}
       <Navbar userName = {userName} noOfItemsInCart = {noOfItemsInCart}/>
       <Router>
         <Switch>
          <Route path="/checkout">
            <CheckOut shoppingCartItems = {shoppingCartItems}/>
          </Route>
          
         <Route exact path = "/">
           {/* HomePage */}
          <Route exact path = "/">
            {/* HomeImage */}
            <HomeImage/>

            {/* Products */}
            <div className = "products">
            {
              products.map(product => 
              {
                return <Products product = {product} key = {product.productId} setNoOfItemsInCart = {increase}/>
              })
            }
            </div>
          </Route>
         </Route>
         </Switch>
        </Router>
    </div>
  );
}

export default App;
