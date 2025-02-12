import React from "react";
import LineChartRep from "../charts/LineChartRep";

const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1500 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 3000 },
  { month: "May", users: 4000 },
  { month: "Jun", users: 5000 },
];

const UsersGrowth = () => {
  return (
    <>
      <LineChartRep data={userGrowthData} />
    </>
  );
};

export default UsersGrowth;
