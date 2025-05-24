
import React, { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config"; // ✅ Correct named import
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app); // Initialize auth

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataLoading,setDataLoading] = useState(true);
 console.log(user,dataLoading);
  // ✅ Create user with email/password
  const createUser = (email, password) => {
    setDataLoading(true)
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Sign in with email/password
  const signIn = (email, password) => {
    setDataLoading(true);
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Update user profile
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // ✅ Log out user
  const logOut = () => {
    return signOut(auth);
  };

  // ✅ Observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      setDataLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    updateUser,
    dataLoading,
    setDataLoading,
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




