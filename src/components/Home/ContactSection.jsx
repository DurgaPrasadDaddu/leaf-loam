// // "use client";

// // import { Phone, Mail, MapPin } from "lucide-react";

// // export default function ContactSection() {
// //   return (
// //     <section className="bg-white py-10 px-6 text-black">

// //       {/* TOP HEADING AREA */}
// //       <div className="max-w-4xl mx-auto text-center mb-16">
// //         <h2 className="text-4xl md:text-5xl font-bold mb-6">
// //           Contact Us
// //         </h2>

// //         <p className="text-lg md:text-xl text-yellow-300 italic leading-relaxed">
// //           “Every landscape begins with a conversation.
// //           Let’s design a space where nature and architecture grow together.”
// //         </p>
// //       </div>

// //       {/* CONTACT CARD */}
// //       <div className="max-w-6xl mx-auto bg-[#F4F1EA] rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">

// //         {/* LEFT SIDE - CONTACT INFO */}
// //         <div className="p-10 md:p-14 bg-[rgb(221,224,23)] text-[#3fd11a]">
// //           <h3 className="text-2xl font-semibold mb-4">
// //             Let’s Get In Touch
// //           </h3>

// //           <p className="text-[#6B4F3A] mb-8">
// //             We’re available for consultations, collaborations,
// //             and transforming your outdoor spaces into living landscapes.
// //           </p>

// //           <div className="space-y-6">

// //             <div className="flex items-start gap-4">
// //               <Phone className="text-[#7C9A6D]" />
// //               <div>
// //                 <p className="font-medium">Phone</p>
// //                 <p className="text-[#6B4F3A] text-sm">
// //                   +91 9642482728
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <Mail className="text-[#7C9A6D]" />
// //               <div>
// //                 <p className="font-medium">Email</p>
// //                 <p className="text-[#6B4F3A] text-sm">
// //                   leafloam@gmail.com
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex items-start gap-4">
// //               <MapPin className="text-[#7C9A6D]" />
// //               <div>
// //                 <p className="font-medium">Address</p>
// //                 <p className="text-[#6B4F3A] text-sm">
// //                   Vishnavi Oasis, Flat No: 408, Block C<br />
// //                   Kismatpur Road, Hyderabad – 500086
// //                 </p>
// //               </div>
// //             </div>

// //           </div>
// //         </div>

// //         {/* RIGHT SIDE - FORM */}
// //         <div className="bg-[#7C9A6D] p-10 md:p-14 text-black">

// //           <form className="space-y-6">

// //             {/* Full Name + Mobile */}
// //             <div className="grid md:grid-cols-2 gap-6">
// //               <input
// //                 type="text"
// //                 placeholder="Full Name"
// //                 className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
// //               />

// //               <input
// //                 type="tel"
// //                 placeholder="Mobile Number"
// //                 className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
// //               />
// //             </div>

// //             {/* Email */}
// //             <input
// //               type="email"
// //               placeholder="Email"
// //               className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
// //             />

// //             {/* Landscaping For Dropdown */}
// //             <select
// //               className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B] text-black appearance-none cursor-pointer"
// //               defaultValue=""
// //             >
// //               <option value="" disabled className="bg-[#1B3A2E] text-[#FFCE1B]">
// //                 Landscaping For
// //               </option>

// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Commercial
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Farm House
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Industries
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Public Spaces
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Resorts
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Real Estates
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Residences
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Roof Garden
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Indoor Planting
// //               </option>
// //               <option className="bg-[#1B3A2E] text-black hover:text-[#FFCE1B]">
// //                 Others
// //               </option>

// //             </select>

// //             {/* Message */}
// //             <textarea
// //               placeholder="Message"
// //               rows="4"
// //               className="w-full bg-transparent border border-white/40 rounded-xl px-4 py-3 focus:outline-none focus:border-[#FFCE1B]"
// //             ></textarea>

// //             {/* Submit Button */}
// //             <button
// //               type="submit"
// //               className="w-full bg-[#eee23f] hover:bg-[#FFCE1B] text-[#1B3A2E] font-semibold py-3 rounded-full transition duration-300"
// //             >
// //               Send Message →
// //             </button>

// //           </form>

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { Phone, Mail, MapPin } from "lucide-react";
// import Image from "next/image";

// export default function ContactSection() {
//   return (
//     <section className="relative py-24 px-6 md:px-16 bg-[#F5F3EE]">

//       {/* Subtle Background Texture */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <Image
//           src="/Images/nature2.jpeg"
//           alt="Background"
//           fill
//           className="object-cover"
//         />
//       </div>

//       <div className="relative max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F3D2B] tracking-tight">
//             Let’s Design Your Green Story
//           </h2>

//           <p className="mt-6 text-lg text-[#5C5C5C] max-w-2xl mx-auto leading-relaxed">
//             Every exceptional landscape begins with a thoughtful conversation.
//             Share your vision with us, and let’s create an outdoor space
//             that blends elegance, sustainability, and tranquility.
//           </p>
//         </div>

//         {/* Main Card */}
//         <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden grid md:grid-cols-2">

//           {/* LEFT - Contact Info */}
//           <div className="p-12 md:p-16 bg-gradient-to-br from-[#1F3D2B] to-[#2E5B3F] text-white relative">

//             <h3 className="text-2xl font-semibold mb-6">
//               Contact Information
//             </h3>

//             <p className="text-white/80 mb-12 leading-relaxed">
//               Whether you’re planning a serene retreat, a modern terrace,
//               or a corporate landscape transformation — we’re here to guide you.
//             </p>

//             <div className="space-y-10">

