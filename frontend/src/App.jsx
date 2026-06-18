import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar.jsx";
import Loading from "./components/common/Loading.jsx";
import Footer from "./components/common/Footer.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const ManagePass = lazy(() => import("./pages/ManagePass.jsx"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail.jsx"));

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/signup"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
          <Route path="/my-passwords" element={<ManagePass />} />
        </Routes>
      </Suspense>

      {!hideNavbar && <Footer />}
    </>
  );
};

export default App;