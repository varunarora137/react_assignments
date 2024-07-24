import MDEditor from "@uiw/react-md-editor";
import "./Textarea.css";

function Textarea({ data, currIndex, setData, setCurrIndex, width }) {
  function handleText(e) {
    const updatedItem = { ...data[currIndex], desc: e };
    const newData = [updatedItem, ...data.filter((_, i) => i !== currIndex)];
    setCurrIndex(0);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }
  return (
    <div
      className="textarea"
      style={{ width: `calc(100vw - 10px - ${width}px)` }}
    >
      <MDEditor
        height="100vh"
        value={currIndex !== null ? data[currIndex].desc : ""}
        onChange={(e) => handleText(e)}
      />
    </div>
  );
}

export default Textarea;
