import "./Lorem.css";
import copy from "../../assets/copy.svg";

function Lorem({ i, text, handleClick }) {
  return (
    <div className="paragraph">
      <div onClick={handleClick}>
        <img src={copy} alt="img" />
      </div>
      <p>
        <span>{i}) </span>
        {text}
      </p>
    </div>
  );
}

export default Lorem;
