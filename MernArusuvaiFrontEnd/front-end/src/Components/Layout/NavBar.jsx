
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./NavBar.css";
import MainLogo from "./MainLogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useContext, useEffect } from "react";

const NavBar = ({ setShowLogin }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cartItems, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  const totalCartItems = cartItems
    ? Object.values(cartItems).reduce((sum, count) => sum + count, 0)
    : 0;

  useEffect(() => {
    const adminToken = localStorage.getItem("adminToken");
    const userToken = localStorage.getItem("userToken");
    setIsAdmin(!!adminToken);
    setToken(userToken || adminToken || "");
  }, [setToken]);

  const handleLogout = () => {
    // Clear both tokens
    localStorage.removeItem("adminToken");
    localStorage.removeItem("userToken");
    setToken("");
    setIsAdmin(false);
    navigate("/");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  // Unified menu items for all users
  const menuItems = [
    { icon: "fas fa-home", label: "Home", to: "/" },
    { icon: "fas fa-utensils", label: "Categories", to: "/categories" },
  ];

  const rightMenu = [
    { icon: "fas fa-shopping-cart", label: "Cart", to: "/cart" },
    { icon: "fas fa-envelope", label: "Contact Us", to: "/ContactUs" },
  ];

  return (
    <nav className={`custom-navbar ${isDarkMode ? "dark-navbar" : "light-navbar"}`}>
      <div className="navbar-section left">
        {menuItems.map((item, index) => (
          <NavItem key={index} item={item} />
        ))}
      </div>

      <Link to="/" className="logo-wrapper">
        <div className="logo">
          <img src={MainLogo} alt="Logo" />
          <span className="logo-text">அறுசுவை</span>
        </div>
      </Link>

      <div className="navbar-section right">
  {rightMenu.map((item, index) => (
    <NavItem
      key={index}
      item={item}
      totalCartItems={item.label === "Cart" ? totalCartItems : null}
    />
  ))}

  {!token && (
    <button className="nav-item auth-button" onClick={() => setShowLogin(true)}>
      <i className="fas fa-user"></i> Sign In
    </button>
  )}

  {token && isAdmin && (
    <Link to="/admindashboard" className="nav-item">
      <i className="fas fa-user-circle"></i> Admin
    </Link>
  )}

  {token && !isAdmin && (
    <Link to="/myorder" className="orderstracker">
    <i class="fas fa-cart-plus"></i>order
    </Link>
  )}

  {token && (
    <button className="nav-item auth-button" onClick={handleLogout}>
      <i className="fas fa-sign-out-alt"></i> Logout
    </button>
  )}

  <button className="nav-item theme-toggle" onClick={toggleTheme}>
    {isDarkMode ? "🌙" : "☀"}
  </button>
</div>

    </nav>
  );
};

const NavItem = ({ item, totalCartItems }) => (
  <div className="nav-item">
    <Link to={item.to} className="nav-link">
      <i className={item.icon}></i> {item.label}
      {totalCartItems > 0 && item.label === "Cart" && (
        <span className="cart-count">{totalCartItems}</span>
      )}
    </Link>
  </div>
);

export default NavBar;


