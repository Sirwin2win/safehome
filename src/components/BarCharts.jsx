import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// ✅ Register components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug"],
  datasets: [
    {
      label: "Sales",
      data: [40, 30, 35,55,25,65,70,30],
      backgroundColor: ["#98D7A7"],
    },
  ],
};

export default function BarCharts() {
  return <Bar data={data} />;
}