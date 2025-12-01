
import { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { categories } from "../utils/categories";

export default function AddExpense() {
  const { dispatch } = useExpenses();
  const [form, setForm] = useState({ text:"", amount:"", category:"Food" });

  const submit = e => {
    e.preventDefault();
    dispatch({
      type:"ADD",
      payload:{ id:Date.now(), ...form, amount:+form.amount }
    });
    setForm({ text:"", amount:"", category:"Food" });
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Add Expense</h2>
      <input placeholder="Title" value={form.text} onChange={e=>setForm({...form,text:e.target.value})} />
      <input type="number" placeholder="Amount" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})} />
      <select value={form.category} onChange={e=>setForm({...form,category:e.target.value})}>
        {categories.map(c=><option key={c}>{c}</option>)}
      </select>
      <button>Add</button>
    </form>
  );
}
