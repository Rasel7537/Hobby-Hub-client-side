
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import userpic from "../../assets/icons8-user-64.png";
import logo from "../../assets/logo.png"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    console.log("user logout ");
    logOut()
      .then(() => {
        alert("you logout successfully");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div>
      <div className="mb-10">
        <div className="navbar bg-base-100 shadow-sm">
          {/* Show user email if logged in */}
          <div>{user && user.email}</div>

          <div className="navbar-start">
           <img className="w-16" src={logo} />
            <a className="btn btn-ghost text-xl">Hobby Hub</a>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="px-1 gap-5 flex">
              <NavLink to={"/"}>
                <li>Home</li>
              </NavLink>
              <NavLink to={"/anothrGroupCard"}>
                <li>All Groups</li>
              </NavLink>
              <NavLink to={"/MyGroups"}>
                <li>My Groups</li>
              </NavLink>

              <NavLink to={"/AddNewPeople"}>
                <li>Create Hobby Group</li>
              </NavLink>
            </ul>
          </div>

          <div className="navbar-end gap-4 items-center">
            <img className="w-9" src={userpic} />
            {user ? (
              <button onClick={handleLogout} className="btn">
                LogOut
              </button>
            ) : (
              <Link to={"/Login"}>
                <button className="btn">Login</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
