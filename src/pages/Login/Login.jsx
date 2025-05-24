// import React, { use, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router";
// import { AuthContext } from "../../provider/AuthProvider";

// const Login = () => {
//   const [error, setError] = useState("");
//   const { signIn } = use(AuthContext);
//   const location = useLocation();
//   console.log(location);
//   const navigate = useNavigate();
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const form = e.target;

//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     signIn(email, password)
//       .then((result) => {
//         const user = result.user;
//         console.log(user);
//         navigate(`${location.state ? location.state : "/"}`);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         // const errorMessage = error.message;
//         // alert(errorMessage,errorCode);
//         setError(errorCode);
//       });
//   };
//   return (
//     <div className="flex justify-center ">
//       <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
//         <h2 className="font-bold text-2xl text-center">Login your account</h2>
//         <form onSubmit={handleLogin} className="card-body">
//           <fieldset className="fieldset">
//             {/* email */}
//             <label className="label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className="input"
//               placeholder="Email"
//               required
//             />
//             {/* password */}
//             <label className="label">Password</label>
//             <input
//               type="password"
//               name="password"
//               className="input"
//               placeholder="Password"
//               required
//             />
//             <div>
//               <a className="link link-hover">Forgot password?</a>
//             </div>

//             {error && <p className="text-red-400 text-xs">{error}</p>}

//             <button type="submit" className="btn btn-neutral mt-4">
//               Login
//             </button>
//           </fieldset>
//           <p className="text-center pt-4">
//             Dont't Have An Account ?{" "}
//             <Link className="text-red-500 font-bold underline" to={"/Register"}>
//               {" "}
//               Register
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            {/* password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-center pt-4">
            Don't Have An Account?{" "}
            <Link className="text-red-500 font-bold underline" to={"/Register"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

