import "./NotesContainer.css";
import Note from "../Note/Note.jsx";
import { IoMdAddCircle } from "react-icons/io";

function NotesContainer({
  data,
  handleData,
  currIndex,
  setCurrIndex,
  onDelete,
}) {
  return (
    <div className="notesContainer">
      <div className="heading">
        <h1>NOTES</h1>
        <IoMdAddCircle className="addItem" onClick={handleData} />
      </div>
      <div className="notes">
        {data.map((d, i) => (
          <Note
            key={i}
            desc={d.desc}
            selected={currIndex === i ? "yes" : "no"}
            setCurrIndex={() => {
              setCurrIndex(i);
              console.log("hey");
            }}
            onDelete={() => onDelete(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesContainer;
