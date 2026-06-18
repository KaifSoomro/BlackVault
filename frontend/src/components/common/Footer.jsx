import { ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <Container>
        <div className="py-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#47f375]/10 border border-[#47f375]/20">
                  <img
                    src="./public/logo_2.png"
                    alt="logo_footer"
                    className="w-6 h-6 object-cover"
                  />
                </div>

                <h2 className="text-2xl font-bold text-white">BlackVault</h2>
              </div>

              <p className="mt-5 text-neutral-400 leading-relaxed max-w-sm">
                Securely store, manage, and access your passwords from anywhere
                with enterprise-grade protection and seamless synchronization.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-[#47f375] font-semibold mb-4">Product</h3>

              <ul className="space-y-3 text-neutral-400">
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Features</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Security</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Pricing</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Integrations</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-[#47f375] font-semibold mb-4">Company</h3>

              <ul className="space-y-3 text-neutral-400">
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">About</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Blog</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Careers</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[#47f375] font-semibold mb-4">Resources</h3>

              <ul className="space-y-3 text-neutral-400">
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Documentation</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Help Center</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li className="transition-all duration-200 ease-in-out hover:translate-x-2.5 hover:text-[#47f375]">
                  <Link to="/">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-5">
            <p className="text-sm text-neutral-500 text-center md:text-left">
              © 2026 BlackVault. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <FaGithub className="w-5 h-5 text-neutral-400" />
              </Link>

              <Link
                to="/"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <FaLinkedin className="w-5 h-5 text-neutral-400" />
              </Link>

              <Link
                to="/"
                className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 transition"
              >
                <FaFacebook className="w-5 h-5 text-neutral-400" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
