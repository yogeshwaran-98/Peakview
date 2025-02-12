import { motion } from "framer-motion";
import ButtonSvg from "../style/ButtonSvg";

const Statistics = ({ name, icon: Icon, value, color }) => {
  return (
    <motion.div
      className="relative bg-gray-800 bg-opacity-50 backdrop-blur-md overflow-hidden shadow-lg rounded-xl border border-none"
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <ButtonSvg />

      <div className="px-4 py-5 sm:p-6 relative z-10">
        <span className="flex items-center text-sm font-medium text-gray-400">
          <Icon size={20} className="mr-2" style={{ color }} />
          {name}
        </span>
        <p className="mt-1 text-3xl font-semibold text-gray-100">{value}</p>
      </div>
    </motion.div>
  );
};

export default Statistics;
