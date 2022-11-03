import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState("rahat");
   const [loading, setLoading] = useState(true);

   const createAUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const loginAUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   /* log out */
   const logoutAUser = () => {
      setLoading(true);
      return signOut(auth);
   };

   /* Get current sign in user */
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Current User: ", currentUser);
         setUser(currentUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, loading, createAUser, loginAUser, logoutAUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
