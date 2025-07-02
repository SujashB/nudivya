"use client";
import React, { useState, useEffect, useRef } from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const example = "Explain to me the meaning of this verse from the Bhagavad Gita: \"The peace of God is with them whose mind and soul are in harmony, who are free from desire and wrath, who know their own soul.\"";
const coreSteps = [
  {
    name: "Mularebus (M)",
    color: "#fc8181",
    symbol: "M",
    desc: "Checks device battery and network health."
  },
  {
    name: "Svathymos (V)",
    color: "#f6ad55",
    symbol: "V",
    desc: "Analyzes sentiment and intent in the question."
  },
  {
    name: "VākSopher (Λ)",
    color: "#f6e05e",
    symbol: "Λ",
    desc: "Translates the request into a knowledge query."
  },
  {
    name: "Anahsophia (A)",
    color: "#68d391",
    symbol: "A",
    desc: "Applies empathy and ethical filters."
  },
  {
    name: "VisuNoesis (Θ)",
    color: "#6fc3df",
    symbol: "Θ",
    desc: "Synthesizes insights from scripture and context."
  },
  {
    name: "SahaPhrónesis (Φ)",
    color: "#a084e8",
    symbol: "Φ",
    desc: "Distributes reasoning for peer review."
  },
  {
    name: "AjhaPhrónesis (Σ)",
    color: "#e2e8f0",
    symbol: "Σ",
    desc: "Logs the final, verifiable answer."
  },
];

const stepOutputs = [
  "Sensing: Your device and environment are ready for deep reflection.",
  "Feeling: The question carries a longing for inner peace and self-knowledge.",
  "Expressing: Translating your search into a quest for true harmony.",
  "Empathizing: Ensuring the response honors your journey and the wisdom of the text.",
  "Synthesizing: Weaving together insights from ancient scripture and lived experience.",
  "Aligning: Inviting the wisdom of the collective to refine and deepen the answer.",
  "Remembering: Recording this moment of understanding as part of a greater, evolving story."
];

export default function Demo() {
  const [stage, setStage] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay and loop
  useEffect(() => {
    if (stage === 7) {
      const timeout = setTimeout(() => setStage(0), 3000);
      return () => clearTimeout(timeout);
    }
    intervalRef.current = setTimeout(() => setStage(s => s + 1), 2200);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [stage]);

  // Layout constants
  const orbCount = coreSteps.length;
  const lineWidth = 420; // Desktop width

  return (
    <motion.div 
      className={`w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 ${merriweather.className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4">How Nuvidya Processes a Question</h1>
      <section id="demo" className={`w-full max-w-4xl xl:max-w-5xl min-h-[50vh] flex flex-col items-center justify-center p-4 md:p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border-2 neon-glass ${merriweather.className}`}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl bg-white/60 rounded-xl shadow px-3 md:px-4 py-3 mb-6 text-sm md:text-base text-[#1F456E] text-center font-medium">
            {example}
          </div>
          
          {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
          <div className="block md:hidden w-full mb-6">
            {/* Mobile vertical layout */}
            <div className="flex flex-col items-center space-y-3 w-full max-w-sm mx-auto">
              {coreSteps.map((core, idx) => (
                <div key={core.symbol} className={`flex items-center w-full p-3 rounded-lg transition-all duration-500 ${stage === idx ? 'bg-white/20 scale-[1.02]' : 'bg-white/5'}`}>
                  <div className="flex items-center justify-center mr-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg border-2 transition-all duration-500 ${stage === idx ? 'ring-2 ring-[#3ecfff] scale-110' : ''}`}
                      style={{
                        background: `radial-gradient(circle, ${core.color} 60%, #fff 100%)`,
                        borderColor: core.color,
                        boxShadow: `0 0 15px 3px ${core.color}88, 0 0 25px 6px #3ecfff44`,
                        color: '#1F456E',
                      }}
                    >
                      {core.symbol}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-[#3a2a13]">{core.name}</div>
                    <div className="text-xs text-[#3a2a13]/80">{core.desc}</div>
                  </div>
                  {stage === idx && (
                    <div className="ml-3">
                      <div className="w-3 h-3 rounded-full bg-[#3ecfff] animate-pulse" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop horizontal layout */}
          <div className="hidden md:flex relative items-center justify-center w-full mb-6" style={{ minHeight: 120 }}>
            {/* Container for orbs and line */}
            <div className="relative" style={{ width: `${lineWidth + 60}px`, height: '100px' }}>
              {/* Background line */}
              <div 
                className="absolute"
                style={{
                  top: '35px',
                  left: '30px',
                  right: '30px',
                  height: '8px',
                  backgroundColor: '#1F456E',
                  borderRadius: '4px',
                  opacity: 0.95
                }}
              />
              
              {/* Orbs container */}
              <div className="absolute inset-0 flex items-start justify-between" style={{ padding: '0 30px' }}>
                {coreSteps.map((core, idx) => (
                  <div key={core.symbol} className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg border-3 transition-all duration-500 ${stage === idx ? 'ring-3 ring-[#3ecfff] scale-110' : ''}`}
                      style={{
                        background: `radial-gradient(circle, ${core.color} 60%, #fff 100%)`,
                        borderColor: core.color,
                        boxShadow: `0 0 20px 6px ${core.color}88, 0 0 40px 12px #3ecfff44`,
                        color: '#1F456E',
                      }}
                    >
                      {core.symbol}
                    </div>
                    {/* Progress dot below the orb */}
                    {stage === idx && (
                      <div className="mt-2 flex justify-center">
                        <span
                          className="block w-4 h-4 rounded-full bg-[#3ecfff] animate-pulse"
                          style={{
                            boxShadow: '0 0 12px 3px #3ecfff88',
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full max-w-2xl min-h-[60px] md:min-h-[48px] bg-white/80 rounded-xl shadow px-3 md:px-4 py-3 text-[#1F456E] text-sm md:text-base text-center font-medium transition-all duration-500">
            {stage >= 0 && stage < stepOutputs.length && (
              <span>{stepOutputs[stage]}</span>
            )}
            {stage === 7 && (
              <span><b>Nuvidya's Answer:</b> This verse speaks to the profound state of inner harmony achieved when one transcends desire and anger. Nuvidya interprets this as a call to self-mastery: true peace arises not from external conditions, but from knowing and aligning with one's own soul. When mind and spirit are in balance, free from the turbulence of craving and aversion, a deeper, unshakable peace becomes possible—one that is rooted in self-awareness and the wisdom to act with compassion and clarity in the world.</span>
            )}
          </div>
        </div>
      </section>
      <style jsx>{`
        .ancient-futuristic-title {
          text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
          letter-spacing: 0.08em;
        }
        .neon-glass {
          box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
        }
        @keyframes pulse {
          0% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </motion.div>
  );
}
