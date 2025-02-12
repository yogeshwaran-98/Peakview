import React from "react";
import PieChartRep from "../charts/PieChartRep";

const orderStatusData = [
  { name: "Pending", value: 30 },
  { name: "Processing", value: 45 },
  { name: "Shipped", value: 60 },
  { name: "Delivered", value: 120 },
];

const OrderDistribution = () => {
  return (
    <div>
      <PieChartRep data={orderStatusData} title="Order Distribution" />
    </div>
  );
};

export default OrderDistribution;
