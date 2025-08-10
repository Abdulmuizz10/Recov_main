import React from "react";
import { Globe, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#020409] via-[#0a0f1c] to-[#111827] text-white py-20 overflow-hidden z-10">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-10 c-space">
        {/* Logo / Brand */}

        <div className="flex items-center justify-center gap-2">
          <img src={"/assets/R2.png"} alt="" className="w-12 h-10" />
          <h1 className="text-4xl font-extrabold text-cyan-400 drop-shadow tracking-wide">
            Recov
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm font-medium">
          {["Privacy Policy", "Terms of Service", "Contact Us", "About"].map(
            (item, index) => (
              <a
                key={index}
                href="#"
                className="hover:text-cyan-400 transition duration-300"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Social Icons (Lucide) */}
        <div className="flex justify-center gap-6 text-white/40 text-xl">
          <a
            href="#"
            className="hover:text-cyan-400 transition transform hover:scale-110"
            title="Website"
          >
            <Globe size={24} />
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition transform hover:scale-110"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition transform hover:scale-110"
            title="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="#"
            className="hover:text-blue-600 transition transform hover:scale-110"
            title="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/50 text-sm pt-4">
          &copy; {new Date().getFullYear()} Recov. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
