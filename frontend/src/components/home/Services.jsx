import React from "react";
import { LockKeyhole, ShieldCheck, KeyRound } from "lucide-react";

const services = [
  {
    icon: LockKeyhole,
    title: "AES-256 Encryption",
    description:
      "Your passwords are protected with military-grade AES-256 encryption, ensuring maximum security and privacy.",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Storage",
    description:
      "Store sensitive credentials safely with advanced protection layers and secure cloud synchronization.",
  },
  {
    icon: KeyRound,
    title: "Password Management",
    description:
      "Generate, organize, and access strong passwords across all your devices with ease.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-1.5 rounded-full border border-[#47f375]/20 bg-[#47f375]/10 text-[#47f375] text-sm font-medium">
            Security Features
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Everything You Need To Keep
            <span className="text-[#47f375]"> Passwords Safe</span>
          </h2>

          <p className="mt-5 text-neutral-400 text-lg">
            BlackVault provides enterprise-grade security features
            designed to protect your credentials while keeping access
            simple and seamless.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group relative overflow-hidden rounded-3xl
                  border border-neutral-800
                  bg-gradient-to-b from-neutral-900 to-black
                  p-8
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#47f375]/30
                  hover:shadow-[0_0_40px_rgba(71,243,117,0.15)]
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-radial-[at_top] from-[#47f375]/10 via-transparent to-transparent" />

                <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center border border-[#47f375]/20 bg-[#47f375]/10 mb-6">
                  <Icon className="w-7 h-7 text-[#47f375]" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#47f375] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;