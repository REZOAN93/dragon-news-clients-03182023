import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebaseinit";

const auth = getAuth(app);

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleAuth = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const LogOut = () => {
    return signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const AuthInfo = { user, googleAuth, LogOut };

  return (
    <Authcontext.Provider value={AuthInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
