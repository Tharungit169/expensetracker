
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>ExpensePro</h2>
      <div>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/transactions">Transactions</Link>
      </div>
    </nav>
  );
}
