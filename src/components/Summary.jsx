// src/components/Summary.js
import React from "react";
// import './Summary.css';

const Summary = ({
  items,
  shippingInfo,
  paymentInfo,
  onPlaceOrder,
  onBack,
}) => {
  const calculateSubtotal = () => {
    return items
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const shippingCost = 10.0; // Example shipping cost
    const taxes = subtotal * 0.1; // Example tax calculation
    return (subtotal + shippingCost + taxes).toFixed(2);
  };

  return (
    <div className="summary">
      <div className="summary__info h1">Order Summary</div>
      <ul className="summary__ul">
        {items.map((item, index) => (
          <li key={index}>
            <div className="summary__ul__details">
              <div>{item.name}</div>
              <div>Quantity: {item.quantity}</div>
              <div>Price: ${item.price}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="summary__totals">
        <div className="h6">
          Subtotal: <span className="body">${calculateSubtotal()}</span>
        </div>
        <div className="h6">Shipping: $10.00</div>
        <div className="h6">
          Taxes: ${(calculateSubtotal() * 0.1).toFixed(2)}
        </div>
        <div className="h5 total">Total: ${calculateTotal()}</div>
      </div>
      <div className="summary__shiping">
        <div className="summary__shiping__heading h4">Shipping Information</div>
        <div className="body">{shippingInfo.fullName}</div>
        <div className="body">{shippingInfo.address}</div>
        <div className="body">
          {shippingInfo.city}, {shippingInfo.state} {shippingInfo.zipCode}
        </div>
        <div className="body">{shippingInfo.country}</div>
        <div className="body">{shippingInfo.phoneNumber}</div>
        <br /> <br />
        <div className="summary__shiping__heading h4">Payment Information</div>
        <div className="body">Cardholder: {paymentInfo.cardholderName}</div>
        <div className="body">
          Card Number: **** **** **** {paymentInfo.cardNumber.slice(-4)}
        </div>
      </div>

      <div className="body buttons">
        <button onClick={onBack}>Back to Payment</button>
        <button onClick={onPlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default Summary;
