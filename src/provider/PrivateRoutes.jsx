import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoutes = ({ children }) => {
  const { user,loading } = use(AuthContext);
  // console.log(user);
 const location = useLocation
 console.log(location);
  if(loading){
    //adding loding speener 
    return <Loading></Loading>
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate  state={location.pathname} to={"/Login"}></Navigate>
};

export default PrivateRoutes;
