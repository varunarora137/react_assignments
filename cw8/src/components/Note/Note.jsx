import "./Note.css";
import { IoTrashBin } from "react-icons/io5";

function Note({ selected, setCurrIndex, onDelete, desc }) {
  function getTitle() {
    let str = desc.trim().split("\n")[0];
    if (str.length > 20) return str.slice(0, 19) + "...";
    return str;
  }

  return (
    <div
      className={`note ${selected === "yes" ? "selected" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={setCurrIndex}
    >
      <p>{getTitle()}</p>
      <IoTrashBin
        className="bin"
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
      />
    </div>
  );
}

export default Note;
