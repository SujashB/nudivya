"use client";
import React from "react";

const chakraRows = [
  { emoji: "🟣", label: "Sahasrara (Crown)", desc: "Aligns with your purpose and greater systems of meaning" },
  { emoji: "🧿", label: "Ajna (Third Eye)", desc: "Supports deep thinking and contextual awareness" },
  { emoji: "🗣", label: "Vishuddha (Throat)", desc: "Helps express thoughts naturally and precisely" },
  { emoji: "💚", label: "Anahata (Heart)", desc: "Responds with empathy, not just logic" },
  { emoji: "🔆", label: "Manipura (Solar Plexus)", desc: "Encourages autonomy, confidence, and ethical clarity" },
  { emoji: "🧡", label: "Svadhisthana (Sacral)", desc: "Unlocks curiosity, design thinking, and joyful exploration" },
  { emoji: "🔴", label: "Muladhara (Root)", desc: "Adapts to your device, context, and energy levels" },
];

const Explanation = () => (
  <section className="w-[90vw] max-w-5xl flex flex-col items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl px-6 py-8 mb-4 transition-all duration-500 mt-8 border-2 neon-glass" style={{ fontFamily: 'Merriweather, serif' }}>
    <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center drop-shadow ancient-futuristic-title">The Ancient Wisdom Behind Nuvidya</h1>
    <p className="text-base md:text-lg text-black text-center mb-6 max-w-2xl">
      Chakras, drawn from ancient Vedic wisdom, have long fascinated me for how they represent the flow of energy in living systems. I also found inspiration in the Greek concept of Logos, which embodies reason, structure, and meaning. By synthesizing these two ancient frameworks, I believe we can unlock a new paradigm for designing and aligning intelligent systems.
    </p>
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl w-full relative">
      <div className="relative flex flex-col items-center justify-center">
        <img 
          src="/images/Chakra_Explanation.png" 
          alt="Chakra System" 
          className="w-56 md:w-64 rounded-xl shadow-lg bg-white/10 backdrop-blur-md -mt-8" 
        />
        <img 
          src="/images/greek_logos.png" 
          alt="Greek Logos" 
          className="w-40 md:w-48 rounded-xl shadow-lg bg-white/10 backdrop-blur-md mt-12" 
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center mt-6 md:mt-0 gap-2">
        {chakraRows.map((chakra) => (
          <div key={chakra.label} className="flex items-center gap-3 w-full bg-white/10 backdrop-blur-md rounded-xl p-2 shadow">
            <span className="text-xl md:text-2xl" style={{ minWidth: 32 }}>{chakra.emoji}</span>
            <span className="font-bold text-black text-sm md:text-base" style={{ minWidth: 100 }}>{chakra.label}</span>
            <span className="text-black text-sm md:text-base">{chakra.desc}</span>
          </div>
        ))}
        <div className="w-full mt-4">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 shadow text-black text-center text-base md:text-lg italic">
            <strong>Logos</strong> is the Greek principle of structure, reason, and meaning—the foundation for true understanding and alignment. In Nuvidya, it guides how intelligence is organized, making every response more coherent, transparent, and meaningful.
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
      .neon-glass {
        box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
      }
    `}</style>
  </section>
);

export default Explanation; 