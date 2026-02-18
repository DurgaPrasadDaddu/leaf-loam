'use client';

import React, { useState } from 'react';
import { Star, Leaf, Instagram, Youtube, Twitter, Facebook, Menu, X, ArrowRight } from 'lucide-react';

export default function Others() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ratings = [
    { label: 'Client Satisfaction', rating: 9, total: 10, percentage: '90%' },
    { label: 'Eco Project', rating: 7, total: 10, percentage: '300+' },
    { label: 'Nature Awards', rating: 6, total: 10, percentage: '15+' }
  ];

  const services = [
    { 
      title: 'Plant Designs', 
      description: 'Tailored layouts to fit your home\'s rhythm.',
      tag: 'EXPLORE',
      gradient: 'from-gray-900/60 to-gray-900/90'
    },
    { 
      title: 'Plant Care Plans', 
      description: 'Personalized routine for lasting growth.',
      tag: 'EXPLORE',
      gradient: 'from-orange-900/60 to-gray-900/90'
    },
    { 
      title: 'Outdoor Harmony', 
      description: 'Open spaces into nature-balanced environments.',
      tag: 'EXPLORE',
      gradient: 'from-green-900/60 to-gray-900/90'
    },
    { 
      title: 'Decor & Accessories', 
      description: 'Aesthetic add-ons to elevate every corner.',
      tag: 'EXPLORE',
      gradient: 'from-teal-900/60 to-gray-900/90'
    }
  ];

  const testimonials = [
    {
      name: 'Gopal Votto',
      role: 'Chief Advisor',
      rating: 5,
      text: '"They transformed our backyard into a calm, living retreat. Every detail, from the pathways to the plants, feels alive and intentional."'
    },
    {
      name: 'Asthenia Baez',
      role: 'Forest Specialist',
      rating: 5,
      text: '"Our space feels completely reborn. The design brought light, texture, and calm, it\'s like nature finally moved in with us."'
    }
  ];

  const StarRating = ({ rating, max = 10 }) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(max)].map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < rating ? 'bg-green-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const TestimonialStars = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} size={20} className="fill-green-400 text-green-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6">
        <div className="max-w-7xl mx-auto">
          {/* Glass navigation background */}
          <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3 border border-white/20 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-white text-xl md:text-2xl font-bold">Veondora</div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                <a href="#" className="text-white/90 hover:text-white transition text-sm">Home</a>
                <a href="#" className="text-white/90 hover:text-white transition text-sm">Gallery</a>
                <a href="#" className="text-white/90 hover:text-white transition text-sm">Beauty</a>
                <a href="#" className="text-white/90 hover:text-white transition text-sm">Products</a>
                <a href="#" className="text-white/90 hover:text-white transition text-sm">Contact</a>
                <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/30 transition text-sm whitespace-nowrap">
                  START YOUR GARDEN
                </button>
                <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition text-sm whitespace-nowrap">
                  VIEW COLLECTION
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 p-6">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-white hover:text-green-300 transition">Home</a>
                <a href="#" className="text-white hover:text-green-300 transition">Gallery</a>
                <a href="#" className="text-white hover:text-green-300 transition">Beauty</a>
                <a href="#" className="text-white hover:text-green-300 transition">Products</a>
                <a href="#" className="text-white hover:text-green-300 transition">Contact</a>
                <button className="bg-white/20 border border-white/30 text-white px-4 py-2 rounded-full hover:bg-white/30 transition">
                  START YOUR GARDEN
                </button>
                <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition">
                  VIEW COLLECTION
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-800 via-green-900/30 to-yellow-900/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 flex items-center px-4 md:px-8">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4 md:mb-6">
                GROW<br />BEAUTIFULLY
              </h1>
              <p className="text-white/90 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Create a home that breathes with life. At Verdora, we blend design, greenery, and care to help you build your perfect indoor or outdoor garden, one that thrives with beauty and purpose.
              </p>
              <div className="flex gap-3 md:gap-4">
                <div className="backdrop-blur-md bg-white/20 p-2 md:p-3 rounded-full border border-white/30">
                  <Twitter className="text-white hover:text-green-300 cursor-pointer" size={18} />
                </div>
                <div className="backdrop-blur-md bg-white/20 p-2 md:p-3 rounded-full border border-white/30">
                  <Facebook className="text-white hover:text-green-300 cursor-pointer" size={18} />
                </div>
                <div className="backdrop-blur-md bg-white/20 p-2 md:p-3 rounded-full border border-white/30">
                  <svg className="w-[18px] h-[18px] text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <div className="backdrop-blur-md bg-white/20 p-2 md:p-3 rounded-full border border-white/30">
                  <Instagram className="text-white hover:text-green-300 cursor-pointer" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tags Section */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
            <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs md:text-sm">GROW</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs md:text-sm">BREATHE</span>
            <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs md:text-sm">BLOOM</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs md:text-sm">THRIVE</span>
            <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs md:text-sm">BALANCE</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-xs md:text-sm">WILD</span>
            <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs md:text-sm">ROOTS</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                Discover how design, care, and innovation come together to make every Verdora project thrive.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                CREATE A<br />
                <span className="text-green-600">HOME THAT</span><br />
                BREATHES IN<br />
                <span className="text-green-800">NATURE</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            <div className="bg-white p-6 md:p-8 rounded-3xl">
              <h3 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">1200+</h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">Plants nurtured</p>
              {ratings.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-3 mb-1">
                    <StarRating rating={item.rating} max={item.total} />
                    <span className="text-xs md:text-sm font-semibold text-gray-800">{item.percentage}</span>
                  </div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <Leaf className="text-green-600 mx-auto mb-4" size={60} />
                <p className="text-gray-700 text-sm md:text-base max-w-xs">
                  Designers, <span className="text-gray-500">horticulturists,</span> and <span className="text-gray-500">sustainability</span> experts working hand in hand.
                </p>
              </div>
            </div>
            
            <div className="bg-cover bg-center rounded-3xl overflow-hidden h-64 md:h-80 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/80"></div>
              <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-cover bg-center"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm md:text-base font-semibold mb-2">Sustainable Plants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-12 leading-tight">
            GET TO KNOW<br />
            WHAT WE CULTIVATE<br />
            AND MORE
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={index} className="relative rounded-3xl overflow-hidden h-80 md:h-96 group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient}`}></div>
                <div className="absolute inset-0 bg-[url('/api/placeholder/400/600')] bg-cover bg-center group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-xs md:text-sm mb-4 opacity-90">{service.description}</p>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                    {service.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-2">
            From serene gardens to lush green landscapes, every project we design celebrates balance, life, and renewal.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
            Our approach blends design and ecology, turning outdoor spaces into living works of art.
          </p>
          <button className="backdrop-blur-md bg-white border-2 border-gray-800 text-gray-800 px-6 md:px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition inline-flex items-center gap-2 text-sm md:text-base">
            MORE DETAILS <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-3xl overflow-hidden relative h-80">
              <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Thesis Report</h3>
                <p className="text-green-300 text-sm mb-3">Prepared by Abdul Madraz, Plant Organizer & Researcher</p>
                <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <ArrowRight className="text-white" size={16} />
                </button>
              </div>
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-green-900 rounded-3xl p-6 md:p-8 text-white flex flex-col justify-between">
                <div>
                  <TestimonialStars rating={testimonial.rating} />
                  <p className="text-sm md:text-base my-6 leading-relaxed">{testimonial.text}</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"></div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-green-300">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Naturally Section */}
      <section className="relative h-screen bg-gradient-to-br from-teal-900 via-green-900 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-white text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-center">
            LIVE<br />
            NATURALLY
          </h2>
        </div>
        <div className="absolute bottom-8 md:bottom-16 left-4 md:left-8 text-white">
          <p className="text-xs md:text-sm">Sustainability</p>
        </div>
        <div className="absolute top-8 md:top-16 right-4 md:right-8">
          <button className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-4 md:px-6 py-2 rounded-full hover:bg-white/30 transition inline-flex items-center gap-2 text-sm md:text-base">
            VIEW VILLA <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-br from-green-950 to-green-900 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="max-w-2xl">
              <div className="inline-block backdrop-blur-md bg-white/10 px-4 py-2 rounded-full text-white/80 text-xs md:text-sm mb-6 border border-white/20">
                Newsletter
              </div>
              <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Subscribe to our newsletter to get the <span className="text-green-300">latest updates</span><br className="hidden md:block" />
                on our new plants and gardens.
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="flex-1 px-6 py-3 md:py-4 rounded-full bg-transparent border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-white/60 backdrop-blur-sm"
                />
                <button className="bg-green-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-green-500 transition whitespace-nowrap inline-flex items-center justify-center gap-2 font-semibold">
                  SUBSCRIBE <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-950 text-white py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400 order-2 md:order-1">All rights reserved © 2025</p>
            <div className="text-xl md:text-2xl font-bold order-1 md:order-2">Veondora</div>
            <div className="flex gap-6 md:gap-8 text-xs md:text-sm order-3">
              <a href="#" className="hover:text-green-300 transition">FACEBOOK</a>
              <a href="#" className="hover:text-green-300 transition">LINKEDIN</a>
              <a href="#" className="hover:text-green-300 transition">INSTAGRAM</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
