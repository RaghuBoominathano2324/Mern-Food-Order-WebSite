import { useState } from "react";
import { Navigate } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Layout/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Profile from "./Pages/Signin/Profile";
// Import all your components
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Categories from "./Pages/Cat/Cat";
import Orders from "./Pages/Orders/Order";
import Specials from "./Pages/Specials/Specials";
import Brayani from "./Components/Specials/Brayanis";
import Sweets from "./Components/Specials/Sweets";
import Traditional from "./Components/Cat/Traditionals";
import Asian from "./Components/Cat/Asian";
import FastFood from "./Components/Cat/FastFood";
import LoginPopup from "./Pages/Signin/LoginPopup";
import ContactUs from "./Components/Others/ContactUs";
import Drinks from "./Pages/Drinks/Drinks";
import MyOrders from "./Pages/MyOrders/MyOrders";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/footer";
import AdminLayout from "./Pages/admin/AdminLayout";
import AddItems from "./Pages/admin/admin_pages/Add/Add";
import ListItems from "./Pages/admin/admin_pages/List/List";
import Verify from './Pages/Verify/Verify'
import MOrders from "./Pages/admin/admin_pages/Orders/Orders";

const ProtectedAdminRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  return adminToken ? children : <Navigate to="/" />;
};

const ProtectedUserRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Changed from userToken to token
  return token ? children : <Navigate to="/" />;
};
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const ProtectedUserRoute = ({ children }) => {
    const userToken = localStorage.getItem("userToken");
    return userToken ? children : <Navigate to="/" />;
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Router>
        {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orderst" element={<Orders />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/traditional" element={<Traditional />} />
          <Route path="/categories/asian" element={<Asian />} />
          <Route path="/categories/fast-food" element={<FastFood />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/specials/more" element={<Brayani />} />
          <Route path="/specials/sweets" element={<Sweets />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorderstracker" element={<MOrders />} />
          <Route path="/admindashboard" element={<AdminLayout />}/>
          <Route path="add" element={<AddItems />} />
          <Route path="list" element={<ListItems />} />
          <Route path="mordersrackers" element={<MOrders />} />
          <Route path="/myorder" element={<MyOrders />} />

          <Route path="/verify" element={<Verify />} />

    

          <Route 
  path="/profile" 
  element={
    <ProtectedUserRoute>
      <Profile />
    </ProtectedUserRoute>
  } 
/>

    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
