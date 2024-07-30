import { useReducer } from "react";
import "./Main.css";

function reducer(currentState, action) {
  switch (action.type) {
    case "setText":
      return {
        words: action.payload
          .trim()
          .split(" ")
          .filter((s) => s != "").length,
        characters: action.payload.length,
        text: action.payload,
        readingTime: (
          action.payload
            .trim()
            .split(" ")
            .filter((s) => s != "").length / 183
        ).toFixed(2),
      };
    case "uppercase":
      return {
        ...currentState,
        text: currentState.text.toUpperCase(),
      };
    case "lowercase":
      return {
        ...currentState,
        text: currentState.text.toLowerCase(),
      };
    case "clear":
      return {
        words: 0,
        characters: 0,
        readingTime: 0,
        text: "",
      };
    case "remove":
      return {
        ...currentState,
        text: currentState.text
          .trim()
          .split(" ")
          .filter((s) => s != "")
          .join(" "),
        characters: currentState.text
          .trim()
          .split(" ")
          .filter((s) => s != "")
          .join(" ").length,
      };

    case "copy":
      navigator.clipboard.writeText(currentState.text);
      return currentState;
  }
}

function Main() {
  const [state, dispatch] = useReducer(reducer, {
    text: "",
    words: 0,
    characters: 0,
    readingTime: 0,
  });

  return (
    <div className="main">
      <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
      <h2>Enter Your Text Here:</h2>
      <textarea
        className="textarea1"
        value={state.text}
        onChange={(e) => dispatch({ type: "setText", payload: e.target.value })}
      />
      <div className="buttonContainer">
        <button
          className={state.text.length > 0 ? "blue" : "blue disabled"}
          onClick={() => dispatch({ type: "uppercase" })}
        >
          Convert UpperCase
        </button>
        <button
          className={state.text.length > 0 ? "blue" : "blue disabled"}
          onClick={() => dispatch({ type: "lowercase" })}
        >
          Convert LowerCase
        </button>
        <button
          className={state.text.length > 0 ? "red" : "red disabled"}
          onClick={() => dispatch({ type: "clear" })}
        >
          Clear Text
        </button>
        <button
          className={state.text.length > 0 ? "green" : "green disabled"}
          onClick={() => dispatch({ type: "copy" })}
        >
          Copy To Clipboard
        </button>
        <button
          className={state.text.length > 0 ? "blue" : "blue disabled"}
          onClick={() => dispatch({ type: "remove" })}
        >
          Remove Extra Spaces
        </button>
      </div>
      <h1>Summary Of Your Text</h1>
      <p className="summary">Number of words : {state.words}</p>
      <p className="summary">Number of characters : {state.characters}</p>
      <p className="summary">Reading Time: {state.readingTime}</p>
      <h2>Preview Document</h2>
      <textarea className="textarea2" disabled value={state.text} />
    </div>
  );
}

export default Main;
