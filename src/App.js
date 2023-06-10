/*import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Authguard from "./components/Authguard";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Last from "./components/Last";
import Contact from "./components/Contact";
import CactusPage from "./components/CactusplantPage";
import Flowerpage from "./components/Flowerpage";
import Indoreplantsprod from "./components/IndoreprodPage";***/
import { Route, Routes} from "react-router-dom";
import Products from "./components/Products.jsx";


function App() {
  return (
    <>
    <Routes>
      {/*
      <Route path="/" exact element={<Navbar></Navbar>}></Route>
      <Route path="/signin" exact element={<Signup></Signup>}></Route>
      <Route path="/login" exact element={<Login></Login>}></Route>
      <Route path="/contact" exact element={<Contact></Contact>}></Route>
      <Route element={<Authguard/>}>
      <Route path="/cart" exact element={<Cart></Cart>}></Route>
      <Route path="/thankyou" exact element={<Last></Last>}></Route>
      <Route path="/products" exact element={<Products></Products>}></Route>
      <Route path="/products/Flower" exact element={<Flowerpage></Flowerpage>}></Route>
      <Route path="/products/Indoreplants" exact element={<Indoreplantsprod></Indoreplantsprod>}></Route>
      <Route path="/products/Cactus" exact element={<CactusPage></CactusPage>}></Route>
      </Route>*/}
      <Route path="/" exact element={<Products></Products>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
