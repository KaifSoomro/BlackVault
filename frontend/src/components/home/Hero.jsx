import React from "react";
import Container from "../common/Container.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Container>
      <div className="w-full md:mt-30 h-160 md:h-180 relative flex items-center justify-center">
        <img
          src="/public/hero.png"
          alt=""
          className="w-full object-contain blur-sm md:blur-lg lg:blur-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-1"
        />

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Your Digital Vault for a{" "}
            <span className="text-[#7ed956] lg:text-[#071800]">Safer</span> Internet.
          </h1>
          <p className="md:w-200 mt-3 text-xl md:text-2xl mx-auto bg-linear-to-l from-neutral-100 leading-8
          via-neutral-300 to-neutral-100 bg-clip-text text-transparent">
            Take control of your digital security with a modern password manager
            that keeps all your credentials encrypted, organized, and instantly
            accessible whenever you need them.
          </p>
          <div className="mt-5 md:mt-10 flex items-center justify-center">
            <button
              to="/login"
              className="md:px-5 px-3 md:py-3 py-2 text-black rounded-full text-lg md:text-xl transition-all duration-200 ease-out bg-[#7ed956] flex items-center gap-3
            hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-105 font-bold group"
            >
              <span>Get Started</span> <ArrowRight className="group-hover:-rotate-45 transition-all duration-200 ease-out"/>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
