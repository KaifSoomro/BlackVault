import React, { useState } from "react";
import {
  Globe,
  User,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  Save,
  Mail,
  Loader2,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPassword = () => {
  let randomString;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    websiteName: "",
    websiteUrl: "",
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

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let password = "";

    for (let i = 0; i < 9; i++) {
      password += chars[Math.floor(Math.random() * chars.length)];
    }

    setFormData((prev) => ({
      ...prev,
      password,
    }));
  };

  const { mutate: addAccount, isPending } = useMutation({
    mutationFn: async (formData) => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/accounts/add`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          },
        );

        const data = await res.json();
        console.log(data);
        if (!res.ok) {
          throw new Error(data.message || "Something went wrong.");
        }

        return data;
      } catch (error) {
        console.log("error: ", error.message);
        throw error;
      }
    },
    onSuccess: () => {
        toast.success("Account added successfully.");

        setFormData({
          websiteName: "",
          websiteUrl: "",
          email: "",
          password: "",
        });

        navigate("/my-passwords");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAccount(formData);
  };

  return (
    <section className="min-h-screen px-3 py-20 mt-15">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="rounded-full border border-[#47f375]/20 bg-[#47f375]/10 px-4 py-2 text-sm font-medium text-[#47f375]">
            Password Vault
          </span>

          <h1 className="mt-5 text-4xl font-bold text-white md:text-5xl">
            Add New Password
          </h1>

          <p className="mt-3 text-neutral-400">
            Keep your credentials safe with end-to-end encryption.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-neutral-800 bg-linear-to-br from-neutral-950 via-black to-neutral-900 py-8 px-5">
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#47f375]/10 blur-[100px]" />

          <form className="relative z-10 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="mb-2 block text-sm text-neutral-300">
                Website Name
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-white/3 px-4 py-4 transition-all duration-300 focus-within:border-[#47f375]/40">
                <Globe size={18} className="text-[#47f375]" />
                <input
                  type="text"
                  placeholder="Google"
                  name="websiteName"
                  value={formData.websiteName}
                  onChange={(e) => handleFormData(e)}
                  className="w-full bg-transparent outline-none text-white placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">
                Website URL
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-white/3 px-4 py-4 transition-all duration-300 focus-within:border-[#47f375]/40">
                <Globe size={18} className="text-[#47f375]" />
                <input
                  type="text"
                  placeholder="https://google.com"
                  name="websiteUrl"
                  value={formData.websiteUrl}
                  onChange={(e) => handleFormData(e)}
                  className="w-full bg-transparent outline-none text-white placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">
                Email
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-white/3 px-4 py-4 transition-all duration-300 focus-within:border-[#47f375]/40">
                <Mail size={18} className="text-[#47f375]" />
                <input
                  type="email"
                  placeholder="website@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleFormData(e)}
                  className="w-full bg-transparent outline-none text-white placeholder:text-neutral-500"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm text-neutral-300">
                Password
              </label>

              <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-white/3 px-4 py-4 transition-all duration-300 focus-within:border-[#47f375]/40">
                <Lock size={18} className="text-[#47f375]" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={(e) => handleFormData(e)}
                  className="w-full bg-transparent outline-none text-white placeholder:text-neutral-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-500 hover:text-[#47f375]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button
                type="button"
                onClick={generatePassword}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#47f375]/20 bg-[#47f375]/10 px-6 py-4 font-medium text-[#47f375] transition-all duration-300 hover:border-[#47f375]/40 hover:bg-[#47f375]/15"
              >
                <Sparkles
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
                Generate Password
              </button>

              <button
                type="submit"
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#47f375] px-6 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(71,243,117,0.4)]"
              >
                {isPending ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Save size={18} />
                )}
                {isPending ? "Saving..." : "Save Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPassword;
