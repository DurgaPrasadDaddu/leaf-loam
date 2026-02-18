"use client";

import Image from "next/image";
import { Linkedin, Facebook, Instagram, Globe } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center p-0 sm:p-2">
      {/* Rounded Hero Container */}
      <div
        className="
        relative w-full 
        h-[100vh] sm:h-[95vh] lg:h-[95vh]
        rounded-none sm:rounded-3xl 
        overflow-hidden
      "
      >
        {/* Background Image */}
        <Image
          src="/Images/nature2.jpeg"
          alt="Garden Background"
          fill
          priority
          className="object-center"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />

        {/* Content */}
        <div
          className="
          relative z-10 h-full 
          flex flex-col justify-end 
          px-6 sm:px-8 md:px-14 lg:px-20
          pb-28 sm:pb-32 lg:pb-36
        "
        >
          <h1
            className="
            text-white font-extrabold leading-[0.9] tracking-tight
            text-2xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-[90px]
          "
          >
            WHERE LIFE <br /> MEETS GREEN
          </h1>

          <p
            className="
            mt-5 sm:mt-6
            max-w-full sm:max-w-xl
            text-white/80
            text-sm sm:text-base lg:text-lg
          "
          >
            We craft spaces filled with light, texture, and living beauty —
            gardens that nurture peace, joy, and connection.
          </p>
        </div>

        {/* Attached Bottom-Left Social Container */}
        <div
          className="
          absolute bottom-0 left-0 
          bg-white 
          px-4 sm:px-6 
          py-3 sm:py-4 
          rounded-tr-3xl
        "
        >
          <div
            className="
              flex items-center gap-3 sm:gap-4
              absolute bottom-0 left-0 
              bg-white 
              px-4 sm:px-6 
              py-3 sm:py-4 
              rounded-tr-3xl
              z-20
            "
          >
            {[
              { Icon: Linkedin, href: "https://linkedin.com" },
              { Icon: Facebook, href: "https://facebook.com" },
              { Icon: Globe, href: "https://yourwebsite.com" },
              { Icon: Instagram, href: "https://instagram.com" },
            ].map(({ Icon, href }, index) => (
              <a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-8 h-8 sm:w-9 sm:h-9
                  flex items-center justify-center
                  rounded-full border border-gray-300
                  text-gray-600
                  transition-all duration-300
                  hover:border-green-500
                  hover:text-green-600
                  hover:bg-green-100
                "
              >
                <Icon size={14} className="sm:hidden" />
                <Icon size={16} className="hidden sm:block" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
