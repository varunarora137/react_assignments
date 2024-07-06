import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import "./PasswordDisplay.css";

function PasswordDisplay(props) {
  return (
    <div className="passwordContainer">
      <h1>Password Generator</h1>
      <div className="inputAndButton">
        <input type="text" value={props.password} disabled />
        <button onClick={() => navigator.clipboard.writeText(props.password)}>
          <FontAwesomeIcon
            icon={faCopy}
            style={{ fontSize: "20px", color: "white" }}
          />
        </button>
      </div>
    </div>
  );
}

export default PasswordDisplay;
