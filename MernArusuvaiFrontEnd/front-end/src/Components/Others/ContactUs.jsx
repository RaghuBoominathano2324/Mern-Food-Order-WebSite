import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import { motion } from 'framer-motion';

const ContactUs = () => {
    return (
        <div className="contact-page">
            <Header />

            {/* Hero Section */}
            <motion.div
                className="hero-section"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Contact Us</h1>
                <p>Your satisfaction is our priority. Reach out to us anytime!</p>
            </motion.div>

            {/* Upcoming Events Section */}
            <div className="events-section">
                <h2>Upcoming Events</h2>
                <div className="event-cards">
                    <motion.div 
                        className="event-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="/images/summer-fest.jpg" alt="Summer Food Festival" />
                        <div className="event-content">
                            <h3>Summer Food Festival</h3>
                            <p className="date">July 15-17, 2024</p>
                            <p>Join us for a weekend of culinary delights featuring local chefs and live music!</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="event-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="/images/wine-tasting.jpg" alt="Wine Tasting" />
                        <div className="event-content">
                            <h3>Wine & Dine Evening</h3>
                            <p className="date">August 5, 2024</p>
                            <p>Experience premium wine pairing with our signature dishes.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="event-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="/images/cooking-class.jpg" alt="Cooking Class" />
                        <div className="event-content">
                            <h3>Master Chef Workshop</h3>
                            <p className="date">August 20, 2024</p>
                            <p>Learn the secrets of gourmet cooking from our expert chefs.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="event-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="/images/harvest-fest.jpg" alt="Harvest Festival" />
                        <div className="event-content">
                            <h3>Harvest Festival</h3>
                            <p className="date">September 10, 2024</p>
                            <p>Celebrate the season with farm-to-table specialties and craft beverages.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Contact Cards */}
            <div className="contact-cards">
                <div className="card">
                    <i className="fas fa-phone-alt"></i>
                    <h3>Phone</h3>
                    <p>+1 800 123 4567</p>
                </div>

                <div className="card">
                    <i className="fas fa-map-marker-alt"></i>
                    <h3>Location</h3>
                    <p>123 Food Street, FL 12345</p>
                </div>

                <div className="card">
                    <i className="fas fa-envelope"></i>
                    <h3>Email</h3>
                    <p>support@restaurant.com</p>
                </div>

                <div className="card">
                    <i className="fas fa-clock"></i>
                    <h3>Hours</h3>
                    <p>Mon-Sun: 10AM - 10PM</p>
                </div>

                <div className="card">
                    <i className="fas fa-utensils"></i>
                    <h3>Reservations</h3>
                    <p>Book a Table Now</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <h2>Visit Us</h2>
                <iframe
                    title="Restaurant Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531591762!3d-37.816279442021774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779d7fd7cd6c3!2sFood%20Street!5e0!3m2!1sen!2sus!4v1614317404802!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default ContactUs;

