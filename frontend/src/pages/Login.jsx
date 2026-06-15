import React from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import "../index.css";

const Login = () => {
  return (
    <Container>
      <div className="w-full mt-20 rounded-3xl p-px relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute -inset-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#47f375_330deg,transparent_360deg)]" />
        </div>

        <div className="relative bg-linear-to-tr from-black to-neutral-900 h-190 rounded-3xl flex items-center flex-1 p-6 border border-neutral-900">
          <div className="w-[50%] h-full relative">
            <img
              src="./public/logo_2.png"
              alt=""
              className="absolute top-15 left-15 w-15"
            />
            <img
              src="./public/login_img.jpg"
              alt=""
              className="w-full h-full rounded-3xl"
            />

            <div className="w-[70%] p-10 rounded-2xl backdrop-blur-lg absolute bottom-15 left-15 border border-white/10">
              <h1 className="font-bold text-4xl">Login to Your Vault</h1>
              <p className="text-xl mt-4">
                Login to securely manage, store, and access your passwords
                anytime.
              </p>
            </div>
          </div>

          <div className="w-[50%] px-40">
            <form>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full text-lg">
                  <h1 className="text-5xl font-bold">Welcome back.</h1>
                  <p className="mt-4 text-xl text-neutral-400">
                    Access your encrypted vault and manage your passwords with
                    confidence.
                  </p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <button className="w-full mt-6 md:py-2 text-black rounded-lg text-lg md:text-xl transition-all duration-200 ease-out bg-[#8abc01] hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-102 font-bold text-center">
                    Login
                  </button>

                  <div className="text-center mt-6 text-lime-600 hover:underline">
                    <Link to={"/forgot-password"}>Forgot Password?</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
