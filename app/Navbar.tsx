'use client';
import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Explanation", href: "#explanation" },
  { label: "Comparison", href: "#comparison" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Applications", href: "#applications" },
  { label: "Invite", href: "#invite" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
  <nav
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-lg neon-navbar-border"
    style={{
      fontFamily: 'Merriweather, serif',
      letterSpacing: '0.04em',
      boxShadow: '0 2px 16px 0 rgba(191, 167, 106, 0.12)',
      backgroundImage: 'url(/images/navbar_light_parchment.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-3">
          <img src="/images/navbar_icon.png" alt="Nuvidya Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-full shadow-md bg-[#f5ecd7]" style={{ boxShadow: '0 0 8px #bfa76a88' }} />
          <div className="text-lg md:text-2xl font-extrabold text-[#7c5c2b] tracking-widest drop-shadow ancient-futuristic-title">
          NUVIDYA
        </div>
      </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-4 items-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
              className="relative text-sm font-bold text-[#3a2a13] px-2 py-1 hover:text-[#7c5c2b] transition-colors duration-200"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {item.label}
          </a>
        ))}
        <a 
          href="/chakra-ai" 
          className="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-200"
        >
          Chakra AI
        </a>
      </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-[#3a2a13] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#3a2a13] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#3a2a13] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white/90 backdrop-blur-md border-t border-[#bfa76a]/20`}>
        <div className="flex flex-col py-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-6 py-3 text-sm font-bold text-[#3a2a13] hover:text-[#7c5c2b] hover:bg-[#f5ecd7]/30 transition-all duration-200"
              style={{ fontFamily: 'Merriweather, serif' }}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
    </div>

    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
      .neon-navbar-border {
        box-shadow:
          0 0 12px 2px #3ecfff,
          0 0 24px 4px #3ecfff66;
        border-bottom: none;
      }
    `}</style>
  </nav>
);
};

export default Navbar; 