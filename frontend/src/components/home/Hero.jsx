import React from "react";
import Container from "../common/Container.jsx";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <section className="relative w-full min-h-[85vh] md:min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-125 h-125 bg-[#47f375]/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 flex-1 text-center md:text-left">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#47f375]/20 bg-[#47f375]/5 backdrop-blur-xl mb-6"
          >
            <ShieldCheck size={16} className="text-[#47f375]" />
            <span className="text-sm text-neutral-300">
              Military-Grade Encryption
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-20"
          >
            Secure Every
            <span className="block text-[#47f375]">Password.</span>
            Access Anywhere.
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="max-w-3xl mx-auto md:mx-0 mt-5 text-base md:text-xl lg:text-2xl text-neutral-400 leading-7 md:leading-9"
          >
            Store, manage, and protect your passwords in one encrypted vault.
            Access your credentials instantly across devices while keeping
            hackers and data breaches away from your digital life.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/signup"
              className="group px-6 py-3 rounded-full bg-[#47f375] text-black font-bold text-lg flex items-center justify-center gap-3 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(71,243,117,0.5)]"
            >
              Get Started
              <ArrowRight className="group-hover:-rotate-45 transition-all duration-300" />
            </Link>

            <Link
              to="/features"
              className="px-6 py-3 rounded-full border border-neutral-700 bg-neutral-900/40 backdrop-blur-sm text-white font-medium hover:bg-neutral-800 transition-all duration-300"
            >
              Explore Features
            </Link>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                256-bit
              </h3>
              <p className="text-neutral-500">AES Encryption</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                100%
              </h3>
              <p className="text-neutral-500">Secure Storage</p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Multi
              </h3>
              <p className="text-neutral-500">Device Access</p>
            </motion.div>
          </div>
        </div>

        <div className="flex-1 flex justify-center mt-30">
          <div>
            <motion.img
              src="/hero_2.png"
              alt="Password Vault"
              className="relative w-80 md:w-175"
              initial={{ opacity: 0, scale:0.7, y:20 }}
              animate={{ opacity: 1, scale:1, y:0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
