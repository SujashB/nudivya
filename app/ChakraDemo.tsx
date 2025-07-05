'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";
import Latex from 'react-latex';

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// Updated core names and their mathematical equations
const coreAgents = [
  { 
    name: 'Foundation Core', 
    oldName: 'Root',
    sanskrit: 'LAM', 
    color: '#8B4513', 
    emoji: '🟤', 
    purpose: 'Stability & Security',
    equation: 'E_1\'(t) = \\sin(2\\pi \\cdot 0.5 \\cdot t) \\cdot |\\sin(2\\pi \\cdot 0.5 \\cdot t)|',
    explanation: 'Provides grounding and stability through steady oscillations'
  },
  { 
    name: 'Flow Core', 
    oldName: 'Sacral',
    sanskrit: 'VAM', 
    color: '#FF8C00', 
    emoji: '🟠', 
    purpose: 'Creativity & Adaptability',
    equation: 'E_2\'(t) = (1 - e^{-0.3t}) \\cdot \\sin(2\\pi \\cdot 1.0 \\cdot t) \\cdot |\\sin(2\\pi \\cdot 0.7 \\cdot t)|',
    explanation: 'Builds creative energy through adaptive flow patterns'
  },
  { 
    name: 'Drive Core', 
    oldName: 'Solar',
    sanskrit: 'RAM', 
    color: '#FFD700', 
    emoji: '🟡', 
    purpose: 'Willpower & Decision',
    equation: 'E_3\'(t) = e^{-((t \\bmod 3 - 1.5)^2 / 0.08)} \\cdot \\sin(2\\pi \\cdot 1.0 \\cdot t)',
    explanation: 'Generates decisive bursts of energy for action-taking'
  },
  { 
    name: 'Harmony Core', 
    oldName: 'Heart',
    sanskrit: 'YAM', 
    color: '#32CD32', 
    emoji: '💚', 
    purpose: 'Empathy & Connection',
    equation: 'E_4\'(t) = \\int_0^t 0.2 \\cdot E_1(s) \\cdot E_3(s) \\, ds + 0.3 \\cdot \\sin(2\\pi \\cdot 1.2 \\cdot t)',
    explanation: 'Integrates emotional wisdom and connects different perspectives'
  },
  { 
    name: 'Clarity Core', 
    oldName: 'Throat',
    sanskrit: 'HAM', 
    color: '#1E90FF', 
    emoji: '🔵', 
    purpose: 'Expression & Transparency',
    equation: 'E_5\'(t) = \\max(0, \\sin(2\\pi \\cdot 1.5 \\cdot t) + 0.1 \\cdot \\cos(2\\pi \\cdot 3.0 \\cdot t))',
    explanation: 'Ensures clear communication and transparent expression'
  },
  { 
    name: 'Insight Core', 
    oldName: 'Third Eye',
    sanskrit: 'OM', 
    color: '#4B0082', 
    emoji: '🟣', 
    purpose: 'Pattern Recognition & Foresight',
    equation: 'E_6\'(t) = \\tanh(\\sum_{k=1}^5 0.1 \\cdot E_k(t)) \\cdot \\sin(2\\pi \\cdot 0.3 \\cdot t)',
    explanation: 'Synthesizes patterns and provides intuitive insights'
  },
  { 
    name: 'Synthesis Core', 
    oldName: 'Crown',
    sanskrit: 'Silence', 
    color: '#9370DB', 
    emoji: '🟪', 
    purpose: 'Integration & Strategic Vision',
    equation: 'E_7\'(t) = \\int_0^t 0.5e^{-0.5(t - s)} E_6(s) \\, ds \\cdot |\\sin(2\\pi \\cdot 0.1 \\cdot t)|',
    explanation: 'Integrates all wisdom into unified strategic understanding'
  }
];

// LaTeX equation renderer component
const LaTeXEquation: React.FC<{ equation: string; className?: string }> = ({ equation, className }) => {
  return (
    <div className={`text-center bg-white/5 rounded-lg p-4 my-4 ${className}`}>
      <Latex displayMode={true}>{`$$${equation}$$`}</Latex>
    </div>
  );
};

