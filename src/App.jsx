import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import  Cart  from "./pages/cart/Cart";
import  Home  from "./pages/Home/Home";
import  Order  from "./pages/Order/Order";
import  Nopage  from "./pages/nopage/Nopage";
import  Dashboard  from "./pages/admin/dashboard/Dashboard";
import  AllProducts  from "./pages/./AllProducts/AllProducts";
import MyState from "./Context/MyState";
import Login from "./pages/Registration/Login";
import Signup from "./pages/Registration/Signup";
import ProductInfo from "./pages/ProductsInfo/ProductInfo";
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";


function App() {
  return (
    <>
    <MyState>
      <Router>
    
        <Routes>
    
   
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/allproducts" element={<AllProducts />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
           <Route path="/updateproduct" element={<UpdateProduct/>} />
          <Route path="/*" element={<Nopage />} />
    
        </Routes>
   
      </Router>
      </MyState>
    </>
  );
}

export default App;
