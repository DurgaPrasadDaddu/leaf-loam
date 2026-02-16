"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/projects" },
    { name: "Beauty", href: "/services" },
    { name: "Products", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-7xl">

        {/* Main Glass Container */}
        <div className="flex items-center justify-between rounded-full border border-white/20 bg-white/10 px-8 py-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-semibold tracking-wide text-white"
          >
            Veondora
          </Link>

          {/* Center Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-lg">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white/90 transition hover:bg-white/20 hover:text-white"
              >
                {link.name}
              </Link>
            ))}

          </nav>

          {/* Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-105"
            >
              START YOUR GARDEN
            </Link>

            <Link
              href="/projects"
              className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/20"
            >
              VIEW COLLECTION
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className="mt-4 rounded-2xl border border-white/20 bg-black/80 p-6 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white text-lg"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-4 rounded-full bg-white px-6 py-3 text-center font-semibold text-black"
              >
                START YOUR GARDEN
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
