import React from "react";
import PieChartRep from "../charts/PieChartRep";

const salesByCategory = [
  { name: "Electronics", value: 400 },
  { name: "Clothing", value: 300 },
  { name: "Home & Garden", value: 200 },
  { name: "Books", value: 100 },
  { name: "Others", value: 150 },
];

const SalesByCategory = () => {
  return (
    <>
      <PieChartRep data={salesByCategory} title="Sales By Category" />
    </>
  );
};

export default SalesByCategory;
