"use client";

import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12 lg:px-20">

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">

        {/* ================= LEFT SIDE ================= */}
        
        <div className="lg:w-[35%] space-y-8">
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl font-semibold tracking-wide uppercase text-green-500">
                About Us
              </span>
            </div>
            <div>
            <p className="text-black mb-6 leading-relaxed">
              At Leaf & Loam, we believe landscapes are more than decorative surroundings. <br />
              They are living ecosystems — extensions of architecture, emotion, and human experience. <br />
              Headquartered in Hyderabad and executing projects across India, we specialize in full-scale landscape design, planning, and development for residential, commercial, industrial, and institutional spaces.
            </p>

            <Link
              href="/about"
              className="inline-flex w-fit bg-green-500 text-black px-6 py-3 rounded-full font-medium  items-center gap-2 hover:scale-105 transition duration-300"
            >
              More abou us <span>↗</span>
            </Link>
          </div>
          </div>


        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:w-[60%] text-left">

          <h1
            className="
              font-black
              leading-[0.85]
              tracking-[-0.02em]
              text-3xl sm:text-4xl md:text-5xl lg:text-[70px] xl:text-[90px]
            "
          >

            <span className="block text-black">
              DESIGNING
            </span>

            {/* IMAGE TEXT */}
            <span className="
              block
              bg-[url('/Images/nature2.jpeg')]
              bg-cover
              bg-center
              bg-clip-text
              text-transparent
            ">
              LANDSCAPES
            </span>

            <span className="block text-black">
              THAT LIVE
            </span>

            {/* IMAGE TEXT */}
            <span className="
              block
              bg-[url('/Images/nature2.jpeg')]
              bg-cover
              bg-center
              bg-clip-text
              text-transparent
            ">
              AND GROW
            </span>

          </h1>

        </div>

      </div>

    </section>
  );
}
