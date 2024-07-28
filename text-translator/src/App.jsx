import { useEffect, useState } from "react";
import "./App.css";
import TranslationContainer from "./components/TranslationContainer/TranslationContainer.jsx";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [initialText, setInitialText] = useState("");
  const [finalText, setFinalText] = useState("");
  const [initialCode, setInitialCode] = useState("af");
  const [finalCode, setFinalCode] = useState("af");

  useEffect(() => {
    if (initialText.length === 0) setFinalText("");
  }, [initialText]);
  async function getTranslatedText() {
    const data = new FormData();
    data.append("source_language", initialCode);
    data.append("target_language", finalCode);
    data.append("text", initialText);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
      data: data,
    };
    setFinalText("Loading...");
    try {
      const response = await axios.request(options);
      // console.log(response.data.data.translatedText);
      setFinalText(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
      setFinalText("Error in translation");
    }
  }

  return (
    <div className="container">
      <h1>TEXT TRANSLATOR</h1>
      <div className="transaltionDivs">
        <TranslationContainer
          placeholder="Enter text here..."
          initialText={initialText}
          setInitialText={setInitialText}
          setInitialCode={setInitialCode}
          isFinal={false}
        />
        <TranslationContainer
          placeholder="Translated text here..."
          finalText={finalText}
          isFinal={true}
          setFinalCode={setFinalCode}
        />
      </div>
      <button className="submit" onClick={getTranslatedText}>
        Translate
      </button>
    </div>
  );
}

export default App;
