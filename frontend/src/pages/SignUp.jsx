import React, { useState } from "react";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";
import "../index.css";
import { ShieldCheck } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: signup, isPending } = useMutation({
    mutationFn: async(formData) => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`, {
          method: "POST",
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify(formData)
        });

        const data = await res.json();
        if(!res.ok){
          throw new Error("Something went wrong.")
        }

        return data;
      } catch (error) {
        console.log("error: ", error.message);
      }
    },
    onSuccess: () => {
      toast.success("Please check your email for verification.")
    },
    onError: (error) => {
      toast.error(error.message)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);

    setFormData({
      fullName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  }
  return (
    <Container>
      <div className="w-full md:mt-20 mt-5 rounded-3xl p-px relative overflow-hidden">
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
              <h1 className="font-bold text-4xl">Create your vault today.</h1>
              <p className="text-xl mt-4">
                Access your passwords, notes, and sensitive information securely
                from anywhere with military-grade encryption.
              </p>
            </div>
          </div>

          <div className="md:w-[50%] md:px-40 mt-10 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="w-full md:flex flex-col justify-center items-center">
                <div className="w-full md:text-lg">
                  <h1 className="md:text-5xl text-4xl font-bold">
                    Create account
                  </h1>
                  <p className="mt-2 md:mt-4 text-md md:text-xl text-neutral-400">
                    Access your encrypted vault and manage your passwords with
                    confidence.
                  </p>

                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormData}
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <input
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value={formData.userName}
                    onChange={handleFormData}
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleFormData}
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormData}
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleFormData}
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <button type="submit" className="w-full mt-6 py-2 md:py-2 text-black rounded-lg text-lg md:text-xl transition-all duration-200 ease-out bg-[#8abc01] hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-102 font-bold text-center">
                    { isPending ? "Creating Your Vault..." : "Create Account" }
                  </button>

                  <div className="relative md:mt-10 mt-5 text-center mb-4">
                    <hr className="text-neutral-800" />
                    <span className="w-60 bg-black text-xs md:text-sm md:px-3 px-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-neutral-500">
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
