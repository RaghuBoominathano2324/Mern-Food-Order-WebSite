import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta py-5">
          <div className="row">
            <div className="col-sm-6 col-xl-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>South Delhi, New Delhi-110019</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>99999-55555</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xl-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-content py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <Link to="/">
                    <img src="/tamil-arusuvai-logo.png" alt="Tamil Arusuvai" className="img-fluid" />
                  </Link>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href="#"><i className="fab fa-instagram instagram-bg"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Quick Links</h3>
                </div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/menu">Menu</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="subscribe-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit"><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright © 2024, All Right Reserved <Link to="/">Tamil Arusuvai</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;