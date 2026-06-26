import React, { useState } from "react";
import Container from "../components/common/Container";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { ShieldCheck } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice.js";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Something went wrong.");
        }

        localStorage.setItem("token", data?.token);
        dispatch(setUser(data?.user));
        navigate("/");

        return data;
      } catch (error) {
        console.log("error: ", error.message);
        throw error;
      }
    },
    onSuccess: () => {
      toast.success("Login successful.");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full md:mt-20 mt-20 rounded-3xl p-px relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-3xl">
          <div className="absolute -inset-full animate-spin-slow bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#47f375_330deg,transparent_360deg)]" />
        </div>

        <div className="relative bg-linear-to-tr from-black to-neutral-900 md:h-190 rounded-3xl md:flex md:flex-row items-center flex-1 p-5 border border-neutral-900">
          <div className="hidden w-[50%] h-full md:block relative">
            <motion.img
              src="/logo_2.png"
              alt=""
              className="absolute top-8 left-9 md:w-15 w-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />
            <img
              src="/login_img.jpg"
              alt=""
              className="w-full h-full rounded-3xl hidden md:block"
            />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute top-8 right-8 flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-xl border border-white/10"
            >
              <ShieldCheck size={16} className="text-[#47f375]" />
              <span className="text-sm">End-to-End Encrypted</span>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="hidden md:block absolute w-[70%] p-10 rounded-2xl backdrop-blur-lg bottom-8 left-8 border border-white/10"
            >
              <h1 className="font-bold text-4xl">Login to Your Vault</h1>
              <p className="text-xl mt-4">
                Login to securely manage, store, and access your passwords
                anytime.
              </p>
            </motion.div>
          </div>

          <div className="md:w-[50%] md:px-40 mt-10 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="w-full md:flex flex-col justify-center items-center">
                <div className="w-full md:text-lg">
                  <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="md:text-5xl text-4xl font-bold"
                  >
                    Welcome back.
                  </motion.h1>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="mt-2 md:mt-4 text-md md:text-xl text-neutral-400"
                  >
                    Access your encrypted vault and manage your passwords with
                    confidence.
                  </motion.p>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleFormData(e)}
                    className="w-full mt-5 md:mt-8 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleFormData(e)}
                    className="w-full mt-6 h-12 ps-3 border border-neutral-700 rounded-lg outline-none focus:border-lime-600 bg-transparent transition-all ease-in-out duration-200"
                  />

                  <motion.button
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    type="submit"
                    className="w-full mt-6 py-2 md:py-2 text-black rounded-lg text-lg md:text-xl transition-all duration-200 ease-out bg-[#8abc01] hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-102 font-bold text-center"
                  >
                    {isPending ? "Unlocking Vault..." : "Login"}
                  </motion.button>

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
      </motion.div>
    </Container>
  );
};

export default Login;
