import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/common/Navbar.jsx";
import ManagePass from "./pages/ManagePass.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
  const location = useLocation();

  const showNavbar = () => {
    if(location.pathname === "/login" || location.pathname === "/signup"){
      return 
    }else {
      return <Navbar />
    }
  }
  return (
    <>
      { showNavbar() }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwords" element={<ManagePass />} />
      </Routes>
    </>
  );
};

export default App;
