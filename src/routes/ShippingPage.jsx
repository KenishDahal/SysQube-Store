// src/routes/ShippingPage.js
import React, { useState } from "react";
import Shipping from "../components/Shipping";
import { useNavigate, useLocation } from "react-router-dom";

const ShippingPage = () => {
  const [shippingInfo, setShippingInfo] = useState({});
  let navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = location.state || {};

  // src/routes/ShippingPage.js
  const handleProceed = (info) => {
    setShippingInfo(info);

    navigate("/payment", { state: { cartItems, shippingInfo: info } });
  };

  const handleBack = () => {
    navigate("/");
  };

  return <Shipping onBack={handleBack} onProceed={handleProceed} />;
};

export default ShippingPage;
