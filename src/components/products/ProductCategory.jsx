import React from "react";
import PieChartRep from "../charts/PieChartRep";

const categoryData = [
  { name: "Electronics", value: 500 },
  { name: "Clothing", value: 5300 },
  { name: "Home & Garden", value: 800 },
  { name: "Books", value: 2100 },
  { name: "Sports & Outdoors", value: 1900 },
];

const ProductCategory = () => {
  return (
    <>
      <PieChartRep data={categoryData} title="Units Manufactured" />
    </>
  );
};

export default ProductCategory;
