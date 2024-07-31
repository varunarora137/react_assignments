import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
