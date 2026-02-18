"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-10 px-6 text-black">

      {/* TOP HEADING AREA */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-lg md:text-xl text-yellow-300 italic leading-relaxed">
          “Every landscape begins with a conversation.  
          Let’s design a space where nature and architecture grow together.”
        </p>
      </div>

      {/* CONTACT CARD */}
      <div className="max-w-6xl mx-auto bg-[#F4F1EA] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="p-10 md:p-14 bg-[rgb(221,224,23)] text-[#3fd11a]">
          <h3 className="text-2xl font-semibold mb-4">
            Let’s Get In Touch
          </h3>

          <p className="text-[#6B4F3A] mb-8">
            We’re available for consultations, collaborations,
            and transforming your outdoor spaces into living landscapes.
          </p>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <Phone className="text-[#7C9A6D]" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-[#6B4F3A] text-sm">
                  +91 9642482728
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#7C9A6D]" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-[#6B4F3A] text-sm">
                  leafloam@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#7C9A6D]" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-[#6B4F3A] text-sm">
                  Vishnavi Oasis, Flat No: 408, Block C<br />
                  Kismatpur Road, Hyderabad – 500086
                </p>
              </div>
            </div>

          </div>
        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="bg-[#7C9A6D] p-10 md:p-14 text-black">

          <form className="space-y-6">

            {/* Full Name + Mobile */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
            />

            {/* Landscaping For Dropdown */}
            <select
              className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B] text-black appearance-none cursor-pointer"
              defaultValue=""
            >
              <option value="" disabled className="bg-[#1B3A2E] text-[#FFCE1B]">
                Landscaping For
              </option>

              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Commercial
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Farm House
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Industries
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Public Spaces
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Resorts
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Real Estates
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Residences
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Roof Garden
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Indoor Planting
              </option>
              <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
                Others
              </option>

            </select>

            {/* Message */}
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#eee23f] hover:bg-[#FFCE1B] text-[#1B3A2E] font-semibold py-3 rounded-full transition duration-300"
            >
              Send Message →
            </button>

          </form>

        </div>


      </div>
    </section>
  );
}
