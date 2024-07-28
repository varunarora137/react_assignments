import { useEffect, useRef, useState } from "react";
import "./App.css";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

function App() {
  const [data, setData] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [dots, setDots] = useState(1);
  const submit = useRef(null);

  async function query(data) {
    setLoading(true);
    setImgSrc("");
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({ inputs: data }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.blob();
      const imgUrl = URL.createObjectURL(result);
      setImgSrc(imgUrl);
    } catch (error) {
      alert("Error:", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        query(data);
        setData("");
      }
    };

    const button = submit.current;
    if (button) {
      button.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (button) {
        button.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [data]);

  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setDots((prevDots) => (prevDots % 3) + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  return (
    <div className="container">
      <h1>Text To Image Generation</h1>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter text..."
          onChange={(e) => setData(e.currentTarget.value)}
          value={data}
          ref={submit}
        />
        <button
          onClick={() => {
            query(data);
            setData("");
          }}
        >
          Compute
        </button>
      </div>
      {loading && <h3>Loading{".".repeat(dots)}</h3>}
      {imgSrc && (
        <div className="imageContainer">
          <img src={imgSrc} alt="Generated" />
        </div>
      )}
    </div>
  );
}

export default App;
