// src/micro-frontends/OrderMicroFrontend/OrderMicroFrontend.js
import React, { useState } from "react";

function OrderMicroFrontend({ onOrderPlaced }) {
  const [orderDetails, setOrderDetails] = useState({
    orderId: "",
    productName: "",
    quantity: 1,
    price: 0,
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    // Simulate order placement and call the callback
    const orderId = "ORD" + Math.floor(Math.random() * 10000);
    const order = { ...orderDetails, orderId };
    console.log("Order placed:", order);
    onOrderPlaced(order);
  };

  return (
    <div className="OrderMicroFrontend">
      <h2>Order Micro Frontend</h2>
      <input
        type="text"
        name="productName"
        placeholder="Product Name"
        value={orderDetails.productName}
        onChange={handleChange}
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={orderDetails.quantity}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price per unit"
        value={orderDetails.price}
        onChange={handleChange}
      />
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default OrderMicroFrontend;
