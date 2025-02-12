import React from "react";
import Header from "../components/standard/Header";
import Products from "../components/products/Products";
import SalesTrend from "../components/products/SalesTrend";
import { motion } from "framer-motion";
import Statistics from "../components/standard/Statistics";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import ProductCategory from "../components/products/ProductCategory";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Statistics
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366F1"
          />
          <Statistics
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#10B981"
          />
          <Statistics
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#F59E0B"
          />
          <Statistics
            name="Total Revenue"
            icon={DollarSign}
            value={"$543,210"}
            color="#EF4444"
          />
        </motion.div>

        <Products />

        <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
          <SalesTrend />
          <ProductCategory />
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
