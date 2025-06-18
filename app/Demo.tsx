"use client";
import React, { useState, useEffect, useRef } from "react";
import { Merriweather } from "next/font/google";

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
  const lineWidth = 420; // px
  const orbSpacing = lineWidth / (orbCount - 1);

  return (
    <section className={`w-[90vw] max-w-5xl min-h-[50vh] flex flex-col items-center justify-center px-4 py-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border-2 neon-glass mt-8 mb-6 ${merriweather.className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-[#1F456E] mb-4 text-center drop-shadow">How Nuvidya Processes a Question</h2>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white/60 rounded-xl shadow px-4 py-3 mb-6 text-base text-[#1F456E] text-center font-medium">
          {example}
        </div>
        <div className="relative flex flex-col items-center w-full max-w-4xl mb-6" style={{ minHeight: 100 }}>
          {/* SVG line only */}
          <svg
            width={lineWidth + 80}
            height={70}
            style={{
              position: "absolute",
              top: 33, // center of orbs
              left: 0,
              right: 0,
              margin: "0 auto",
              zIndex: 0,
              pointerEvents: "none"
            }}
          >
            <line
              x1={25}
              y1={35}
              x2={lineWidth + 55}
              y2={35}
              stroke="#1F456E"
              strokeWidth={8}
              strokeLinecap="round"
              opacity={0.95}
            />
          </svg>
          {/* Orbs and blue dot below */}
          <div className="flex flex-row items-end justify-center gap-0 w-full" style={{ position: "relative", zIndex: 1, width: lineWidth + 80 }}>
            {coreSteps.map((core, idx) => (
              <div key={core.symbol} className="flex flex-col items-center" style={{ marginLeft: idx === 0 ? 0 : orbSpacing - 48, marginRight: 0 }}>
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg border-3 transition-all duration-500 mb-2 ${stage === idx ? 'ring-3 ring-[#3ecfff] scale-110' : ''}`}
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
                  <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: '#3ecfff',
                        boxShadow: '0 0 12px 3px #3ecfff88',
                        opacity: 0.9,
                        animation: 'pulse 1.2s infinite alternate'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-xl min-h-[48px] bg-white/80 rounded-xl shadow px-4 py-3 text-[#1F456E] text-base text-center font-medium transition-all duration-500">
          {stage >= 0 && stage < stepOutputs.length && (
            <span>{stepOutputs[stage]}</span>
          )}
          {stage === 7 && (
            <span><b>Nuvidya's Answer:</b> This verse speaks to the profound state of inner harmony achieved when one transcends desire and anger. Nuvidya interprets this as a call to self-mastery: true peace arises not from external conditions, but from knowing and aligning with one's own soul. When mind and spirit are in balance, free from the turbulence of craving and aversion, a deeper, unshakable peace becomes possible—one that is rooted in self-awareness and the wisdom to act with compassion and clarity in the world.</span>
          )}
        </div>
      </div>
      <style jsx>{`
        .neon-glass {
          box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
        }
        @keyframes pulse {
          0% { opacity: 0.7; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </section>
  );
}
