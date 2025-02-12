import React from "react";
import BarChartRep from "../charts/BarChartRep";
const SalesSources = [
  { name: "Website", value: 45600 },
  { name: "Mobile App", value: 38200 },
  { name: "Marketplace", value: 29800 },
  { name: "Social Media", value: 18700 },
];

const SalesSource = () => {
  return (
    <>
      <BarChartRep data={SalesSources} title="Sources" />
    </>
  );
};

export default SalesSource;
