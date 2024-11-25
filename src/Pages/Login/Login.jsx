import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
// <<<<<<< HEAD
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// =======
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
import { useAuth } from "../../Context/AuthContext";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// >>>>>>> d446d5c6636d9516990791ee9e271704f1aa94f9

const Login = () => {
  const LoginSuccessNotify = () => {
    toast.success("Login Successfull!", {
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
  const LoginFailNotify = () => {
    toast.error(
      "Failed to login. Please check your credentials and try again.",
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      // toast.success("Login Successful!");
      LoginSuccessNotify();
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000); // Delay navigation by 3 seconds
    } catch (error) {
      LoginFailNotify();
      console.error("Failed to login", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      LoginSuccessNotify();
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000); // Delay navigation by 3 seconds
    } catch (error) {
      LoginFailNotify();
      console.error('Failed to sign in with Google', error);
    }
  };


  return (
    <>
      <div className="login-container">
        <ToastContainer />

        <div className="card">
          <div className="card_title text-black">
            <h1>Login</h1>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div>
                {" "}
                <input
                  type="email"
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
                  Login
                </button>
              </div>
              <br />
              <div>
                <span className="font-normal">
                  Don't have an account?{" "}
                  <Link to="/signup" className="font-normal">
                    Sign up
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
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
