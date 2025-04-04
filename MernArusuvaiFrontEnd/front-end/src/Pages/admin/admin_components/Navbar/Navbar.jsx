
import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { assets } from "../../admin_assets/assets";
import LogoImage from "./AllImages/header_img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faSitemap,
  faBlog,
  faQuestion,
  faPersonHalfDress,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Project Logo */}

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg custom-navbar shadow">
        <div className="container-fluid">
          {/* Logo and Title */}
          <Link to="/" className="navbar-brand d-flex flex-column align-items-center">
            <div className="logo-container">
              <img src={LogoImage} alt="Logo" className="logo-img" />
              <div className="logo-caption-container">
                <span id="logo-caption" className="logo-caption text-light">
                  அறுசுவை
                </span>
              </div>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

    
        </div>
<div>
         <img className="profile" src={assets.profile_image2} alt="Profile" />
         </div>
      </nav>

      {/* Profile Image */}
      {/* <img className="profile" src={assets.profile_image} alt="Profile" /> */}
    </div>
  );
};

export default Navbar;

