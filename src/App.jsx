import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import  Cart  from "./pages/cart/Cart";
import  Home  from "./pages/Home/Home";
import  Order  from "./pages/Order/Order";
import  Nopage  from "./pages/nopage/Nopage";
import  Dashboard  from "./pages/admin/dashboard/Dashboard";
import  AllProducts  from "./pages/./AllProducts/AllProducts";
import MyState from "./Context/MyState";


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
          <Route path="/*" element={<Nopage />} />
    
        </Routes>
   
      </Router>
      </MyState>
    </>
  );
}

export default App;
