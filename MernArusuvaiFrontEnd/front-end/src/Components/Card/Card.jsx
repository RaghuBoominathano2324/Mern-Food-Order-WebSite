import React from "react";
import { Card as BootstrapCard, Button, Badge } from "react-bootstrap";
import "./Card.css";

const FoodCard = ({
  food_name,
  food_image,
  food_price,
  food_menu,
  food_type,
  food_category,
  food_desc,
  food_review,
  hotels,
  availability,
}) => {
  return (
    <BootstrapCard className="custom-card h-100 border-0 shadow-lg">
      <div className="position-relative">
        <BootstrapCard.Img
          variant="top"
          src={food_image}
          className="card-img-top-custom"
        />
        {availability === "yes" ? (
          <Badge
            pill
            bg="success"
            className="availability-badge position-absolute top-0 end-0 m-2"
          >
            Available
          </Badge>
        ) : (
          <Badge
            pill
            bg="danger"
            className="availability-badge position-absolute top-0 end-0 m-2"
          >
            Unavailable
          </Badge>
        )}
      </div>

      <BootstrapCard.Body className="text-center">
        <BootstrapCard.Title className="name-title">
          {food_name}
        </BootstrapCard.Title>

        <BootstrapCard.Subtitle className="category-subtitle mb-2">
          {food_category} - {food_menu}
        </BootstrapCard.Subtitle>

        <div className="food-type mb-2">
          <Badge pill bg={food_type === "Veg" ? "success" : "danger"}>
            {food_type}
          </Badge>
        </div>

        <BootstrapCard.Text className="food-desc">
          {food_desc}
        </BootstrapCard.Text>

        <div className="food-price-review mb-3">
          <span className="food-price">${food_price}</span>
          <span className="food-review">★ {food_review}/5</span>
        </div>

        <Button variant="primary" className="order-button">
          Order Now
        </Button>

        <ul className="hotel-list mt-3">
          {hotels.map((hotel, index) => (
            <li key={index} className="hotel-item">
              {hotel}
            </li>
          ))}
        </ul>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;
