import React from "react";
import { Routes, Route } from "react-router-dom";

//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//components
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import MyNavbar from "./components/Navbar";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home";
import BookDetailPage from "./pages/Detail";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/book/list" element={<ListingPage />} />
        <Route path="/book/view/:bookId" element={<BookDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
