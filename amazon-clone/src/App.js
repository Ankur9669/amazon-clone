import './app.css';
import Navbar from "./components/NavbarComponent";
import HomeImage from "./components/HomeImageComponent";
function App() {
  return (
    <div className="app">

      {/* NavBar Component */}
      <Navbar/>

      {/* HomeImage */}
      <HomeImage/>
    </div>
  );
}

export default App;
