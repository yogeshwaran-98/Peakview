import React from "react";
import Header from "../components/standard/Header";
import { Zap, Users, ShoppingBag, BarChart2 } from "lucide-react";
import Statistics from "../components/standard/Statistics";
import { motion } from "framer-motion";
import Sales from "../components/Overview/Sales";
import SalesCategory from "../components/Overview/SalesCategory";
import SalesSource from "../components/Overview/SalesSource";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Statistics
            name="Total Sales"
            icon={Zap}
            value="$12,345"
            color="#6366F1"
          />
          <Statistics
            name="New Users"
            icon={Users}
            value="1,234"
            color="#8B5CF6"
          />
          <Statistics
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <Statistics
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10B981"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Sales />
          <SalesCategory />
          <SalesSource />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
