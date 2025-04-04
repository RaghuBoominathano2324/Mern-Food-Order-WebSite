import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Pizza from "./Food_Assets/assets/about/pizza.png";
import Salad from "./Food_Assets/assets/about/salad.png";
import Delivery from "./Food_Assets/assets/about/delivery-bike.png";

// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Authentic Biryani",
    paragraph: `Experience the rich aroma and flavors of traditional North Indian Biryani, made with long-grain basmati rice, tender meat, and a blend of exotic spices.`,
  },
  {
    image: Salad,
    title: "Freshly Baked Naan",
    paragraph: `Savor the softness and taste of freshly baked Naan straight from the tandoor, a perfect companion to our flavorful curries.`,
  },
  {
    image: Delivery,
    title: "Quick Delivery",
    paragraph: `Enjoy the convenience of our fastest delivery service, bringing the authentic taste of North India right to your doorstep.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Discover the Essence of North Indian Flavors</h2>
              <p>
                Relish the true taste of North India with our curated menu featuring
the most beloved dishes. Perfectly crafted recipes that bring joy to your
table.
              </p>
              <Link to="/menu" className="btn order_now btn_red">
                Explore Full Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      className="img-fluid"
                      alt={cardData.title}
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
