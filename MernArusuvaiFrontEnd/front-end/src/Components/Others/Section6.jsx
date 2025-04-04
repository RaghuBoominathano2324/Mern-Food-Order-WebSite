import React from "react";
import { Container, Row, Carousel } from "react-bootstrap";

// Direct image URLs for Indian dishes
const GobiManchurian = "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/gobi-manchurian-recipe-1.jpg";
const PaneerTikka = "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/04/paneer-tikka-recipe.jpg";
const ButterChicken = "https://cafedelites.com/wp-content/uploads/2019/01/Butter-Chicken-IMAGE-64.jpg";
const BiryaniDish = "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Biryani.jpg";

function Section6() {
  return (
    <section className="blog_section">
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={GobiManchurian} className="img-fluid" alt="Gobi-Manchurian" />
                </div>
                <p>
                  "The crispy Gobi Manchurian is an absolute delight! The perfect 
                  blend of Indo-Chinese flavors, with perfectly crispy cauliflower 
                  florets coated in a spicy, tangy sauce. A must-try fusion dish 
                  that captures the essence of Indian street food."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY CHEF RAVI KUMAR</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={PaneerTikka} className="img-fluid" alt="Paneer-Tikka" />
                </div>
                <p>
                  "The Paneer Tikka here is simply outstanding! Perfectly grilled 
                  cottage cheese cubes marinated in aromatic spices, served with 
                  mint chutney. The smoky flavor and tender texture make it an 
                  irresistible vegetarian delight."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY CHEF PRIYA SHARMA</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={ButterChicken} className="img-fluid" alt="Butter-Chicken" />
                </div>
                <p>
                  "The Butter Chicken here is rich, creamy, and absolutely divine! 
                  The tender chicken pieces swimming in a luscious tomato-based 
                  gravy with the perfect balance of spices. Pair it with naan 
                  bread for an unforgettable meal."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY CHEF ANJALI DESAI</h5>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <Carousel.Caption>
                <div className="user_img">
                  <img src={BiryaniDish} className="img-fluid" alt="Biryani" />
                </div>
                <p>
                  "The aromatic Biryani is a masterpiece! Each grain of rice is 
                  perfectly cooked and infused with exotic spices. The layered 
                  preparation with tender meat and fragrant herbs creates a 
                  symphony of flavors that's truly memorable."
                </p>
                <div className="item_rating mb-2">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h5>BY CHEF KABIR KHAN</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Section6;
