import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, SunDim } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[95%] px-3 md:max-w-3xl lg:max-w-4xl xl:max-w-[1600px] h-12 md:h-13 lg:h-15 flex items-center justify-between border border-white/15 rounded-full mt-4 backdrop-blur-lg bg-white/2 shadow-[inset_0_2px_2px_rgba(255,255,255,0.08),inset_0_-3px_5px_rgba(71,243,117,0.15),0_10px_30px_rgba(0,0,0,0.35)] fixed top-0">
        <Link to="/" className="ms-1">
          <img src="/logo_1.png" alt="" className="w-35 md:w-40 lg:w-43" />
        </Link>

        <div className="md:flex hidden items-center gap-8 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-6 py-1 transition-all duration-200 border border-white/15 rounded-full shadow-[inset_0_2px_2px_rgba(255,255,255,0.1)] hover:scale-103`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/passwords"
            className={({ isActive }) =>
              `px-6 py-1 transition-all duration-200 border border-white/15 rounded-full shadow-[inset_0_2px_2px_rgba(255,255,255,0.1)] hover:scale-103`
            }
          >
            Passwords
          </NavLink>
        </div>

        <div className="flex items-center gap-1 md:gap-5">
          <button className="scale-110 hover:scale-140 cursor-pointer hover:text-yellow-500 transition-all duration-200">
            <SunDim />
          </button>
          <Link
            to="/login"
            className="bg-none px-8 py-2 rounded-full text-lg font-semibold border-2 border-[#7ed956]/20 transition-all duration-200 ease-out
            hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] text-[#47f375] hidden md:block"
          >
            Login
          </Link>
          <button className="block md:hidden">
            <Menu className="w-9 text-[#47f375]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
