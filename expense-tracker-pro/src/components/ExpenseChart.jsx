
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useExpenses } from "../context/ExpenseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart() {
  const { expenses } = useExpenses();

  const map = {};
  expenses.forEach(e => map[e.category] = (map[e.category] || 0) + e.amount);

  const data = {
    labels: Object.keys(map),
    datasets: [{ data: Object.values(map) }]
  };

  return <Pie data={data} />;
}
