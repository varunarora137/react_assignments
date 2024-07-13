import "./App.css";
import Lorem from "./components/Lorem/Lorem.jsx";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const [num, setNum] = useState("");
  const [arr, setArr] = useState([]);

  function handleClick(id, para) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        navigator.clipboard.writeText(para);
      }
    }
  }

  function validate(e) {
    e.preventDefault();
    if (num === "" || num < 1 || num > 54) {
      alert("Please Enter Number Between 1 and 54");
      return;
    }
    const shuffledData = [...data].sort(() => 0.5 - Math.random());
    const selectedParagraphs = shuffledData.slice(0, num);
    setArr(selectedParagraphs);
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
          arr.map((d, ind) => (
            <Lorem
              key={d.id}
              i={ind + 1}
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
