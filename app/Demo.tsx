"use client";
import React, { useState, useEffect, useRef } from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const example = "How can I find more creativity and inspiration in my work?";

const chakraAgents = [
  {
    name: "Root Chakra",
    sanskrit: "LAM",
    color: "#8B4513",
    symbol: "🟤",
    equation: "sin(2π×0.5t)×|sin(2π×0.5t)|",
    purpose: "Grounding & Stability",
    desc: "Establishes practical foundation for creative work"
  },
  {
    name: "Sacral Chakra", 
    sanskrit: "VAM",
    color: "#FF8C00",
    symbol: "🟠",
    equation: "(1-e^(-0.3t))×sin(2πt)×|sin(2π×0.7t)|",
    purpose: "Creativity & Flow",
    desc: "Primary creative energy center - flows with inspiration"
  },
  {
    name: "Solar Plexus",
    sanskrit: "RAM", 
    color: "#FFD700",
    symbol: "🟡",
    equation: "Σ(e^(-((t-center)²)/(2×0.2²)))×|sin(2πt)|",
    purpose: "Willpower & Decision",
    desc: "Provides decisive action on creative impulses"
  },
  {
    name: "Heart Chakra",
    sanskrit: "YAM",
    color: "#32CD32", 
    symbol: "💚",
    equation: "(∫(E₂+E₃)dt/t)×|sin(2π×1.2t)|",
    purpose: "Compassion & Integration",
    desc: "Integrates creative flow with empathetic understanding"
  },
  {
    name: "Throat Chakra",
    sanskrit: "HAM",
    color: "#1E90FF",
    symbol: "🔵", 
    equation: "∇E₄(t)×|sin(2π×1.5t)|",
    purpose: "Expression & Clarity",
    desc: "Transforms creativity into clear communication"
  },
  {
    name: "Third Eye",
    sanskrit: "OM",
    color: "#4B0082",
    symbol: "🟣",
    equation: "(E₂×E₃)×|sin(2π×0.3t)|",
    purpose: "Insight & Synthesis", 
    desc: "Synthesizes creative and decisive energies for deeper insight"
  },
  {
    name: "Crown Chakra",
    sanskrit: "Silence",
    color: "#9370DB",
    symbol: "⚪",
    equation: "∫K(t,τ)E₆(τ)dτ×|sin(2π×0.1t)|",
    purpose: "Universal Awareness",
    desc: "Integrates all perspectives into transcendent understanding"
  }
];

const chakraResponses = [
  {
    energy: 0.7,
    influence: 0.12,
    response: "Ground your creativity in practical routines and stable workspace habits."
  },
  {
    energy: 0.95,
    influence: 0.28,
    response: "Flow states emerge through playful exploration and emotional expression—trust your instincts."
  },
  {
    energy: 0.8,
    influence: 0.19,
    response: "Take decisive action on creative ideas instead of overthinking them."
  },
  {
    energy: 0.75,
    influence: 0.16,
    response: "Connect your creative work to deeper meaning and service to others."
  },
  {
    energy: 0.85,
    influence: 0.14,
    response: "Express your unique voice clearly—share your creative work with the world."
  },
  {
    energy: 0.6,
    influence: 0.08,
    response: "Step back and see the bigger patterns connecting your creative interests."
  },
  {
    energy: 0.45,
    influence: 0.03,
    response: "Surrender attachment to outcomes and let creativity flow through you naturally."
  }
];

