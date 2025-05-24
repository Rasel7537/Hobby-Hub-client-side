import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = use(AuthContext);
  // console.log(user);

  if(loading){
    //adding loding speener 
    return <span className="loading loading-bars loading-xl"></span>
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/Login"}></Navigate>
};

export default PrivateRoutes;
