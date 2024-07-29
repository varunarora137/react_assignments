import "./App.css";
import Expenses from "./components/Expenses/Expenses.jsx";
import AddExpense from "./components/AddExpense/AddExpense.jsx";
import ExpenseList from "./components/ExpenseList/ExpenseList.jsx";
import { useState } from "react";
import { useEffect } from "react";

const initialBudgetAppData = localStorage.getItem("budgetAppData")
  ? JSON.parse(localStorage.getItem("budgetAppData"))
  : { budget: 0, data: [] };

const initialData = initialBudgetAppData.data;
const initialBudget = initialBudgetAppData.budget;

function App() {
  const [data, setData] = useState(initialData);
  const [budget, setBudget] = useState(initialBudget);
  const [remaining, setRemaining] = useState(0);
  const [spent, setSpent] = useState(0);
  const [tempData, setTempData] = useState([]);

  function handleData(detail, amt) {
    const newData = [...data, { id: data.length, desc: detail, cost: amt }];
    setData(newData);
  }

  function searchData(text) {
    tempData.length <= data.length && setTempData(data);
    if (text === "") {
      setData(tempData);
      setTempData([]);
      return;
    }
    const newData = data.filter(
      (d) => d.desc.includes(text) || String(d.cost).includes(text)
    );
    setData(newData);
  }

  function deleteData(id) {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  }

  useEffect(() => {
    if (tempData.length === 0) {
      let alreadySpent = data.reduce((acc, d) => acc + Number(d.cost), 0);
      if (alreadySpent - Number(budget) > 0) {
        const newData = data.slice(0, data.length - 1);
        setData(newData);
        alert("Insufficient Budget.");
        return;
      }
      setSpent(Number(alreadySpent));
      setRemaining(Number(budget) - Number(alreadySpent));

      const budgetData = {
        budget: budget,
        data: data,
      };
      localStorage.setItem("budgetAppData", JSON.stringify(budgetData));
    }
  }, [data, budget, tempData]);

  return (
    <div>
      <h1>My Budget Planner</h1>
      <Expenses
        budget={budget}
        setBudget={setBudget}
        remaining={remaining}
        spent={spent}
      />
      <AddExpense setData={handleData} />

      <ExpenseList
        data={data}
        deleteData={deleteData}
        searchData={searchData}
      />
    </div>
  );
}

export default App;
