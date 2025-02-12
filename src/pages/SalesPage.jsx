import { motion } from "framer-motion";

import Header from "../components/standard/Header";

import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";

import Statistics from "../components/standard/Statistics";
import SalesTrend from "../components/products/SalesTrend";
import SalesByCategory from "../components/Sales/SalesByCategory";
import SalesOverview from "../components/Sales/SalesOverview";

const salesStats = {
  totalRevenue: "$1,234,567",
  averageOrderValue: "$78.90",
  conversionRate: "3.45%",
  salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Statistics
            name="Total Revenue"
            icon={DollarSign}
            value={salesStats.totalRevenue}
            color="#6366F1"
          />
          <Statistics
            name="Avg. Order Value"
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color="#10B981"
          />
          <Statistics
            name="Conversion Rate"
            icon={TrendingUp}
            value={salesStats.conversionRate}
            color="#F59E0B"
          />
          <Statistics
            name="Sales Growth"
            icon={CreditCard}
            value={salesStats.salesGrowth}
            color="#EF4444"
          />
        </motion.div>

        <SalesOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesTrend />
          <SalesByCategory />
        </div>
      </main>
    </div>
  );
};
export default SalesPage;
