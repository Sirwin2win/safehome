import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

// ✅ Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["#223B7E", "#223B7E66"],
  datasets: [
    {
      label: "Votes",
      data: [12, 19],
      backgroundColor: ["#223B7E", "#223B7E66"],
      borderWidth: 1,
    },
  ],
};

export default function DoughnutCharts() {
  return <Doughnut data={data} />;
}