// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
// import Navbar from './Components/Layout/NavBar';
// import './App.css';
// import Home from './Pages/Home/Home';
// import Cart from './Pages/Cart/Cart'
// import Categories from './Pages/Cat/Cat';
// import Orders from './Pages/Orders/Order'
// import Specials from './Pages/Specials/Specials'
// import Brayani from './Components/Specials/Brayanis'; 
// import Sweets from './Components/Specials/Sweets';
// import Mocktails from './Components/Drinks/Mocktails';
// import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min';

// import Traditional from './Components/Cat/Traditionals';  
// import Asian from './Components/Cat/Asian';
// import FastFood from './Components/Cat/FastFood';
// import { FaSign } from 'react-icons/fa';
// import Signin from './Pages/Signin/LoginPopup';
// import ContactUs from './Components/Others/ContactUs';
// import Drinks from './Pages/Drinks/Drinks'; 
// import SoftDrinks from './Components/Drinks/SoftDrinks'; 
// import Admin from ''
// ///admindashboard
// function App() {
//   const [showLogin,setShowLogin] = useState(false);
//   return (
//     <>
//     {/* <ToastContainer/> */}
//     {showLogin?<Signin setShowLogin={setShowLogin}/>:<></>}
//     <Router>
//      {/* <Layout> */}
//      <Navbar setShowLogin={setShowLogin}/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         {/* <Route path='/order' element={<PlaceOrder />}/> */}
//          <Route path="/categories" element={<Categories />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path='/order' element={<PlaceOrder />}/>
//           <Route path='/myorders' element={<MyOrders />}/>
//           <Route path='/verify' element={<Verify />}/>
       
//         <Route path="/drinks" element={<Drinks />} />
       
//         {/* <Route path='/verify' element={<Verify />}/> */}

//         <Route path="/specials" element={<Specials />} />
      
//       </Routes>
//       {/* </Layout> */}
//     </Router>
//     </>
//   );
// }

// export default App;
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Layout/NavBar';
import './App.css';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Categories from './Pages/Cat/Cat';
import Orders from './Pages/Orders/Order';
import Specials from './Pages/Specials/Specials';
import Brayani from './Components/Specials/Brayanis';
import Sweets from './Components/Specials/Sweets';
import ContactUs from './Components/Others/ContactUs';
import Traditional from './Components/Cat/Traditionals';
import Asian from './Components/Cat/Asian';
import FastFood from './Components/Cat/FastFood';
import Drinks from './Pages/Drinks/Drinks';
import MyOrders from './Pages/MyOrders/MyOrders';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Footer from './Components/Layout/Footer';
import Admin from './Pages/admin/AdminLayout';
import LoginPopup from './Pages/Signin/LoginPopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />
      
//       {/* Login Popup */}
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

//       {/* Single Router */}
//       <Router>
//         {/* Navbar */}
//         <Navbar setShowLogin={setShowLogin} />

//         {/* App Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/contactus" element={<ContactUs />} />
//           <Route path="/categories" element={<Categories />} />
//           <Route path="/categories/traditional" element={<Traditional />} />
//           <Route path="/categories/asian" element={<Asian />} />
//           <Route path="/categories/fast-food" element={<FastFood />} />
//           <Route path="/drinks" element={<Drinks />} />
//           <Route path="/specials" element={<Specials />} />
//           <Route path="/specials/more" element={<Brayani />} />
//           <Route path="/specials/sweets" element={<Sweets />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/myorders" element={<MyOrders />} />
//           <Route path="/admindashboard" element={<Admin />} />
//         </Routes>

//         {/* Footer */}
//         <Footer />
//       </Router>
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Navbar from './Components/Layout/NavBar';
import Footer from './Components/Layout/Footer';
import LoginPopup from './Pages/Signin/LoginPopup';

// Pages
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Orders from './Pages/Orders/Order';
import ContactUs from './Components/Others/ContactUs';
import Categories from './Pages/Cat/Cat';
import Traditional from './Components/Cat/Traditionals';
import Asian from './Components/Cat/Asian';
import FastFood from './Components/Cat/FastFood';
import Specials from './Pages/Specials/Specials';
import Brayani from './Components/Specials/Brayanis';
import Sweets from './Components/Specials/Sweets';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import Drinks from './Pages/Drinks/Drinks';
import Admin from './Pages/admin/AdminLayout';



import AdminOrder from '../Pages/admin/admin_pages/Orders/Orders'

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false); // Admin authentication state

  const handleAdminLogin = async (credentials) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/admin-login', credentials);
      
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem('adminToken', token); // Store the token securely
        toast.success('Admin logged in successfully!');
        // Redirect or set admin-specific state
      } else {
        toast.error(response.data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Unable to login. Please try again.');
    }
  };
  

  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Login Popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      {/* Application Router */}
      <Router>
        {/* Navbar */}
        <Navbar setShowLogin={setShowLogin} />

        {/* Routes */}
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/traditional" element={<Traditional />} />
          <Route path="/categories/asian" element={<Asian />} />
          <Route path="/categories/fast-food" element={<FastFood />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/specials/more" element={<Brayani />} />
          <Route path="/specials/sweets" element={<Sweets />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />

          {/* Admin Route (Conditional) */}
          {isAdminLoggedIn ? (
            <>
            <Route path="/admindashboard" element={<Admin />} />
            <Route path="/admin/add" element={<Admin />} />
            <Route path="/admin/list" element={<Admin />} />
            <Route path="/admin/orders" element={<Admin />} />
          </>
          ) : (
            <Route
              path="/admindashboard/*"
              element={
                <LoginPopup
                  setShowLogin={setShowLogin}
                  onLoginSuccess={handleAdminLogin}
                  message="Please log in as admin to access the dashboard."
                />

              }
            />
          )}
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}

export default App;


