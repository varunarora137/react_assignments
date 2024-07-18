import "./GroceryItem.css";

function GroceryItem({ text, del, done, completed }) {
  return (
    <div className="item">
      <input type="checkbox" checked={completed === "yes"} onChange={done} />
      <p className={`groceryName ${completed === "yes" ? "completed" : ""}`}>
        {text}
      </p>
      <button className="delete" onClick={del}>
        Delete
      </button>
    </div>
  );
}

export default GroceryItem;
