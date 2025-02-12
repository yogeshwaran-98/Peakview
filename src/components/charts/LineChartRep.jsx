import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const LineChartRep = ({ data }) => {
  const xAxisName = Object.keys(data[0])[0];
  const yAxisName = Object.keys(data[0])[1];

  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const linePath = chartRef.current?.querySelector(
        "path.recharts-line-curve"
      );

      if (linePath) {
        const length = linePath.getTotalLength();
        gsap.set(linePath, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(linePath, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.out",
        });
      }
    }
  }, [isInView]);

  return (
    <div
      ref={chartRef}
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border"
      style={{
        borderImage: "linear-gradient(90deg, #FF6B6B, #FFD93D, #6BCB77) 1",
      }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey={xAxisName} stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey={yAxisName}
              stroke="#6366F1"
              strokeWidth={3}
              dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartRep;
