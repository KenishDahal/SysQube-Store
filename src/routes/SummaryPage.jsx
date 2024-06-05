// src/routes/SummaryPage.js
import React from "react";
import Summary from "../components/Summary";
import { useNavigate, useLocation } from "react-router-dom";

const SummaryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, shippingInfo, paymentInfo } = location.state || {};

  const handleBack = () => {
    navigate("/payment");
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    navigate("/");
  };

  if (!cartItems || !shippingInfo || !paymentInfo) {
    navigate("/");
    return null;
  }

  return (
    <Summary
      items={cartItems}
      shippingInfo={shippingInfo}
      paymentInfo={paymentInfo}
      onPlaceOrder={handlePlaceOrder}
      onBack={handleBack}
    />
  );
};

export default SummaryPage;
