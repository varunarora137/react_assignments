import "./Languages.css";

function Languages({ languages, setFinalCode, setInitialCode, isFinal }) {
  return (
    <>
      <select
        className="select"
        onChange={(e) => {
          if (isFinal) {
            setFinalCode(e.target.value);
          } else {
            setInitialCode(e.target.value);
          }
        }}
      >
        {languages.map((l, i) => (
          <option key={l.code + i} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>
    </>
  );
}

export default Languages;
