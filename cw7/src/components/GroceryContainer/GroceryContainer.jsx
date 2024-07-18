import "./GroceryContainer.css";
import GroceryItem from "../GroceryItem/GroceryItem.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

let val = 1;

function GroceryContainer() {
  const [txt, setTxt] = useState("");

  const getArr =
    localStorage.getItem("arr") === null
      ? []
      : JSON.parse(localStorage.getItem("arr"));

  const [arr, setArr] = useState(getArr);

  useEffect(() => localStorage.setItem("arr", JSON.stringify(arr)), [arr]);

  function updateArr(e) {
    e.preventDefault();
    if (txt.trim().length === 0) {
      toast.warning("Please Provide Value", {
        position: "top-center",
        theme: "dark",
      });
      setTxt("");
      return;
    }
    const tempArr = [...arr, { id: val++, text: txt, done: "no" }];
    setArr(tempArr);
    setTxt("");
    toast.success("Item Added To The List", {
      position: "top-center",
    });
  }

  function del(id) {
    const tempArr = [...arr];
    const updatedArr = tempArr.filter((obj) => obj.id !== id);
    setArr(updatedArr);
    toast.success("Item Deleted", {
      position: "top-center",
    });
  }

  function done(id) {
    const tempArr = [...arr];
    const updatedArr = tempArr.map((obj) =>
      obj.id === id ? { ...obj, done: obj.done === "yes" ? "no" : "yes" } : obj
    );
    setArr(updatedArr);
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <p className="heading">Grocery Bud</p>
        <form>
          <input
            type="text"
            className="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <input
            type="submit"
            value="Add Item"
            className="submit"
            onClick={(e) => updateArr(e)}
          />
        </form>
        <div className="groceryItemContainer">
          {arr.map((obj) => (
            <GroceryItem
              key={obj.id}
              text={obj.text}
              del={() => del(obj.id)}
              done={() => done(obj.id)}
              completed={obj.done}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GroceryContainer;
