import React, { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Search, Trash2, LayoutList } from "lucide-react";

const Table = ({ data, title }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);
  const headings = Object.keys(data[0]).filter(
    (title) => title.toLowerCase() !== "id"
  );

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(term)
    );

    setFilteredProducts(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">{title}</h2>
        <div className="relative">
          <input
            type="text"
            placeholder={`Search ${title}`}
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
            style={{
              border: "2px solid",
              borderImage:
                "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77) 1",
            }}
          />

          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {headings.map((heading) => (
                <th
                  key={heading}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {Object.keys(product).map((key) => {
                  if (key !== "id") {
                    return (
                      <td
                        key={key}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"
                      >
                        {key === "price"
                          ? `$${product[key].toFixed(2)}`
                          : product[key]}
                      </td>
                    );
                  }
                  return null;
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Table;
