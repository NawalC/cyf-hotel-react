import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Order = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {orderType}: {orders} <RestaurantButton totalOrders={orderOne} />
    </li>
  );
};
export default Order;
