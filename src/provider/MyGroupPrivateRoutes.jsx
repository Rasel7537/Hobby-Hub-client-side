import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";
import LoadingTwo from "../pages/UpdateGroup/LoadingTwo";

const MyGroupPrivateRoutes = ({ children }) => {
  const {user ,dataLoading} =use(AuthContext)
  // console.log(user);
  if(dataLoading){
    return <LoadingTwo></LoadingTwo>
  }

if(user && user?.email){
 return children;
}
 
return <Navigate to={"/Login"} ></Navigate>
 
};

export default MyGroupPrivateRoutes;
