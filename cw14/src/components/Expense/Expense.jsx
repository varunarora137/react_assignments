import { useState } from "react";
import "./Expense.css";

function Expense({ text, value, setBudget }) {
  const [val, setVal] = useState(value);
  const [edit, setEdit] = useState(false);
  return (
    <div className="expense">
      {!edit && (
        <>
          <p>
            {text} : ₹{value}
          </p>
          {setBudget && (
            <button className="editBudget" onClick={() => setEdit(true)}>
              Edit
            </button>
          )}
        </>
      )}
      {edit && (
        <>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(Number(e.currentTarget.value))}
          />
          <br />
          <button
            className="edit-save"
            onClick={() => {
              setBudget(val);
              setEdit(false);
            }}
          >
            Save
          </button>
          <button
            className="edit-close"
            onClick={() => {
              setVal(value);
              setEdit(false);
            }}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}

export default Expense;
