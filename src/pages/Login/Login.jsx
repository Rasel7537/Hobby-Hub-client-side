
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config"; 

const Login = () => {
 
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google login success", user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Logged in with Google",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch((error) => {
        console.error("Google login error", error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext); // ✅ fixed: use → useContext

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state?.from?.pathname || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Login failed: " + errorCode,
        });
      });
  };

  return (
    <div className="flex justify-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
        <h2 className="font-bold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <p className="text-center pt-4">
            Don't Have An Account?{" "}
            <Link className="text-red-500 font-bold underline" to={"/Register"}>
              Register
            </Link>
          </p>

          {/* ✅ Google Sign-In Button */}
          <div onClick={handleGoogleSignIn} className="text-center mt-6 ">
            <p className="text-gray-500 mb-3">Or continue with</p>
            <button className="cursor-pointer flex items-center justify-center gap-2 w-full md:w-2/3 mx-auto py-2 px-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-white hover:bg-gray-100">
              <FcGoogle className="text-xl" />
              <span className="text-gray-700 font-medium">Login with Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
