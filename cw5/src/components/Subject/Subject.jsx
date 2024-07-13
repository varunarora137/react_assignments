import "./Subject.css";

function Subject({ sub, hrs, inc, dec, close }) {
  return (
    <div className="subjectDiv">
      <p>{sub}</p>
      <p>{hrs} hrs</p>
      <div>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={close}>x</button>
      </div>
    </div>
  );
}

export default Subject;
