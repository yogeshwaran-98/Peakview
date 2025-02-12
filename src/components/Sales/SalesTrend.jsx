import React from "react";
import BarChartRep from "../charts/BarChartRep";

const dailySalesData = [
  { name: "Mon", sales: 1000 },
  { name: "Tue", sales: 1200 },
  { name: "Wed", sales: 900 },
  { name: "Thu", sales: 1100 },
  { name: "Fri", sales: 1300 },
  { name: "Sat", sales: 1600 },
  { name: "Sun", sales: 1400 },
];

const SalesTrend = () => {
  return (
    <div>
      <BarChartRep data={dailySalesData} title="Daily Sales" />
    </div>
  );
};

export default SalesTrend;
