import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  return (
    <div data-mode={mode}>
      <Header text={mode} setMode={setMode} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
