import React, { useState } from "react";
import OrderMicroFrontend from "./micro-frontends/OrderMicroFrontend/OrderMicroFrontend";
import PaymentMicroFrontend from "./micro-frontends/PaymentMicroFrontend/PaymentMicroFrontend";

function App() {
  const [orderId, setOrderId] = useState(null);

  const handleOrderPlaced = (order) => {
    console.log("Order received in App:", order);
    setOrderId(order.orderId);
  };

  return (
    <div className="App">
      <h1>Microservices Micro Frontend</h1>
      <OrderMicroFrontend onOrderPlaced={handleOrderPlaced} />
      {orderId && <PaymentMicroFrontend orderId={orderId} />}
    </div>
  );
}

export default App;
