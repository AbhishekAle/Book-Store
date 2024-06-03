import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

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

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
