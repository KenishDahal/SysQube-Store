// src/components/Cart.js
import React from "react";

const Cart = ({ items, onRemove, onProceed, onAdd }) => {
  const calculateSubtotal = () => {
    return items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <>
      <div className="cart">
        <div className="cart__overview">
        <div className="cart__overview__logo">“SysQube Store”</div>
          <div className="h1">Cart Overview</div>
          <div className="eyebrow">Get yours</div>
        </div>
        <ul className="cart__ul">
          {items.map((item, index) => (
            <li key={index}>
              <div className="cart__ul__details">
                <figure>
                  <img src={item.image} alt={item.name} />
                </figure>
                <div className="cart__ul__details__2">
                  <div className="body">{item.name}</div>
                  <div className="body">Price:${item.price}</div>
                  <div className="body">Quantity: {item.quantity}</div>
                </div>
                <button onClick={() => onRemove(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart__subtotal">
          <div className="h5">Subtotal: ${calculateSubtotal()}</div>
          <button className="cart__subtotal__actions" onClick={onProceed}>
            Proceed to Checkout
          </button>
          <button className="cart__subtotal__actions" onClick={onAdd}>
            Add Product
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
