import './app.css';
import Navbar from "./components/NavbarComponent";
import HomeImage from "./components/HomeImageComponent";
import Products from "./components/Product";
import {useState} from "react";
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

  const [userName, setUserName] = useState("Guest");
  const [noOfItemsInCart, setNoOfItemsIncart] = useState(0);
  function increase()
  {
    setNoOfItemsIncart(noOfItemsInCart + 1);
  }
  return (
    <div className="app">

      {/* NavBar Component */}
      <Navbar userName = {userName} noOfItemsInCart = {noOfItemsInCart}/>

      {/* HomeImage */}
      <HomeImage/>

      {/* Products */}
      <div className = "products">
        {
          products.map(product => {
            return <Products product = {product} setNoOfItemsInCart = {increase}/>
          })
        }
        
      </div>
    </div>
  );
}

export default App;
