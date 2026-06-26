import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="px-6 py-24">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="relative overflow-hidden rounded-[40px] border border-[#47f375]/20 bg-linear-to-br from-neutral-950 via-black to-neutral-950 p-8 md:p-16">
          <div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#47f375]/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#47f375]/10 blur-[100px]" />

          <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#47f375_1px,transparent_1px),linear-gradient(to_bottom,#47f375_1px,transparent_1px)] bg-size-[60px_60px]" />

          <div className="relative z-10 text-center">
            <motion.div
              className="max-w-7xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#47f375]/20 bg-[#47f375]/5 px-4 py-2 text-sm text-[#47f375]"
            >
              <ShieldCheck size={16} />
              Trusted Security Platform
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-8 text-4xl font-bold text-white md:text-6xl leading-tight"
            >
              Stop Reusing Passwords.
              <br />
              <span className="bg-linear-to-r from-[#47f375] to-[#8CFFAB] bg-clip-text text-transparent">
                Start Protecting Them.
              </span>
            </motion.h2>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400"
            >
              Store, manage, and secure all your passwords with military-grade
              encryption. Access your vault anywhere, anytime.
            </motion.p>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/signup"
                className="group flex items-center gap-2 rounded-2xl bg-[#47f375] px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(71,243,117,0.45)]"
              >
                Get Started Free
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4"
            >
              {[
                ["256-bit", "AES Encryption"],
                ["99.99%", "Uptime"],
                ["10K+", "Active Users"],
                ["24/7", "Secure Access"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-neutral-800 bg-white/2 p-5 backdrop-blur-sm transition-all duration-300 hover:border-[#47f375]/30 hover:bg-[#47f375]/5"
                >
                  <h3 className="text-2xl font-bold text-[#47f375]">{value}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
