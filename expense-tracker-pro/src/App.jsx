
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import AddExpense from "./pages/AddExpense";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/add" element={<AddExpense/>} />
          <Route path="/transactions" element={<Transactions/>} />
        </Routes>
      </div>
    </>
  );
}
