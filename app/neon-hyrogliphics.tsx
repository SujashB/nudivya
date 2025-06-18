'use client';
import React from "react";

// Example hyrogliphic symbols (can be replaced with SVGs or Unicode art)
const symbols = [
  "𓂀", "𓆣", "𓃰", "𓅓", "𓏏", "𓊹", "𓋹", "𓂻", "𓃭", "𓅱"
];

export default function NeonHyrogliphics() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 w-full h-full flex flex-wrap items-center justify-center opacity-30 select-none">
        {symbols.map((sym, i) => (
          <span
            key={i}
            className={
              `text-[5vw] md:text-[3vw] font-bold mx-8 my-8 animate-neon-glow text-blue-900 drop-shadow-[0_0_24px_rgba(30,64,175,0.9)]`
            }
            style={{
              animationDelay: `${i * 0.5}s`,
              filter: "blur(0.5px)"
            }}
          >
            {sym}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes neon-glow {
          0%, 100% { text-shadow: 0 0 24px #1e40af, 0 0 48px #2563eb; color: #1e40af; }
          50% { text-shadow: 0 0 48px #2563eb, 0 0 96px #1e40af; color: #2563eb; }
        }
        .animate-neon-glow {
          animation: neon-glow 2.8s infinite alternate;
        }
      `}</style>
    </div>
  );
} 