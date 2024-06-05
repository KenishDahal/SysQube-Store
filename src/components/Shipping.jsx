// src/components/Shipping.js
import React, { useState } from "react";

const Shipping = ({ onBack, onProceed }) => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields here
    onProceed(shippingInfo);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="shipping">
        <div className="shipping__info h2">Shipping Information</div>
        <div className="shipping__input">
          <input
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <input
            name="address"
            placeholder="Address"
            onChange={handleChange}
            required
          />
          <input
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            name="state"
            placeholder="State/Province"
            onChange={handleChange}
            required
          />
          <input
            name="zipCode"
            placeholder="Zip Code"
            onChange={handleChange}
            required
          />
          <input
            name="country"
            placeholder="Country"
            onChange={handleChange}
            required
          />
          <input
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />
          <div className="shipping__input__buttons">
            <button type="button" onClick={onBack}>
              Back to Cart
            </button>
            <button type="submit">Proceed to Payment</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Shipping;
