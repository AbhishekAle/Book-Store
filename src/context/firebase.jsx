import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBLbl4rts4n1CXhMreevNoXQMNXZcwGTyA",
  authDomain: "bookstore-b1ffb.firebaseapp.com",
  projectId: "bookstore-b1ffb",
  storageBucket: "bookstore-b1ffb.appspot.com",
  messagingSenderId: "1005485808378",
  appId: "1:1005485808378:web:b3af0a83efdff972b08743",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const singinUserWithEmailAndPass = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        signinWithGoogle,
        isLoggedIn,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
