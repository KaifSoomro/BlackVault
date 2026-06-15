import React from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import "../index.css";

const SignUp = () => {
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
              <h1 className="font-bold text-4xl">Create Your Secure Vault</h1>
              <p className="text-xl mt-4">
                Create your account and take control of your passwords with
                secure, encrypted storage.
              </p>
            </div>
          </div>

          <div className="w-[50%] px-40">
            <form>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full text-lg">
                  <h1 className="text-5xl font-bold">Create Account.</h1>
                  <p className="mt-4 text-xl text-neutral-400">
                    Store, organize, and protect your passwords with
                    military-grade encryption and seamless access across all
                    your devices.
                  </p>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <button className="w-full mt-6 md:py-2 text-black rounded-lg text-lg md:text-xl transition-all duration-200 ease-out bg-[#8abc01] hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-102 font-bold text-center">
                    Create Account
                  </button>

                  <div className="relative mt-10">
                    <hr className="text-neutral-800" />
                    <span className="bg-black text-sm px-3 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-neutral-500">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-[#8abc01] font-semibold"
                      >
                        Login
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

export default SignUp;