// Enhanced chakra visualization with dropdown
const ChakraDemo: React.FC = () => {
  const [selectedCore, setSelectedCore] = useState<number>(0);
  const [energies, setEnergies] = useState<number[]>(new Array(7).fill(0));
  const [showMath, setShowMath] = useState(false);

  // Mathematical simulation functions for each core
  const calculateEnergy = (coreIndex: number, time: number): number => {
    const t = time * 0.001;
    switch (coreIndex) {
      case 0: // Foundation Core
        return Math.abs(Math.sin(2 * Math.PI * 0.5 * t) * Math.sin(2 * Math.PI * 0.5 * t));
      case 1: // Flow Core
        return Math.abs((1 - Math.exp(-0.3 * (t % 10))) * Math.sin(2 * Math.PI * 1.0 * t) * Math.sin(2 * Math.PI * 0.7 * t));
      case 2: // Drive Core
        return Math.abs(Math.exp(-((t % 3 - 1.5) ** 2) / 0.08) * Math.sin(2 * Math.PI * 1.0 * t));
      case 3: // Harmony Core
        return Math.abs(Math.sin(2 * Math.PI * 1.2 * t) * 0.3 + 0.1);
      case 4: // Clarity Core
        return Math.abs(Math.max(0, Math.sin(2 * Math.PI * 1.5 * t) + 0.1 * Math.cos(2 * Math.PI * 3.0 * t)));
      case 5: // Insight Core
        return Math.abs(Math.tanh(0.5) * Math.sin(2 * Math.PI * 0.3 * t));
      case 6: // Synthesis Core
        return Math.abs(Math.sin(2 * Math.PI * 0.1 * t) * 0.15);
      default:
        return 0;
    }
  };

  // Real-time energy simulation
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now();
      const newEnergies = coreAgents.map((_, index) => calculateEnergy(index, time));
      setEnergies(newEnergies);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`w-full bg-white/5 backdrop-blur-sm py-20 ${merriweather.className}`}>
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3a2a13] mb-4 drop-shadow ancient-futuristic-title">
            Live Core Agent Energy Simulation
          </h2>
          <p className="text-[#7c5c2b] max-w-2xl mx-auto mb-6">
            Experience the seven core agents computing their activation functions E_k'(t) in real-time, 
            based on mathematical equations derived from Sanskrit vibrational patterns.
          </p>
          
          {/* Core Selection Dropdown */}
          <div className="mb-8">
            <label className="block text-[#7c5c2b] font-semibold mb-2">
              Select Core Agent:
            </label>
            <select
              value={selectedCore}
              onChange={(e) => setSelectedCore(parseInt(e.target.value))}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-[#3a2a13] font-semibold focus:outline-none focus:border-white/40"
            >
              {coreAgents.map((core, index) => (
                <option key={index} value={index} className="bg-white text-[#3a2a13]">
                  {core.name} ({core.oldName})
                </option>
              ))}
            </select>
          </div>

          {/* Math Toggle */}
          <button
            onClick={() => setShowMath(!showMath)}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-[#3a2a13] font-semibold hover:bg-white/20 transition-colors"
          >
            {showMath ? 'Hide Mathematics' : 'Show Mathematics'}
          </button>
        </div>

        {/* Selected Core Details */}
        <div className="mb-12">
          <motion.div
            key={selectedCore}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-4xl">{coreAgents[selectedCore].emoji}</div>
              <div>
                <h3 className="text-2xl font-bold text-[#3a2a13] mb-2">
                  {coreAgents[selectedCore].name}
                </h3>
                <p className="text-[#7c5c2b] text-sm">
                  Sanskrit: {coreAgents[selectedCore].sanskrit} | {coreAgents[selectedCore].purpose}
                </p>
              </div>
            </div>

            {/* Core Explanation */}
            <p className="text-[#3a2a13] mb-6 max-w-2xl mx-auto">
              {coreAgents[selectedCore].explanation}
            </p>

            {/* Energy Visualization */}
            <div className="mb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-[#7c5c2b] font-semibold">Energy Level:</span>
                <div className="w-64 bg-white/20 rounded-full h-6 relative">
                  <motion.div
                    className="h-6 rounded-full"
                    style={{ backgroundColor: coreAgents[selectedCore].color }}
                    animate={{ width: `${energies[selectedCore] * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                    {(energies[selectedCore] * 100).toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Live Energy Pulse */}
              <div className="relative w-32 h-32 mx-auto">
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-white/20"
                  style={{ borderColor: coreAgents[selectedCore].color }}
                    animate={{
                    scale: [1, 1 + energies[selectedCore] * 0.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div 
                  className="absolute inset-4 rounded-full flex items-center justify-center text-white font-bold text-2xl"
                  style={{ backgroundColor: coreAgents[selectedCore].color }}
                >
                  {coreAgents[selectedCore].sanskrit}
                </div>
              </div>
            </div>

            {/* Mathematical Equation */}
            {showMath && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-t border-white/20 pt-6 mt-6"
              >
                <h4 className="text-[#7c5c2b] font-semibold mb-4">Mathematical Model:</h4>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <LaTeXEquation 
                    equation={coreAgents[selectedCore].equation} 
                    className="text-[#3a2a13] text-center"
                  />
                </div>
                <p className="text-[#7c5c2b] text-sm">
                  This equation defines how the {coreAgents[selectedCore].name} computes its energy activation over time.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* All Cores Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 mb-8">
          {coreAgents.map((core, index) => {
            const energy = energies[index] || 0;
            const isSelected = selectedCore === index;
            
            return (
              <motion.div
                key={index}
                className={`bg-white/10 backdrop-blur-md rounded-lg p-4 border transition-all duration-300 shadow-lg cursor-pointer ${
                  isSelected ? 'border-white/40 shadow-xl' : 'border-white/20 hover:border-white/30'
                }`}
                animate={{
                  scale: isSelected ? 1.05 : 1,
                  boxShadow: isSelected ? 
                    `0 8px 25px ${core.color}40` : 
                    '0 2px 10px rgba(0,0,0,0.1)'
                }}
                onClick={() => setSelectedCore(index)}
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">{core.emoji}</div>
                  <h3 className="font-semibold text-sm text-[#3a2a13] mb-1">
                    {core.name}
                  </h3>
                  <p className="text-xs text-[#7c5c2b] mb-3">
                    {core.sanskrit}
                  </p>
                  
                  {/* Energy bar */}
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <motion.div
                      className="h-2 rounded-full"
                      style={{ backgroundColor: core.color }}
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

        {/* Mathematical Framework */}
        {showMath && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          >
            <h3 className="text-2xl font-bold text-[#3a2a13] mb-6 text-center ancient-futuristic-title">
              Mathematical Framework
              </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#7c5c2b] font-semibold mb-4">Step-by-step Process:</h4>
                <ol className="text-[#3a2a13] text-sm space-y-2">
                  <li>1. <strong>User asks a question</strong> or enters a prompt</li>
                  <li>2. System sends prompt to <strong>seven core agents</strong></li>
                  <li>3. Each agent uses <strong>math model</strong> E_k'(t) to compute energy</li>
                  <li>4. Agents respond with <strong>partial answers</strong></li>
                  <li>5. All answers are <strong>weighted by energy influence</strong></li>
                  <li>6. Process is <strong>logged transparently</strong> (IPFS)</li>
                </ol>
              </div>
              
              <div>
                <h4 className="text-[#7c5c2b] font-semibold mb-4">Core Fusion Formula:</h4>
                <div className="bg-white/5 rounded-lg p-4 mb-4">
                  <LaTeXEquation 
                    equation="z = \\sum_{k=1}^7 \\alpha_k \\cdot f_k(x)" 
                    className="text-[#3a2a13] text-center"
                  />
                </div>
                <p className="text-[#3a2a13] text-sm">
                  Where α_k are normalized energy weights and f_k(x) are agent responses.
                </p>
              </div>
            </div>
          </motion.div>
        )}
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