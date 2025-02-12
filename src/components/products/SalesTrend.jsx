import React from "react";
import LineChartRep from "../charts/LineChartRep";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
];

const SalesTrend = () => {
  return (
    <>
      <LineChartRep data={salesData} />
    </>
  );
};

export default SalesTrend;