//               <div className="flex items-start gap-4">
//                 <Phone className="w-5 h-5 text-[#C6A75E]" />
//                 <div>
//                   <p className="text-sm uppercase tracking-wider text-white/60">
//                     Phone
//                   </p>
//                   <p className="text-lg font-medium">
//                     +91 9642482728
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <Mail className="w-5 h-5 text-[#C6A75E]" />
//                 <div>
//                   <p className="text-sm uppercase tracking-wider text-white/60">
//                     Email
//                   </p>
//                   <p className="text-lg font-medium">
//                     leafloam@gmail.com
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-4">
//                 <MapPin className="w-5 h-5 text-[#C6A75E]" />
//                 <div>
//                   <p className="text-sm uppercase tracking-wider text-white/60">
//                     Address
//                   </p>
//                   <p className="text-lg font-medium leading-relaxed">
//                     Vishnavi Oasis, Flat No: 408, Block C<br />
//                     Kismatpur Road, Hyderabad – 500086
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* RIGHT - Form */}
//           <div className="p-12 md:p-16 bg-white">

//             <form className="space-y-8">

//               {/* Name + Mobile */}
//               <div className="grid md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="w-full border-b border-gray-300 focus:border-[#1F3D2B] focus:outline-none py-3 bg-transparent"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Mobile Number"
//                   className="w-full border-b border-gray-300 focus:border-[#1F3D2B] focus:outline-none py-3 bg-transparent"
//                 />
//               </div>

//               {/* Email */}
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full border-b border-gray-300 focus:border-[#1F3D2B] focus:outline-none py-3 bg-transparent"
//               />

//               {/* Dropdown */}
//               <select
//                 defaultValue=""
//                 className="w-full border-b border-gray-300 focus:border-[#1F3D2B] focus:outline-none py-3 bg-transparent appearance-none cursor-pointer"
//               >
//                 <option value="" disabled>
//                   Landscaping For
//                 </option>
//                 <option>Commercial</option>
//                 <option>Farm House</option>
//                 <option>Industries</option>
//                 <option>Public Spaces</option>
//                 <option>Resorts</option>
//                 <option>Real Estates</option>
//                 <option>Residences</option>
//                 <option>Roof Garden</option>
//                 <option>Indoor Planting</option>
//                 <option>Others</option>
//               </select>

//               {/* Message */}
//               <textarea
//                 rows="4"
//                 placeholder="Tell us about your project..."
//                 className="w-full border-b border-gray-300 focus:border-[#1F3D2B] focus:outline-none py-3 bg-transparent resize-none"
//               ></textarea>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="mt-6 bg-[#1F3D2B] hover:bg-[#163021] text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 tracking-wide shadow-md hover:shadow-xl"
//               >
//                 SEND MESSAGE →
//               </button>

//             </form>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-14 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1F3D2B] tracking-tight">
            Start Your Landscape Journey
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let’s shape your outdoor space into a timeless green retreat. Share
            your vision and we’ll transform it into a living experience.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-3">
                Contact Details
              </h3>
              <div className="w-14 h-1 bg-[#1F3D2B] rounded-full"></div>
            </div>

            <div className="space-y-10 text-gray-700">
              <div className="flex items-start gap-5">
                <Phone className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Phone
                  </p>
                  <p className="text-lg font-medium">+91 9642482728</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Mail className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Email
                  </p>
                  <p className="text-lg font-medium">leafloam@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-5">
                <MapPin className="text-[#1F3D2B]" />
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    Address
                  </p>
                  <p className="text-lg font-medium leading-relaxed">
                    Vishnavi Oasis, Flat No: 408, Block C<br />
                    Kismatpur Road, Hyderabad – 500086
                  </p>
                </div>
              </div> */}
              <div className="relative group">
                {/* Location Row */}
                <div className="flex items-start gap-5 cursor-pointer">
                  <MapPin className="text-[#1F3D2B]" />
                  <div>
                    <p className="text-sm uppercase tracking-wider text-gray-400">
                      Address
                    </p>
                    <p className="text-lg font-medium leading-relaxed text-gray-800">
                      Vishnavi Oasis, Flat No: 408, Block C<br />
                      Kismatpur Road, Hyderabad – 500086
                    </p>
                  </div>
                </div>

                {/* Google Map Popup */}
                <div
                  className="
                    absolute top-full left-0 mt-6
                    w-[450px] h-[220px]
                    rounded-2xl overflow-hidden
                    shadow-2xl border border-gray-100
                    opacity-0 translate-y-4
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    transition-all duration-500
                    bg-white z-50
                "
                >
                  <iframe
                    src="https://www.google.com/maps?q=Kismatpur+Road+Hyderabad&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM FORM CARD */}
          <div className="relative">
            {/* Decorative Accent */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-[#1F3D2B]/10 rounded-3xl"></div>

            <div className="relative bg-[#b1eb77] rounded-3xl p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <h3 className="text-2xl font-semibold text-[#1F3D2B] mb-8">
                Request a Consultation
              </h3>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                  />

                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition"
                />

                <select
                  defaultValue=""
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 transition cursor-pointer"
                >
                  <option value="" disabled>
                    Landscaping For
                  </option>
                  <option>Commercial</option>
                  <option>Farm House</option>
                  <option>Industries</option>
                  <option>Public Spaces</option>
                  <option>Resorts</option>
                  <option>Real Estates</option>
                  <option>Residences</option>
                  <option>Roof Garden</option>
                  <option>Indoor Planting</option>
                  <option>Others</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-4 focus:outline-none focus:border-[#1F3D2B] focus:ring-1 focus:ring-[#1F3D2B]/30 resize-none transition"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#1F3D2B] hover:bg-[#163021] text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl tracking-wide"
                >
                  SEND MESSAGE →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
