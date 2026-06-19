import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, SunDim, X, Home, Shield, LogIn } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="w-[95%] px-3 md:max-w-3xl lg:max-w-4xl xl:max-w-[1600px] h-12 md:h-13 lg:h-15 flex items-center justify-between border border-white/15 rounded-full mt-4 backdrop-blur-xl bg-white/2 shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-3px_5px_rgba(71,243,117,0.15),0_10px_30px_rgba(0,0,0,0.35)] fixed top-0 z-40">
          <Link to="/" className="ms-1">
            <img
              src="/logo_1.png"
              alt="Logo"
              className="w-35 md:w-40 lg:w-43"
            />
          </Link>

          <div className="hidden md:flex items-center gap-3 text-base font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-5 py-2 rounded-full transition-all duration-300 ${isActive ? "text-[#47f375] bg-[#47f375]/10 border border-[#47f375]/30 shadow-[0_0_20px_rgba(71,243,117,0.15)]" : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"}`
              }
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#47f375] shadow-[0_0_10px_#47f375]" />
                  )}
                </>
              )}
            </NavLink>

            <NavLink
              to="/my-passwords"
              className={({ isActive }) =>
                `relative px-5 py-2 rounded-full transition-all duration-300 ${isActive ? "text-[#47f375] bg-[#47f375]/10 border border-[#47f375]/30 shadow-[0_0_20px_rgba(71,243,117,0.15)]" : "text-white/80 hover:text-white hover:bg-white/5 border border-transparent"}`
              }
            >
              {({ isActive }) => (
                <>
                  My Passwords
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#47f375] shadow-[0_0_10px_#47f375]" />
                  )}
                </>
              )}
            </NavLink>
          </div>

          <Link
            to="/login"
            className="hidden md:flex items-center justify-center px-8 py-2 rounded-full text-lg font-semibold border border-[#47f375]/20 text-[#47f375] hover:shadow-[0_0_20px_rgba(71,243,117,0.4)] transition-all duration-300"
          >
            Login
          </Link>
          <button onClick={() => setIsOpen(true)} className="block md:hidden">
            <Menu className="w-7 h-7 text-[#47f375]" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
        />
        <div
          className={`absolute top-4 left-1/2 -translate-x-1/2 w-[92%] rounded-3xl overflow-hidden border border-white/10 bg-black/90 backdrop-blur-2xl transition-all duration-200 ease-out ${isOpen ? "translate-y-0 opacity-100 scale-100" : "-translate-y-10 opacity-0 scale-95"}`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-[#47f375]/20 blur-[100px]" />
          <div className="relative flex items-center justify-between p-5 border-b border-white/10">
            <img src="/logo_1.png" alt="Logo" className="w-32" />
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#47f375]/30 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative p-5 space-y-3">
            <NavLink
              to="/"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${isActive ? "border-[#47f375]/40 bg-[#47f375]/10" : "border-white/10 bg-white/3"}`
              }
            >
              <Home size={20} className="text-[#47f375]" />
              <span className="font-medium">Home</span>
            </NavLink>
            <NavLink
              to="/passwords"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 ${isActive ? "border-[#47f375]/40 bg-[#47f375]/10" : "border-white/10 bg-white/3"}`
              }
            >
              <Shield size={20} className="text-[#47f375]" />
              <span className="font-medium">Passwords</span>
            </NavLink>

            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#47f375] text-black font-bold hover:shadow-[0_0_30px_rgba(71,243,117,0.4)] transition-all duration-300"
            >
              <LogIn size={18} /> Login
            </Link>
            <div className="pt-4 text-center text-xs text-neutral-500">
              Secure Password Manager
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
