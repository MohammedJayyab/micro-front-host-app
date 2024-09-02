// src/micro-frontends/PaymentMicroFrontend/PaymentMicroFrontend.js
import React, { useState } from "react";

function PaymentMicroFrontend({ orderId }) {
  const [paymentDetails, setPaymentDetails] = useState({
    amount: 0,
    paymentMethod: "CreditCard",
  });

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const processPayment = () => {
    const paymentRequest = {
      orderId,
      amount: paymentDetails.amount,
      paymentMethod: paymentDetails.paymentMethod,
    };
    console.log("Payment processed:", paymentRequest);
    alert(`Payment processed for order: ${orderId}`);
  };

  return (
    <div className="PaymentMicroFrontend">
      <h2>Payment Micro Frontend</h2>
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={paymentDetails.amount}
        onChange={handleChange}
      />
      <select
        name="paymentMethod"
        value={paymentDetails.paymentMethod}
        onChange={handleChange}
      >
        <option value="CreditCard">Credit Card</option>
        <option value="PayPal">PayPal</option>
        <option value="BankTransfer">Bank Transfer</option>
      </select>
      <button onClick={processPayment}>Pay for Order {orderId}</button>
    </div>
  );
}

export default PaymentMicroFrontend;
