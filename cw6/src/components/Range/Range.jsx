import "./Range.css";

function Range({ heading, min, max, minVal, maxVal, value, setValue }) {
  return (
    <div className="rangeContainer">
      <p className="heading">{heading}</p>
      <p className="amt">
        {minVal[0] == "$" ? "$ " : ""}
        {value}
      </p>
      <input
        type="range"
        className="range"
        min={min}
        max={max}
        value={value}
        step={minVal[0] == "$" ? 100 : 1}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <p className="rangeVal">
        <span>{minVal}</span>
        <span>{maxVal}</span>
      </p>
    </div>
  );
}

export default Range;
