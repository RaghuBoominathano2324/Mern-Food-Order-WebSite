import React, { useEffect } from 'react';
import counter1 from './images/counter/c1.webp';
import counter2 from './images/counter/c2.webp';
import counter3 from './images/counter/c3.webp';
import counter4 from './images/counter/c4.webp';
import aboutImg from './images/img/tieup.jpg';
import phones from './images/app/phones.png';
import appStore1 from './images/app/1.svg';
import appStore2 from './images/app/2.svg';
import './Home.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Ic1 from './images/img/Ic1.png'
import Ic2 from './images/img/Ic2.jpg'
import Ic3 from './images/img/Ic3.jpg'
import Ic4 from './images/img/Ic4.jpg'
import t1 from './images/review/t1.jpg'
import t2 from './images/review/t2.jpg'
import t3 from './images/review/t3.webp'
import Header from '../../Components/Header/Header';



const Home = () => {

  const newClassNames = {
    'top-banner': 'hero-section',
    'main-btn': 'primary-button',
    'counter-section': 'stats-dashboard',
    'about-section': 'company-info',
    'story-section': 'journey-section',
    'explore-food': 'menu-showcase',
    'food-carousel': 'dish-slider',
    'food-card': 'menu-item-card',
    'testimonial-section': 'customer-reviews'
  };

  const counterIds = {
    visitors: "visitor-count",
    customers: "customer-count",
    countries: "region-count",
    partners: "partner-count"
  };
  useEffect(() => {
    const counter = (id, start, end, duration) => {
      let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if (current === end) clearInterval(timer);
          }, step);
    };

    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5786, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7110, 3000);
  }, []);

  return (
    <>
      {/* Home Section */}
      <section id="home">
        <Header/>
        <div className="top-banner">
          <div className="container">
            <div className="row">
            <div className="col-md-6">
  <h1>Indulge in Fresh & Mouthwatering Cusiens Across The World</h1>
  <p>Craving something delicious? Dive into a world of fresh foods across the world at one place, crafted with love and the finest ingredients. Whether it's a special meal or a casual treat, we’ve got something to satisfy every taste!</p>
  <p className="main-btn mt-4">Order Your Feast Now <i className="fas fa-shopping-basket ps-3"></i></p>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section id="counter">
  <div className="counter-section">
    <div className="container">
      <div className="row text-center">
        {[ 
          { img: counter1, label: "DISHES ORDERED" },
          { img: counter2, label: "HAPPY CUSTOMERS" },
          { img: counter3, label: "PARTNERED CLIENTS" },
          { img: counter4, label: "RESTAURANTS PARTNERED" }
        ].map((item, index) => (
          <div className="col-md-3 col-sm-6 mb-md-0 mb-4" key={index}>
            <img src={item.img} className="img-fluid mb-3" alt={item.label} />
            <h2><span id={`count${index + 1}`}></span>+</h2>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about">
  <div className="about-section wrapper">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-lg-0 mb-5">
          <img src={aboutImg} className="img-fluid" alt="About Us" />
        </div>
        <div className="col-lg-6 col-md-12 ps-lg-5">
          <h2>Crafted with Care, Partnered with Excellence</h2>
          <p>Our dishes are not just made; they're crafted with the finest, freshest ingredients. We've partnered with a renowned hotel to ensure every meal meets the highest standards of quality and taste.</p>
          <ul className="list-unstyled py-3">
            <li>Fresh ingredients sourced daily from trusted vendors.</li>
            <li>Expertly crafted meals that bring out the flavors of the sea.</li>
            <li>Collaborations with premium hotels to ensure top-tier culinary experiences.</li>
          </ul>
          <p className="main-btn mt-4">Learn More</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Story Section */}
      <section id="story">
  <div className="story-section">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-content">
            <h2>Good Food, Affordable Prices – Satisfaction Guaranteed</h2>
            <p>We believe that great food should be accessible to everyone. Our food delivery service offers delicious meals at minimal delivery charges, ensuring you get the best value for your money. Whether you're craving seafood or a quick bite, we bring the taste of quality right to your door.</p>
            <p className="main-btn mt-3">Learn More</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Explore Food Section */}
<section id="explore-food" className='' style={{ marginBottom: "80px" }}>
  <div className="explore-food wrapper">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center mb-5">
          <h2>Explore Our Global Cuisine</h2>
          <p>
            Indulge in a variety of mouthwatering dishes from around the world, 
            all delivered to your doorstep. From Italian pasta to Mexican tacos, 
            we offer the best of international flavors!
          </p>
        </div>
      </div>

      {/* Food Carousel Section */}
      <div className="food-carousel-wrapper">
        <div className="food-carousel">
          {[
            {
              src: Ic1,
              alt: "Rainbow Vegetable Burger",
              name: "Rainbow Vegetable Burger",
              price: "₹10.50",
              oldPrice: "₹11.70",
            },
            {
              src: Ic2,
              alt: "Italian Pasta",
              name: "Italian Pasta",
              price: "₹12.00",
              oldPrice: "₹13.50",
            },
            {
              src: Ic3,
              alt: "Mexican Tacos",
              name: "Mexican Tacos",
              price: "₹8.50",
              oldPrice: "₹9.50",
            },
            {
              src: Ic4,
              alt: "Raspberry Stuffed French Food",
              name: "Raspberry Stuffed French Food",
              price: "₹11.00",
              oldPrice: "₹12.50",
            },
          ].map((item, index) => (
            <div className="food-card" key={index}>
              <div className="card">
                <img src={item.src} className="img-fluid" alt={item.alt} />
                <div className="p-4">
                  <h4>{item.name}</h4>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    {item.price} <del>{item.oldPrice}</del>
                  </span>
                  <p className="mt-4 main-btn">Order Now</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section */}
      <div className="row mt-5">
        <div className="col-sm-12 text-center">
          <blockquote className="quote">
            <p>
              "Good food is the foundation of genuine happiness." <br />
              <em>- Auguste Escoffier</em>
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</section>








      {/* Testimonial Section */}
{/* Testimonial Section */}
{/* Testimonial Section */}
<section id="testimonial">
  <div className="wrapper testimonial-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 text-center mb-5">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">See why people love our food delivery service!</p>
        </div>
        <div className="col-sm-12 col-lg-10">
          {/* Carousel Section */}
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
              {[0, 1, 2].map((index) => (
                <p
                  key={index}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
              {[
                {
                  name: "Johnathan Doe",
                  review: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
                  image: "/images/review/review-1.jpg",
                },
                {
                  name: "Maccy Doe",
                  review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.",
                  image: "/images/review/review-2.jpg",
                },
                {
                  name: "Sarah Smith",
                  review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
                  image: "/images/review/review-3.jpg",
                },
              ].map((testimonial, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <div className="carousel-caption d-flex flex-column align-items-center">
                    <img
                      src={testimonial.image}
                      alt={`Review by ${testimonial.name}`}
                      className="testimonial-img rounded-circle mb-3"
                      style={{ width: "100px", height: "100px", objectFit: "cover" }}
                    />
                    <p className="testimonial-review text-center mb-3">"{testimonial.review}"</p>
                    <h5 className="testimonial-name">{testimonial.name}</h5>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Controls */}
            <p
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </p>
            <p
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





      {/* Download App Section */}
      <section id="download-app">
        <div className="download-app wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 order-2 order-lg-1">
                <div className="text-content">
                  <h1 className="mb-3">Download our mobile app.</h1>
                  <p>Consectetur numquam poro nemo veniam eligendi rem adipisci quo modi.</p>
                  <div className="d-flex flex-wrap mt-4">
                    <a href="#"><img src={appStore1} className="me-3" alt="App Store" /></a>
                    <a href="#"><img src={appStore2} className="me-3" alt="Play Store" /></a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4 order-1 order-lg-2">
                <img src={phones} className="img-fluid" alt="phones" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
