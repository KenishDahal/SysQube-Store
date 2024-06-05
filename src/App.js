// src/App.js
import React from "react";
import "./scss/style.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import CartPage from "./routes/CartPage";
import ShippingPage from "./routes/ShippingPage";
import PaymentPage from "./routes/PaymentPage";
import SummaryPage from "./routes/SummaryPage";
import AddProductPage from "./routes/AddProdcuctPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CartPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/summary" element={<SummaryPage />} />
          <Route path="/add-product" element={<AddProductPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
