import "./EducationPlannerContainer.css";
import Subject from "../Subject/Subject.jsx";
import { useState } from "react";

function EducationPlannerContainer() {
  const [sub, setSub] = useState("");
  const [hrs, setHrs] = useState("");
  const [arr, setArr] = useState(() => {
    const storedArr = JSON.parse(localStorage.getItem("subjects")) || [];
    return storedArr;
  });
  const [id, setId] = useState(() => {
    const storedArr = JSON.parse(localStorage.getItem("subjects")) || [];
    return storedArr.length > 0 ? storedArr[storedArr.length - 1].id + 1 : 1;
  });

  const updateLocalStorage = (newArr) => {
    localStorage.setItem("subjects", JSON.stringify(newArr));
  };

  function validate(e) {
    e.preventDefault();

    if (sub === "" || hrs === "") {
      alert("Subject and Hours fields both need to be filled.");
      return;
    }

    if (hrs < 1) {
      alert("Hours should be greater than zero");
      return;
    }

    const newSubject = {
      sub,
      hrs: Number(hrs),
      id: id,
    };

    const newArr = [...arr, newSubject];
    setArr(newArr);
    updateLocalStorage(newArr);
    setId((i) => i + 1);
    setSub("");
    setHrs("");
  }

  const incrementHours = (id) => {
    const newArr = arr.map((subject) =>
      subject.id === id ? { ...subject, hrs: subject.hrs + 1 } : subject
    );
    setArr(newArr);
    updateLocalStorage(newArr);
  };

  const decrementHours = (id) => {
    const newArr = arr
      .map((subject) => {
        if (subject.id === id) {
          if (subject.hrs > 1) {
            return { ...subject, hrs: subject.hrs - 1 };
          } else {
            return null;
          }
        }
        return subject;
      })
      .filter((subject) => subject !== null);
    setArr(newArr);
    updateLocalStorage(newArr);
  };

  const closeDiv = (id) => {
    const newArr = arr.filter((sub) => sub.id !== id);
    setArr(newArr);
    updateLocalStorage(newArr);
  };

  return (
    <div className="container">
      <div className="inputContainer">
        <h1>Geekster Education Planner</h1>
        <form>
          <input
            type="text"
            className="subject"
            placeholder="Enter Subject"
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
          <input
            type="number"
            className="hours"
            placeholder="Enter No. Of Hours"
            min={0}
            value={hrs}
            onChange={(e) => setHrs(Number(e.target.value))}
          />
          <input
            type="submit"
            value="ADD"
            id="btn"
            onClick={(e) => validate(e)}
          />
        </form>
      </div>
      <div className="subjectContainer">
        {arr.length === 0 ? (
          <h2>Please Add Subjects!!!!</h2>
        ) : (
          arr.map((subject) => (
            <Subject
              key={subject.id}
              sub={subject.sub}
              hrs={subject.hrs}
              inc={() => incrementHours(subject.id)}
              dec={() => decrementHours(subject.id)}
              close={() => closeDiv(subject.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default EducationPlannerContainer;
