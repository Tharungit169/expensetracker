
import { createContext, useContext, useReducer, useEffect } from "react";

const ExpenseContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(e => e.id !== action.payload);
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
