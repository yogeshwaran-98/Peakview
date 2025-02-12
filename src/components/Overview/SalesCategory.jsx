import React from "react";
import PieChartRep from "../charts/PieChartRep";

const categoryData = [
  { name: "Electronics", value: 4500 },
  { name: "Clothing", value: 3200 },
  { name: "Home & Garden", value: 2800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const SalesCategory = () => {
  return (
    <>
      <PieChartRep data={categoryData} title="Sales By Category" />
    </>
  );
};

export default SalesCategory;
