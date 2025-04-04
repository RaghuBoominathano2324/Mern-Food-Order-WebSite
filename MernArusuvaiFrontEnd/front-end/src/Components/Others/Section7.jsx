import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>Our Promise</h4>
            <h2>Fresh and Hot in 30 Minutes!</h2>
            <p>
              Enjoy authentic North Indian cuisine delivered to your doorstep in
              just 30 minutes. Freshly prepared dishes that bring the flavors of
              tradition straight to your home.
            </p>
            <Link to="/contact" className="btn btn_red px-4 py-2 rounded-0">
              Call Us: 999-888-7777
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
