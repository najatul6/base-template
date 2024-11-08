import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
} from "firebase/auth";
import PropTypes from "prop-types";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  // Sign in with Email and Password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with Facebook
  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  // Sign in with Github
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // Sign in with Twitter
  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };
  // Log In With Email and Password
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Reset Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  // Auth State Change Listener
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    signInWithTwitter,
    logIn,
    logOut,
    resetPassword,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
