// src/components/Payment.js
import React, { useState } from "react";
// import './Payment.css';

const Payment = ({ onBack, onProceed }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields here
    onProceed(paymentInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="payment">
      <div className="payment__info h2">Payment Information</div>
      <div className="shipping__input">
        <input
          name="cardholderName"
          placeholder="Cardholder Name"
          onChange={handleChange}
          required
        />
        <input
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
          required
        />
        <input
          name="expirationDate"
          placeholder="Expiration Date (MM/YY)"
          onChange={handleChange}
          required
        />
        <input name="cvv" placeholder="CVV" onChange={handleChange} required />
        <div className="shipping__input__buttons">
          <button type="button" onClick={onBack}>
            Back to Shipping
          </button>
          <button type="submit">Review Order</button>
        </div>
      </div>
    </form>
  );
};

export default Payment;
