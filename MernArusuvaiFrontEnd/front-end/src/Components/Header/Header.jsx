import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const slides = [
    {
      title: 'Gourmet Delights',
      text: 'Experience fine dining at home with our premium restaurant partners',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
      buttonText: 'Explore Menu'
    },
    {
      title: 'Fast & Fresh',
      text: 'Hot meals delivered in 30 minutes or less, guaranteed fresh',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
      buttonText: 'Order Now'
    },
    {
      title: 'Special Offers',
      text: 'Up to 50% off on your favorite restaurants this weekend',
      image: 'https://images.unsplash.com/photo-1543353071-087092ec393a',
      buttonText: 'View Deals'
    },
    {
      title: 'Healthy Choices',
      text: 'Curated selection of nutritious meals for health-conscious foodies',
      image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      buttonText: 'Eat Healthy'
    }
  ];

  return (
    <div className="carousel-wrapper">
      <Carousel fade interval={5000} controls={true} indicators={true} className="container">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="carousel-image"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="carousel-overlay">
                <Carousel.Caption>
                  <h2>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <button className="order-btn">
                    {slide.buttonText} <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </Carousel.Caption>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Header;