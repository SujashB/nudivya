'use client';
import React from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Explanation", href: "#explanation" },
  { label: "Comparison", href: "#comparison" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Invite", href: "#invite" },
  { label: "Applications", href: "#applications" },
];

const Navbar = () => (
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
        <img src="/images/navbar_icon.png" alt="Nuvidya Logo" className="w-10 h-10 rounded-full shadow-md bg-[#f5ecd7]" style={{ boxShadow: '0 0 8px #bfa76a88' }} />
        <div className="text-2xl font-extrabold text-[#7c5c2b] tracking-widest drop-shadow ancient-futuristic-title">
          NUVIDYA
        </div>
      </div>
      <div className="flex gap-4 items-center">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative text-sm font-bold text-[#3a2a13] px-2 py-1"
            style={{ fontFamily: 'Merriweather, serif' }}
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
      @media (max-width: 768px) {
        nav > div {
          flex-direction: column;
          gap: 0.5rem;
        }
        .ancient-futuristic-title {
          font-size: 1.3rem;
        }
      }
    `}</style>
  </nav>
);

export default Navbar; 