import "./Button.css";

function Button({ text, color, backgrounColor, marginRight }) {
  return (
    <>
      <button
        className="genericButton"
        style={{
          color: `${color}`,
          backgroundColor: `${backgrounColor}`,
          padding: `${13}px ${50}px`,
          marginRight: `${marginRight}px`,
        }}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
