import "./ExpenseList.css";
import { useRef } from "react";

function ExpenseList({ data, deleteData, searchData }) {
  const searchText = useRef(null);
  return (
    <div className="expenseListConatiner">
      <div className="headings">
        <h2>Expenses List</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Search Expenses By Amount Or Details..."
            ref={searchText}
            onChange={(e) => e.currentTarget.value === "" && searchData("")}
          />
          <span onClick={() => searchData(searchText.current.value)}>🔍</span>
        </div>
      </div>
      {data.length > 0 ? (
        <div className="expenseListDiv">
          {data.map((d) => (
            <div className="expenseList" key={d.id}>
              <p className="item">{d.desc}</p>
              <p className="itemCost">₹ {d.cost}</p>
              <button className="delete" onClick={() => deleteData(d.id)}>
                ❌
              </button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="warning">List Is Currently Empty.</p>
        </>
      )}
    </div>
  );
}

export default ExpenseList;
