import PasswordDisplay from "./components/PasswordDisplay/PasswordDisplay.jsx";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator.jsx";
import { useState } from "react";

function App() {
  const [size, setSize] = useState(8);
  const [isChecked1, setIsChecked1] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);
  const [password, setPassword] = useState("");

  function generate() {
    if (size < 8 || size > 50) {
      setSize(8);
      setPassword("");
      alert("Length out of mentioned range");
      return;
    }

    const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
    const numbers = "0123456789";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let allCharacters = "";
    let pass = "";

    if (isChecked4) {
      allCharacters += specialCharacters;
    }
    if (isChecked3) {
      allCharacters += numbers;
    }
    if (isChecked1) {
      allCharacters += uppercase;
    }
    if (isChecked2) {
      allCharacters += lowercase;
    }

    if (allCharacters.length === 0) {
      setPassword(pass);
      alert("--All checks are empty--");
      return;
    }

    for (let i = 0; i < size; i++) {
      const randomIndex = Math.trunc(Math.random() * allCharacters.length);
      pass += allCharacters[randomIndex];
    }

    setPassword(pass);
  }
  return (
    <>
      <PasswordDisplay password={password} />
      <PasswordGenerator
        generate={generate}
        setIsChecked1={setIsChecked1}
        setIsChecked2={setIsChecked2}
        setIsChecked3={setIsChecked3}
        setIsChecked4={setIsChecked4}
        setSize={setSize}
        size={size}
        isChecked1={isChecked1}
        isChecked2={isChecked2}
        isChecked3={isChecked3}
        isChecked4={isChecked4}
      />
    </>
  );
}

export default App;
