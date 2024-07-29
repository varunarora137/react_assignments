import { useState } from "react";
import "./AddExpense.css";

function AddExpense({ setData }) {
  const [detail, setDetail] = useState("");
  const [amount, setAmount] = useState("");
  return (
    <div className="addExpense">
      <h2>Add Expense</h2>
      <div className="expenseInput">
        <input
          type="text"
          className="details"
          placeholder="Details..."
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <input
          type="number"
          className="amount"
          placeholder="Amount..."
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <button
        className="data-save"
        onClick={() => {
          if (amount < 0) {
            alert("Enter Valid Amount");
            setAmount("");
            return;
          }
          if (detail && amount) {
            setData(detail, amount);
            setDetail("");
            setAmount("");
          }
        }}
      >
        Save
      </button>
    </div>
  );
}

export default AddExpense;
