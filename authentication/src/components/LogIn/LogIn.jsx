import { Link } from "react-router-dom";
import "./LogIn.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import loadingLogo from "../../assets/loading.gif";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      toast.error("Please Provide Email and Password", { theme: "dark" });
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((resp) => {
        setLoading(false);
        toast("Log In");
        setEmail("");
        setPassword("");
        console.log(resp);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Authentication Failed. Provide valid Email And Password.",
          { theme: "dark" }
        );
        console.error(err);
      });
  }

  return (
    <div className="login">
      {loading && (
        <div className="modal">
          <img src={loadingLogo} alt="img" />
        </div>
      )}
      <ToastContainer position="top-center" autoClose={1000} />
      <div className="login-div">
        <h1>LOG IN</h1>
        <hr />
        <div className="loginInputFields">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" onClick={login}>
            Log In
          </button>
        </div>
        <p className="notMember">
          Not a Member? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
