import React, { use } from "react";
import { Link } from "react-router";
import{AuthContext} from "../../provider/AuthProvider"
const Register = () => {
  const {createUser,setUser}= use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email,password)
    .then(result =>{
      const user = result.user;
      // console.log(user);
      setUser(user)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage,errorCode)
    // ..
  });
  };
  return (
    <div>
      <div className="flex justify-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-8">
          <h2 className="font-bold text-2xl text-center">
            Register your account
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="name"
                className="input"
                placeholder="Your name"
                required
              />
              {/* photo URl*/}
              <label className="label">Photo</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="photo URL"
                required
              />
              {/* email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
            <p className="text-center pt-4">
              All ready Have An Account ?{" "}
              <Link className="text-red-500 font-bold underline" to={"/Login"}>
                {" "}
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
