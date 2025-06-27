
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import userpic from "../../assets/icons8-user-64.png";
import logo from "../../assets/logo1.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out from your account?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire(
              "Logged out!",
              "You have been logged out successfully.",
              "success"
            );
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    });
  };

  return (
    // ✅ Sticky navbar wrapper
    <div className="sticky top-0 z-50 bg-base-100 shadow-md rounded-xl backdrop-blur-md mb-6">
      <div className="navbar px-6 py-3">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-3">
          <img
            className="w-12 h-12"
            src={logo}
            alt="Logo"
            data-tooltip-id="hobbyhub-tooltip"
          />
          <Tooltip
            id="hobbyhub-tooltip"
            place="bottom"
            type="dark"
            effect="solid"
          >
            Hobby Hub - Connect with your favorite hobby groups! 🎨🎭
          </Tooltip>
          <Link className="btn btn-ghost text-xl text-blue-600 font-bold">
            Hobby Hub
          </Link>

          <div>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
            />
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/anothrGroupCard"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              All Groups
            </NavLink>
            <NavLink
              to="/MyGroups"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              My Groups
            </NavLink>
            <NavLink
              to="/AddNewPeople"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              Create Hobby Group
            </NavLink>
            <NavLink
              to="/ConnectUs"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-sm bg-blue-600 text-white"
                  : "btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
              }
            >
              About Us
            </NavLink>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center gap-4">
          {user && (
            <div className="relative group">
              <img
                className="w-9 h-9 rounded-full object-cover border-2 border-blue-400"
                src={user.photoURL || userpic}
                alt="User"
              />
              <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 bg-base-200 px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap">
                {user.displayName}
              </div>
            </div>
          )}

          {user ? (
            <>
              <button
                onClick={handleLogout}
                className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
              <Tooltip
                id="logout-tooltip"
                place="bottom"
                type="dark"
                effect="solid"
              >
                Click to log out
              </Tooltip>
            </>
          ) : (
            <Link to="/Login">
              <button className="btn btn-sm bg-blue-400 text-white hover:bg-blue-600">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
