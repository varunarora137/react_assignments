import "./TranslationContainer.css";
import Languages from "../Languages/Languages.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function TranslationContainer({
  placeholder,
  initialText,
  setInitialText,
  setInitialCode,
  setFinalCode,
  isFinal,
  finalText,
}) {
  const [languages, setLanguages] = useState([]);

  async function getLanguages() {
    const options = {
      method: "GET",
      url: "https://text-translator2.p.rapidapi.com/getLanguages",
      headers: {
        "x-rapidapi-key": "a5fd3e080emshd7a183ebbe31cccp13319djsn2c76851ffcde",
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLanguages(response.data.data.languages);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div
      className="translationContainer"
      style={{ display: "flex", flexDirection: "column", width: "40%" }}
    >
      <Languages
        languages={languages}
        setInitialCode={setInitialCode}
        setFinalCode={setFinalCode}
        isFinal={isFinal}
      />
      {!isFinal ? (
        <textarea
          className="textarea"
          placeholder={placeholder}
          value={initialText}
          onChange={(e) => {
            setInitialText(e.currentTarget.value);
            // console.log(initialText);
          }}
        />
      ) : (
        <textarea
          className="textarea"
          placeholder={placeholder}
          value={finalText}
          disabled={true}
        />
      )}
    </div>
  );
}

export default TranslationContainer;
