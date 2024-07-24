import NotesContainer from "./components/NotesContainer/NotesContainer.jsx";
import Textarea from "./components/Textarea/Textarea.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const tempData = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  const [data, setData] = useState(tempData);
  const [currIndex, setCurrIndex] = useState(tempData.length ? 0 : null);
  const [isDragging, setIsDragging] = useState(false);
  const [width, setWidth] = useState(230);

  function handleData() {
    const newData = [{ desc: "# Enter title here \n\n" }, ...data];
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    setCurrIndex(0);
  }

  function onDelete(i) {
    const newData = data.filter((_, ind) => ind !== i);

    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
    if (i === currIndex) {
      if (newData.length === 0) {
        setCurrIndex(null);
      } else if (i === newData.length) {
        setCurrIndex(newData.length - 1);
      } else {
        setCurrIndex(i);
      }
    } else if (i < currIndex) {
      setCurrIndex(currIndex - 1);
    }
  }

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setWidth((prevWidth) => prevWidth + e.movementX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {data.length > 0 && (
        <div
          className="container"
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <NotesContainer
            data={data}
            handleData={handleData}
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
            onDelete={onDelete}
            width={width}
          />
          <div
            className="gutter gutter-horizontal"
            style={{ width: "10px" }}
            onMouseDown={handleMouseDown}
          ></div>
          <Textarea
            data={data}
            currIndex={currIndex}
            setData={setData}
            setCurrIndex={setCurrIndex}
            width={width}
          />
        </div>
      )}
      {data.length === 0 && (
        <div className="emptyContainer">
          <h1>You have no notes</h1>
          <button onClick={handleData}>Create one now</button>
        </div>
      )}
    </>
  );
}

export default App;
