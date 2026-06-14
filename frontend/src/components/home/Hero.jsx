import React from "react";
import Container from "../common/Container.jsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <Container>
      <div className="w-full mt-27 md:mt-30 h-140 md:h-180 flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="md:text-start text-center mt-7 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
            Your Digital Vault for a <span className="text-[#47f375]">Safer</span> Internet.
          </h1>
          <p className="md:w-200 mt-3 md:mt-7 text-md md:text-2xl text-neutral-300 leading-6 md:leading-8">
            Take control of your digital security with a modern password manager
            that keeps all your credentials encrypted, organized, and instantly
            accessible whenever you need them.
          </p>
          <div className="mt-5 md:mt-8 flex items-center justify-center md:justify-start">
            <button
              to="/login"
              className="md:px-5 px-3 md:py-3 py-2 text-black rounded-full text-lg md:text-xl transition-all duration-200 ease-out bg-[#47f375] flex items-center gap-3 hover:shadow-[0_0_20px_rgba(126,217,86,0.5)] hover:scale-105 font-bold group"
            >
              <span>Get Started</span> <ArrowRight className="group-hover:-rotate-45 transition-all duration-200 ease-out"/>
            </button>
          </div>
        </div>
        <div className="mt-7 md:mt-0">
          <img src="./public/hero_2.png" alt="" className="w-75 md:w-200"/>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
