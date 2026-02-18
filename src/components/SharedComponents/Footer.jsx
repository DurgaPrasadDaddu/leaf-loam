"use client";

import Link from "next/link";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full p-2 sm:p-2 bg-transparent">

      {/* CARD CONTAINER */}
      <div className="bg-[#1B3A2E] text-white rounded-3xl overflow-hidden shadow-lg">

        {/* MAIN GRID */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#1B3A2E]/95"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* LEFT SIDE */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-6 leading-snug">
                Safe, Fast & Reliable
                <br />
                Landscape Services
              </h3>

              <p className="text-[#FFCE1B] italic leading-relaxed text-sm sm:text-base">
                “Rooted in Nature. Built with Care.
                Designing landscapes that grow with time.”
              </p>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li><Link className="hover:text-[#FFCE1B] transition" href="/">Home</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/about">About Us</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/services">Services</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/projects">Projects</Link></li>
                <li><Link className="hover:text-[#FFCE1B] transition" href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>Landscape Design</li>
                <li>Tree & Shrub Care</li>
                <li>Vertical Gardens</li>
                <li>Rooftop Gardens</li>
                <li>Maintenance</li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <ul className="space-y-3 text-white/80 text-sm">
                <li>+91 9642482728</li>
                <li>leafloam@gmail.com</li>
                <li>Hyderabad, Telangana</li>
              </ul>

              <div className="flex gap-4 mt-6">
                {[Linkedin, Facebook, Instagram, Twitter].map((Icon, index) => (
                  <div
                    key={index}
                    className="bg-[#7C9A6D] p-2 rounded-full hover:bg-[#FFCE1B] hover:text-black transition duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 py-6 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-white/60 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Leaf & Loam Landscape Services.
              All Rights Reserved.
            </p>
            <p className="mt-3 md:mt-0">
              Built With Care | Powered By Nature
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
