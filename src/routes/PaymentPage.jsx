// src/routes/PaymentPage.js
import React, { useState } from "react";
import Payment from "../components/Payment";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({});
  let navigate = useNavigate();
  const location = useLocation();
  const { cartItems, shippingInfo } = location.state || {};

  // src/routes/PaymentPage.js
  const handleProceed = (info) => {
    setPaymentInfo(info);

    navigate("/summary", {
      state: { cartItems, shippingInfo, paymentInfo: info },
    });
  };

  const handleBack = () => {
    navigate("/shipping");
  };

  return <Payment onBack={handleBack} onProceed={handleProceed} />;
};

export default PaymentPage;
