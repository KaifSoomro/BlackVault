import React from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import "../index.css";
import { ShieldCheck } from "lucide-react";

const Login = () => {
  return (
    <Container>
      <div className="w-full md:mt-20 mt-20 rounded-3xl p-px relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute -inset-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#47f375_330deg,transparent_360deg)]" />
        </div>

        <div className="relative bg-linear-to-tr from-black to-neutral-900 md:h-190 rounded-3xl md:flex md:flex-row items-center flex-1 p-5 border border-neutral-900">
          <div className="hidden w-[50%] h-full md:block relative">
            <img
              src="./public/logo_2.png"
              alt=""
              className="absolute top-8 left-9 md:w-15 w-10"
            />
            <img
              src="./public/login_img.jpg"
              alt=""
              className="w-full h-full rounded-3xl hidden md:block"
            />

            <div className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/10">
              <ShieldCheck size={16} className="text-[#47f375]" />
              <span className="text-sm">End-to-End Encrypted</span>
            </div>

            <div className="hidden md:block absolute w-[70%] p-10 rounded-2xl backdrop-blur-lg bottom-8 left-8 border border-white/10">
              <h1 className="font-bold text-4xl">Login to Your Vault</h1>
              <p className="text-xl mt-4">
                Login to securely manage, store, and access your passwords
                anytime.
              </p>
            </div>
          </div>

          <div className="md:w-[50%] md:px-40 mt-10 md:mt-0">
            <form>
              <div className="w-full md:flex flex-col justify-center items-center">
                <div className="w-full md:text-lg">
                  <h1 className="md:text-5xl text-4xl font-bold">
                    Welcome back.
                  </h1>
                  <p className="mt-2 md:mt-4 text-md md:text-xl text-neutral-400">
                    Access your encrypted vault and manage your passwords with
                    confidence.
                  </p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <button className="w-full mt-6 py-2 md:py-2 text-black rounded-lg text-lg md:text-xl transition-all duration-200 ease-out bg-[#8abc01] hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-102 font-bold text-center">
                    Login
                  </button>

                  <div className="text-center mt-3 md:mt-6 text-[#8abc01] hover:underline mb-8">
                    <Link
                      to={"/forgot-password"}
                      className="text-sm md:text-lg"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="relative md:mt-10 mt-5 text-center mb-4">
                    <hr className="text-neutral-800" />
                    <span className="w-60 bg-black text-xs md:text-sm md:px-3 px-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-neutral-500">
                      Don't have an account?{" "}
                      <Link
                        to="/signup"
                        className="text-[#8abc01] font-semibold"
                      >
                        Signup
                      </Link>
                    </span>
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
