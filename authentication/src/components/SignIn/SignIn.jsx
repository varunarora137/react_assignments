import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import loadingLogo from "../../assets/loading.gif";
import "react-toastify/dist/ReactToastify.css";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function signin() {
    setLoading(true);
    if (!email || !password) {
      setLoading(false);
      toast.error("Please Provide Email and Password", { theme: "dark" });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setLoading(false);
        toast("Sign In");
        setTimeout(() => {
          setEmail("");
          setPassword("");
          navigate("/");
        }, 1000);
      })
      .catch(() => {
        setLoading(false);
        toast.error("SignIn Failed. Provide valid Email And Password.", {
          theme: "dark",
        });
      });
  }

  return (
    <div className="signin">
      {loading && (
        <div className="modal">
          <img src={loadingLogo} alt="img" />
        </div>
      )}
      <ToastContainer position="top-center" autoClose={1000} />
      <div className="signin-div">
        <h1>SIGN IN</h1>
        <hr />
        <div className="signinInputFields">
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

          <button className="signin-btn" onClick={signin}>
            Sign In
          </button>
        </div>
        <p className="notMember">
          Already a Member? <Link to="/">Log In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
