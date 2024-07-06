import "./PasswordGenerator.css";

function PasswordGenerator({
  size,
  setIsChecked1,
  setIsChecked2,
  setIsChecked3,
  setIsChecked4,
  setSize,
  generate,
  isChecked1,
  isChecked2,
  isChecked3,
  isChecked4,
}) {
  return (
    <div className="passwordGenerator">
      <div className="textAndInput">
        <p>
          Select Password length <strong>(**8-50 characters**)</strong>
        </p>
        <input
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
      </div>
      <div className="options">
        <input
          type="checkbox"
          id="uppercase"
          checked={isChecked1}
          onChange={() => setIsChecked1(!isChecked1)}
        />
        <label htmlFor="uppercase">Include upper case</label>
        <br />
        <input
          type="checkbox"
          id="lowercase"
          checked={isChecked2}
          onChange={() => setIsChecked2(!isChecked2)}
        />
        <label htmlFor="lowercase">Include lower case</label>
        <br />
        <input
          type="checkbox"
          id="numbers"
          checked={isChecked3}
          onChange={() => setIsChecked3(!isChecked3)}
        />
        <label htmlFor="numbers">Include numbers</label>
        <br />
        <input
          type="checkbox"
          id="symbols"
          checked={isChecked4}
          onChange={() => setIsChecked4(!isChecked4)}
        />
        <label htmlFor="symbols">Include symbols</label>
        <br />
      </div>
      <button onClick={generate}>Generate Password</button>
    </div>
  );
}

export default PasswordGenerator;