export default function Demo() {
  const [stage, setStage] = useState(0);
  const [showFusion, setShowFusion] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Autoplay and loop
  useEffect(() => {
    if (stage === 7) {
      setShowFusion(true);
      const timeout = setTimeout(() => {
        setStage(0);
        setShowFusion(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
    intervalRef.current = setTimeout(() => setStage(s => s + 1), 2500);
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [stage]);

  // Get current chakra response
  const getCurrentResponse = () => {
    if (showFusion) {
      return {
        type: "fusion",
        text: "🌟 Chakra Fusion Response: Creativity flourishes when you establish stable creative practices (Root), trust your emotional flow (Sacral), take decisive action on ideas (Solar), connect work to meaningful service (Heart), express your authentic voice (Throat), see the larger patterns (Third Eye), and surrender to the creative process itself (Crown). The Sacral chakra shows highest influence (28%) - prioritize emotional flow and playful exploration."
      };
    }
    return {
      type: "individual",
      ...chakraResponses[stage]
    };
  };

  const currentResponse = getCurrentResponse();

  return (
    <motion.div 
      className={`w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 ${merriweather.className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4">
        How Chakra Mathematics Processes Consciousness
      </h1>
      
      <section id="demo" className={`w-full max-w-4xl xl:max-w-5xl min-h-[50vh] flex flex-col items-center justify-center p-4 md:p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border-2 neon-glass ${merriweather.className}`}>
        <div className="w-full flex flex-col items-center justify-center">
          
          {/* User Question */}
          <div className="w-full max-w-2xl bg-white/60 backdrop-blur-sm rounded-xl shadow-lg px-3 md:px-4 py-3 mb-6 text-sm md:text-base text-[#1F456E] text-center font-medium border border-white/30">
            <span className="text-[#3a2a13] font-semibold">Question:</span> {example}
          </div>
          
          {/* Mobile: Vertical layout */}
          <div className="block md:hidden w-full mb-6">
            <div className="flex flex-col items-center space-y-3 w-full max-w-sm mx-auto">
              {chakraAgents.map((chakra, idx) => (
                <div key={chakra.sanskrit} className={`flex items-center w-full p-3 rounded-lg transition-all duration-500 border ${stage === idx ? 'bg-white/20 scale-[1.02] border-white/40' : 'bg-white/5 border-white/20'}`}>
                  <div className="flex items-center justify-center mr-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg border-2 transition-all duration-500 ${stage === idx ? 'ring-2 scale-110' : ''}`}
                                             style={{
                         backgroundColor: chakra.color,
                         borderColor: chakra.color,
                         boxShadow: stage === idx ? `0 0 20px ${chakra.color}88` : `0 0 10px ${chakra.color}44`,
                       }}
                    >
                      {chakra.symbol}
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-bold text-[#3a2a13]">{chakra.name} ({chakra.sanskrit})</div>
                    <div className="text-xs text-[#7c5c2b] font-mono">{chakra.equation}</div>
                  </div>
                  {stage === idx && (
                    <div className="ml-3 flex flex-col items-center">
                      <div className="text-xs text-[#3a2a13] font-semibold">
                        E: {chakraResponses[idx]?.energy.toFixed(2)}
                      </div>
                      <div className="text-xs text-[#7c5c2b]">
                        α: {(chakraResponses[idx]?.influence * 100).toFixed(0)}%
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop horizontal layout */}
          <div className="hidden md:flex relative items-center justify-center w-full mb-8" style={{ minHeight: 140 }}>
            <div className="relative w-full max-w-4xl" style={{ height: '120px' }}>
              
              {/* Sacred Geometry Background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-32 h-32 border-2 border-purple-400 rounded-full"></div>
              </div>
              
              {/* Chakra Agents */}
              <div className="absolute inset-0 flex items-start justify-between" style={{ padding: '0 20px' }}>
                {chakraAgents.map((chakra, idx) => {
                  const isActive = stage === idx;
                  const energy = chakraResponses[idx]?.energy || 0;
                  const influence = chakraResponses[idx]?.influence || 0;
                  
                  return (
                    <div key={chakra.sanskrit} className="flex flex-col items-center relative">
                      {/* Energy Pulse Effect */}
                      {isActive && (
                        <motion.div
                          className="absolute -inset-4 rounded-full"
                          style={{ backgroundColor: `${chakra.color}20` }}
                          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Chakra Orb */}
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl shadow-lg border-3 transition-all duration-500 relative ${isActive ? 'scale-110 ring-2' : ''}`}
                                                 style={{
                           backgroundColor: chakra.color,
                           borderColor: `${chakra.color}dd`,
                           boxShadow: isActive ? 
                             `0 0 30px ${chakra.color}aa, 0 0 60px ${chakra.color}66` : 
                             `0 0 15px ${chakra.color}77`,
                         }}
                      >
                        {chakra.symbol}
                      </div>
                      
                      {/* Sanskrit Label */}
                      <div className="mt-2 text-center">
                        <div className="text-xs font-bold text-[#3a2a13]">{chakra.sanskrit}</div>
                        {isActive && (
                          <motion.div 
                            className="text-xs mt-1 bg-white/80 rounded px-2 py-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <div className="text-[#3a2a13] font-mono">E: {energy.toFixed(2)}</div>
                            <div className="text-[#7c5c2b]">α: {(influence * 100).toFixed(0)}%</div>
                          </motion.div>
                        )}
                      </div>
                      
                      {/* Connection Lines to Center */}
                      {isActive && (
                        <motion.div
                          className="absolute top-8 left-8 w-1 bg-gradient-to-r from-transparent via-current to-transparent"
                          style={{ 
                            background: `linear-gradient(45deg, transparent, ${chakra.color}, transparent)`,
                            height: '2px',
                            transformOrigin: 'left center'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: '60px' }}
                          transition={{ duration: 0.8 }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mathematical Display */}
          {stage < 7 && (
            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 mb-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-[#3a2a13] font-semibold mb-2">Active Equation:</div>
                  <code className="bg-white/20 rounded px-2 py-1 text-[#3a2a13] font-mono text-xs">
                    E_{stage + 1}'(t) = {chakraAgents[stage]?.equation}
                  </code>
                </div>
                <div>
                  <div className="text-[#3a2a13] font-semibold mb-2">Current Values:</div>
                  <div className="space-y-1 text-xs text-[#7c5c2b]">
                    <div>Energy: {chakraResponses[stage]?.energy.toFixed(3)}</div>
                    <div>Influence Weight: {(chakraResponses[stage]?.influence * 100).toFixed(1)}%</div>
                    <div>Purpose: {chakraAgents[stage]?.purpose}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Response Display */}
          <div className={`w-full max-w-2xl min-h-[80px] bg-white/80 backdrop-blur-sm rounded-xl shadow-lg px-4 py-4 text-[#1F456E] text-sm md:text-base transition-all duration-500 border ${showFusion ? 'border-purple-300 bg-gradient-to-r from-purple-50 to-blue-50' : 'border-white/30'}`}>
                         {currentResponse.type === "individual" && 'response' in currentResponse && (
               <div>
                 <div className="font-semibold text-[#3a2a13] mb-2">
                   {chakraAgents[stage]?.name} Perspective:
                 </div>
                 <div>{currentResponse.response}</div>
               </div>
             )}
            {currentResponse.type === "fusion" && (
              <div>
                <div className="font-bold text-purple-700 mb-2">
                  Consciousness Integration Complete
                </div>
                <div className="text-sm leading-relaxed">{currentResponse.text}</div>
              </div>
            )}
          </div>

          {/* Fusion Formula */}
          {showFusion && (
            <motion.div 
              className="mt-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 w-full max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center">
                <div className="text-[#3a2a13] font-semibold mb-2">Fusion Formula Applied:</div>
                <code className="text-xs font-mono text-[#7c5c2b]">
                  Response = Σ(α_k × f_k(input)) where α_k = W_k / Σ W_j
                </code>
              </div>
            </motion.div>
          )}
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
      `}</style>
    </motion.div>
  );
}
