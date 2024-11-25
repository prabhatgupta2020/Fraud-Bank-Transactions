import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./signup.css";
// <<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// =======
import { Bounce, ToastContainer, toast } from "react-toastify";

// >>>>>>> d446d5c6636d9516990791ee9e271704f1aa94f9
const Signup = () => {
  // ------------ TOAST FUNCTION ----------
  const SignUpSuccessNotify = () => {
    toast.success("Sign up Successfull!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };
  const SignUpFailNotify = () => {
    toast.error(
      "Failed to Sign up. Please check your credentials and try again.",
      {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      }
    );
  };

  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      SignUpSuccessNotify();
      setTimeout(() => {
        navigate("/dashboard"); // Navigate to dashboard on successfull sign up
      }, 3000); // Delay navigation by 3 seconds
    } catch (error) {
      SignUpFailNotify();
      console.error("Failed to signup", error);
    }
  };
  // ----------- SIGN IN WITH GOOGLE -----------
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      SignUpSuccessNotify();
      setTimeout(() => {
        navigate("/dashboard"); // Navigate to dashboard on successfull sign up
      }, 3000); // Delay navigation by 3 seconds
    } catch (error) {
      SignUpFailNotify();
      console.error("Failed to sign in with Google", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="signup-container">
        <div className="card">
          <div className="card_title">
            <h1>Create Account</h1>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Name"
                  className="font-medium"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <input
                  name="email"
                  placeholder="Email"
                  id="email"
                  className="font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  className="font-medium"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button className="signupbtn mb-2 font-medium" type="submit">
                  Sign Up
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium">
                    Login
                  </Link>
                </span>
              </div>
            </form>

            <p>
              <br />
              <b>
                <hr className="text-black" />
              </b>
              <br />
            </p>

            <button className="signupwithgoogle flex justify-center items-center" onClick={handleGoogleSignIn}>
              <img
                width="30px"
                src="https://img.icons8.com/color/48/google-logo.png"
                alt="google-logo"
              />
              Sign Up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
