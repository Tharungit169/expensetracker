
import { useExpenses } from "../context/ExpenseContext";
import ExpenseChart from "../components/ExpenseChart";

export default function Dashboard() {
  const { expenses } = useExpenses();
  const total = expenses.reduce((a,b)=>a+b.amount,0);

  return (
    <div className="card">
      <h1>Total Spent: ₹{total}</h1>
      <ExpenseChart />
    </div>
  );
}
