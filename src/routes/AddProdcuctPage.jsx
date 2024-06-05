// src/routes/AddProductPage.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AddProductPage = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems } = location.state || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleAddProduct = () => {
    const newProduct = {
      ...product,
      price: parseFloat(product.price),
      quantity: parseInt(product.quantity),
    };
    const updatedCart = [...cartItems, newProduct];
    navigate("/", { state: { cartItems: updatedCart } });
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form className="product-form">
        <div className="form-group">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="buttons">
          <button type="button" onClick={handleAddProduct}>
            Add Product
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;
