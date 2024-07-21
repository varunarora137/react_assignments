import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    if (progress >= 50) {
      setTextColor("white");
    } else {
      setTextColor("black");
    }
  }, [progress]);

  useEffect(() => {
    const interval = 6000 / 100;
    let currentProgress = 0;
    const timer = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(timer);
      } else {
        currentProgress++;
        setProgress(currentProgress);
      }
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <p>Progress Bar</p>
      <div className="bar-container">
        <div
          className="bar"
          style={{
            width: `${progress}%`,
          }}
        >
          <span className="progress-text" style={{ color: textColor }}>
            {progress}%
          </span>
        </div>
      </div>

      {progress >= 100 ? <p>Completed</p> : <p>Loading...</p>}
    </div>
  );
}

export default ProgressBar;
