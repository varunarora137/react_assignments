import "./App.css";
import Lorem from "./components/Lorem/Lorem.jsx";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [arr, setArr] = useState([]);

  function handleClick(id, para) {
    // arr.map((a)=>a.id==)
  }

  function validate(e) {
    e.preventDefault();
    if (num === "" || num < 1 || num > 54) {
      alert("Please Enter Number Between 1 and 54");
      return;
    }
    setArr(data.filter((d) => d.id <= num));
  }

  return (
    <div className="container">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <form>
        <label htmlFor="para">No. of Paragraphs</label>
        <input
          type="number"
          id="para"
          value={num}
          min={1}
          onChange={(e) => setNum(Number(e.target.value))}
        />
        <input
          type="submit"
          value="Generate"
          className="generate"
          onClick={(e) => validate(e)}
        />
      </form>
      <div className="loremContainer">
        {arr.length === 0 ? (
          <h2>Please Enter Some Number To Generate Paragraphs</h2>
        ) : (
          arr.map((d) => (
            <Lorem
              key={d.id}
              i={d.id}
              text={d.paragraph}
              handleClick={() => handleClick(d.id, d.paragraph)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
