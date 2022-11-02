import React, { createContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
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

   /* Get current sign in user */
   useEffect(() => {
      setLoading(false);
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("Current User: ", currentUser);
         setUser(currentUser);
      });
      return () => unsubscribe();
   }, []);

   const authInfo = { user, loading, createAUser, loginAUser };

   return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
