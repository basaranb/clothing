import React from "react";
import "./checkout-item.style.scss";
import { addItem, removeItem } from "../../redux/cart/cart.actions.js";
import { connect } from "react-redux";

const CheckoutItem = ({ cartItem, dispatch }) => (
  <div className="container">
    <div className="block image">
      <img className="itemImage" src={cartItem.imageUrl} alt={cartItem.name} />
    </div>
    <div className="block name">
      <span className="name">{cartItem.name}</span>
    </div>
    <div className="block quantity">
      <button className="increase" onClick={() => dispatch(addItem(cartItem))}>
        &#x2303;
      </button>
      <span className="quantityNumber">{cartItem.quantity}</span>
      <button
        className="decrease"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        &#x2304;
      </button>
    </div>
    <div className="block price">
      <span className="price">
        {cartItem.quantity} x {cartItem.price} = $
        {cartItem.quantity * cartItem.price}
      </span>
    </div>
    <div className="block close">
      <button className="close">&#9932;</button>
    </div>
  </div>
);

export default connect(null)(CheckoutItem);
