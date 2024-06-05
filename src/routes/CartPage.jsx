// src/routes/CartPage.js
import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import { useNavigate, useLocation } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems: initialCartItems } = location.state || {};

  const [cartItems, setCartItems] = useState(
    initialCartItems || [
      { name: "Product 1", price: 50, quantity: 2, image: "utility.jpg" },
      { name: "Product 2", price: 30, quantity: 1, image: "unplash-men.jpg" },
    ]
  );

  useEffect(() => {
    if (initialCartItems) {
      setCartItems(initialCartItems);
    }
  }, [initialCartItems]);

  const handleRemove = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleProceed = () => {
    navigate("/shipping", { state: { cartItems } });
  };

  const handleAddProduct = () => {
    navigate("/add-product", { state: { cartItems } });
  };

  return (
    <Cart
      items={cartItems}
      onRemove={handleRemove}
      onProceed={handleProceed}
      onAdd={handleAddProduct}
    />
  );
};

export default CartPage;
