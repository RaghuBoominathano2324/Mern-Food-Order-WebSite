import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../Context/StoreContext";

// Use api instead of axios for any API calls

const FoodItem = ({ image, name, price, desc, id }) => {
  const { cartItems, addToCart, removeFromCart, url, currency } = useContext(StoreContext);

  return (
    <div className="food-card">
      <div className="food-card-img-container">
        <img
          className="food-card-image"
          src={`${url}/images/${image}`}
          alt={name}
        />
        {!cartItems[id] ? (
          <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
            <img src={assets.add_icon_white} alt="Add" />
            Add to Cart
          </button>
        ) : (
          <div className="food-card-counter">
            <button onClick={() => removeFromCart(id)} className="counter-btn">
              -
            </button>
            <span className="item-count">{cartItems[id]}</span>
            <button onClick={() => addToCart(id)} className="counter-btn">
              +
            </button>
          </div>
        )}
      </div>
      <div className="food-card-info">
        <h3 className="food-card-name">{name}</h3>
        <div className="food-card-rating">
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-card-desc">{desc}</p>
        <p className="food-card-price">
          {currency}{price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;