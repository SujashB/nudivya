'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Simplified chakra visualization for demo
const ChakraDemo: React.FC = () => {
  const [activeChakra, setActiveChakra] = useState<number>(0);
  const [energies, setEnergies] = useState<number[]>(new Array(7).fill(0));

  const chakras = [
    { name: 'Root', sanskrit: 'LAM', color: '#8B4513', emoji: '🟤', purpose: 'Grounding & Stability' },
    { name: 'Sacral', sanskrit: 'VAM', color: '#FF8C00', emoji: '🟠', purpose: 'Creativity & Flow' },
    { name: 'Solar', sanskrit: 'RAM', color: '#FFD700', emoji: '🟡', purpose: 'Willpower & Decision' },
    { name: 'Heart', sanskrit: 'YAM', color: '#32CD32', emoji: '💚', purpose: 'Compassion & Integration' },
    { name: 'Throat', sanskrit: 'HAM', color: '#1E90FF', emoji: '🔵', purpose: 'Expression & Clarity' },
    { name: 'Third Eye', sanskrit: 'OM', color: '#4B0082', emoji: '🟣', purpose: 'Insight & Synthesis' },
    { name: 'Crown', sanskrit: 'Silence', color: '#9370DB', emoji: '🟪', purpose: 'Meta-awareness' }
  ];

  // Simulate real-time chakra energies based on mathematical equations
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() * 0.001;
      setEnergies([
        Math.abs(Math.sin(2 * Math.PI * 0.5 * time) * Math.sin(2 * Math.PI * 0.5 * time)), // Root
        Math.abs((1 - Math.exp(-0.3 * (time % 10))) * Math.sin(2 * Math.PI * 1.0 * time) * Math.sin(2 * Math.PI * 0.7 * time)), // Sacral
        Math.abs(Math.exp(-((time % 3 - 1.5) ** 2) / 0.08) * Math.sin(2 * Math.PI * 1.0 * time)), // Solar (simplified)
        Math.abs(Math.sin(2 * Math.PI * 1.2 * time) * 0.3 + 0.1), // Heart (simplified)
        Math.abs(Math.sin(2 * Math.PI * 1.5 * time) * 0.4), // Throat (simplified)
        Math.abs(Math.sin(2 * Math.PI * 0.3 * time) * 0.2), // Third Eye
        Math.abs(Math.sin(2 * Math.PI * 0.1 * time) * 0.15) // Crown
      ]);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`w-full bg-white/5 backdrop-blur-sm py-20 ${merriweather.className}`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a2a13] mb-4 drop-shadow ancient-futuristic-title">
            Live Chakra Energy Simulation
          </h2>
          <p className="text-[#7c5c2b] max-w-2xl mx-auto">
            Watch the seven chakra agents compute their activation functions E_k'(t) in real-time, 
            based on the mathematical equations derived from Sanskrit vibrational patterns.
          </p>
        </div>

        {/* Chakra Ring Visualization */}
        <div className="relative w-80 h-80 mx-auto mb-12">
          <svg 
            viewBox="0 0 320 320" 
            className="w-full h-full"
          >
            {/* Background circle */}
            <circle
              cx="160"
              cy="160" 
              r="140"
              fill="none"
              stroke="rgba(128, 90, 213, 0.2)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            
            {/* Chakra nodes */}
            {chakras.map((chakra, index) => {
              const angle = (index * 2 * Math.PI) / 7 - Math.PI / 2;
              const x = 160 + 100 * Math.cos(angle);
              const y = 160 + 100 * Math.sin(angle);
              const energy = energies[index] || 0;
              const radius = 15 + energy * 15;
              
              return (
                <g key={index}>
                  {/* Glow effect */}
                  <circle
                    cx={x}
                    cy={y}
                    r={radius * 1.5}
                    fill={chakra.color}
                    opacity={energy * 0.3}
                    filter="blur(4px)"
                  />
                  
                  {/* Main chakra */}
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={radius}
                    fill={chakra.color}
                    stroke="white"
                    strokeWidth="2"
                    style={{ cursor: 'pointer' }}
                    animate={{
                      scale: 1 + energy * 0.3,
                      opacity: 0.8 + energy * 0.2
                    }}
                    onMouseEnter={() => setActiveChakra(index)}
                    onMouseLeave={() => setActiveChakra(-1)}
                  />
                  
                  {/* Sanskrit symbol */}
                  <text
                    x={x}
                    y={y + 4}
                    textAnchor="middle"
                    fontSize="12"
                    fill="white"
                    fontWeight="bold"
                    fontFamily="serif"
                    style={{ pointerEvents: 'none' }}
                  >
                    {chakra.sanskrit}
                  </text>
                  
                  {/* Energy ripples for high activation */}
                  {energy > 0.5 && (
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={radius}
                      fill="none"
                      stroke={chakra.color}
                      strokeWidth="2"
                      opacity={0.6}
                      animate={{
                        r: [radius, radius * 2],
                        opacity: [0.6, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  )}
                </g>
              );
            })}
            
            {/* Center point */}
            <circle
              cx="160"
              cy="160"
              r="8"
              fill="rgba(255, 255, 255, 0.8)"
              stroke="rgba(128, 90, 213, 0.5)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Energy Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 mb-8">
          {chakras.map((chakra, index) => {
            const energy = energies[index] || 0;
            
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-white/30 transition-colors shadow-lg"
                animate={{
                  scale: activeChakra === index ? 1.05 : 1,
                  boxShadow: activeChakra === index ? 
                    `0 8px 25px ${chakra.color}40` : 
                    '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{chakra.emoji}</div>
                  <h3 className="font-semibold text-sm text-[#3a2a13] mb-1">
                    {chakra.name}
                  </h3>
                  <p className="text-xs text-[#7c5c2b] mb-3">
                    {chakra.sanskrit}
                  </p>
                  
                  {/* Energy bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: chakra.color }}
                      animate={{ width: `${energy * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <p className="text-xs text-[#7c5c2b]">
                    {(energy * 100).toFixed(1)}%
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Chakra Info */}
        {activeChakra >= 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2" style={{ color: chakras[activeChakra].color }}>
                {chakras[activeChakra].name} Chakra ({chakras[activeChakra].sanskrit})
              </h3>
              <p className="text-[#7c5c2b] mb-4">
                {chakras[activeChakra].purpose}
              </p>
              <div className="text-sm text-[#7c5c2b]">
                <p><strong>Current Energy:</strong> {(energies[activeChakra] * 100).toFixed(1)}%</p>
                <p><strong>Mathematical Function:</strong> E_{activeChakra + 1}'(t) with Sanskrit envelope</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Mathematical Foundation */}
        <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
          <h3 className="text-lg font-semibold text-[#3a2a13] mb-4 text-center">
            Mathematical Foundation
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-[#7c5c2b]">
            <div>
              <h4 className="font-medium mb-2 text-[#3a2a13]">Energy Computation:</h4>
              <code className="bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20">
                E_k'(t) = Base Function × |sin(2πf_k t)|
              </code>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-[#3a2a13]">Influence Weights:</h4>
              <code className="bg-white/10 backdrop-blur-md px-2 py-1 rounded border border-white/20">
                α_k = W_k / Σ W_j where W_k = ∫ E_k'(t) dt
              </code>
            </div>
          </div>
          <p className="text-xs text-[#7c5c2b] mt-4 text-center">
            Each chakra computes its activation using unique mathematical equations derived from 
            Sanskrit vibrational patterns and energetic behaviors.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        .ancient-futuristic-title {
          text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
          letter-spacing: 0.08em;
        }
      `}</style>
    </section>
  );
};

export default ChakraDemo; 