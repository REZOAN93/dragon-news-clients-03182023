import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebaseinit";

const auth = getAuth(app);

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleAuth = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userlogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateuser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        if (currentUser === null || currentUser.emailVerified) {
          setUser(currentUser);
        }
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

  const AuthInfo = {
    user,
    googleAuth,
    LogOut,
    createUser,
    userlogin,
    updateuser,
    verifyEmail,
  };

  return (
    <Authcontext.Provider value={AuthInfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
