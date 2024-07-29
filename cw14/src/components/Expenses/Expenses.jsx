import "./Expenses.css";
import Expense from "../Expense/Expense.jsx";

function Expenses({ budget, setBudget, remaining, spent }) {
  return (
    <div className="expenseContainer">
      <Expense text="Budget" value={budget} setBudget={setBudget} />
      <Expense text="Remaining" value={remaining} />
      <Expense text="Spent So Far" value={spent} />
    </div>
  );
}

export default Expenses;
