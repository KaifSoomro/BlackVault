import React from "react";
import { ShieldCheck, Lock, Database, LaptopMinimal } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    icon: <Lock size={28} />,
    title: "Save Passwords",
    desc: "Store all your passwords securely in one encrypted vault.",
  },
  {
    id: "02",
    icon: <ShieldCheck size={28} />,
    title: "AES-256 Encryption",
    desc: "Your data is encrypted before it ever leaves your device.",
  },
  {
    id: "03",
    icon: <Database size={28} />,
    title: "Secure Cloud Backup",
    desc: "Access your vault anytime with encrypted cloud sync.",
  },
  {
    id: "04",
    icon: <LaptopMinimal size={28} />,
    title: "Access Anywhere",
    desc: "Use BlackVault on desktop, tablet, or mobile devices.",
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-2 rounded-full border border-[#47f375]/20 bg-[#47f375]/5 text-[#47f375] text-sm font-medium"
          >
            HOW IT WORKS
          </motion.span>

          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-6 text-4xl md:text-5xl font-bold text-white"
          >
            Secure Your Passwords
            <span className="block bg-linear-to-r from-[#47f375] to-[#7CFF9B] bg-clip-text text-transparent">
              In 4 Simple Steps
            </span>
          </motion.h2>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto mt-5 text-neutral-400"
          >
            BlackVault keeps your credentials protected with military-grade
            encryption and seamless cloud access.
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 relative"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-linear-to-b from-neutral-900 to-black p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#47f375]/40 hover:shadow-[0_0_40px_rgba(71,243,117,0.18)]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,#47f37520,transparent_70%)]" />

              <div className="absolute top-4 right-4 text-[#47f375]/20 text-5xl font-bold">
                {step.id}
              </div>

              <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-[#47f375]/10 border border-[#47f375]/20 text-[#47f375] mb-6 group-hover:scale-110 transition duration-500">
                {step.icon}
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="relative z-10 text-neutral-400 leading-relaxed">
                {step.desc}
              </p>

              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-8 w-8 border-t border-dashed border-[#47f375]/30"></div>
              )}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mt-16 rounded-3xl border border-neutral-800 bg-linear-to-r from-neutral-950 to-neutral-900 p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-[#47f375] text-2xl font-bold">256-bit</h4>
              <p className="text-neutral-400 mt-2">
                AES military-grade encryption
              </p>
            </div>

            <div>
              <h4 className="text-[#47f375] text-2xl font-bold">Zero Trust</h4>
              <p className="text-neutral-400 mt-2">
                Nobody can access your vault except you
              </p>
            </div>

            <div>
              <h4 className="text-[#47f375] text-2xl font-bold">24/7 Access</h4>
              <p className="text-neutral-400 mt-2">
                Secure access from any device
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
