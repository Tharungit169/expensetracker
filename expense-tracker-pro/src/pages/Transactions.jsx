
import { useExpenses } from "../context/ExpenseContext";

export default function Transactions() {
  const { expenses, dispatch } = useExpenses();

  return (
    <div className="card">
      <h2>Transactions</h2>
      <ul className="list">
        {expenses.map(e => (
          <li key={e.id}>
            <span>{e.text} ({e.category})</span>
            <span>₹{e.amount}</span>
            <button onClick={()=>dispatch({type:"DELETE",payload:e.id})}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
