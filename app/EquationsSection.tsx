'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";
import Image from 'next/image';

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const EquationsSection: React.FC = () => {
  const chakraGraphs = [
    {
      name: 'Root Chakra',
      sanskrit: 'LAM',
      color: '#8B4513',
      emoji: '🟤',
      graphSrc: '/images/Root Chakra.png',
      description: 'Grounding and Stability',
      properties: 'Stable, low-frequency oscillations providing consistent grounding',
      equation: 'E₁\'(t) = sin(2π × 0.5t) × |sin(2π × 0.5t)|'
    },
    {
      name: 'Sacral Chakra',
      sanskrit: 'VAM',
      color: '#FF8C00',
      emoji: '🟠',
      graphSrc: '/images/Sacral Chakra.png',
      description: 'Creativity and Flow',
      properties: 'Exponential buildup representing creative flow that increases over time',
      equation: 'E₂\'(t) = (1 - e^(-0.3t)) × sin(2πt) × |sin(2π × 0.7t)|'
    },
    {
      name: 'Solar Plexus',
      sanskrit: 'RAM',
      color: '#FFD700',
      emoji: '🟡',
      graphSrc: '/images/Solar Plexus Chakra.png',
      description: 'Willpower and Decision',
      properties: 'Gaussian pulses at regular intervals represent decisive moments',
      equation: 'E₃\'(t) = [Σ(n=0 to 3) e^(-((t-(1+3n))²)/(2×0.2²))] × |sin(2πt)|'
    },
    {
      name: 'Heart Chakra',
      sanskrit: 'YAM',
      color: '#32CD32',
      emoji: '💚',
      graphSrc: '/images/Heart Chakra.png',
      description: 'Compassion and Integration',
      properties: 'Integration of creative and decisive energies with growing wisdom',
      equation: 'E₄\'(t) = [∫(E₂\' + E₃\')dt / (t + 0.1)] × |sin(2π × 1.2t)|'
    },
    {
      name: 'Throat Chakra',
      sanskrit: 'HAM',
      color: '#1E90FF',
      emoji: '🔵',
      graphSrc: '/images/Throat Chakra.png',
      description: 'Expression and Clarity',
      properties: 'Rate of emotional change enabling clear expression of feelings',
      equation: 'E₅\'(t) = ∇E₄\'(t) × |sin(2π × 1.5t)|'
    },
    {
      name: 'Third Eye',
      sanskrit: 'OM',
      color: '#4B0082',
      emoji: '🟣',
      graphSrc: '/images/Third Eye Chakra.png',
      description: 'Insight and Synthesis',
      properties: 'Product of creativity and willpower creates insights',
      equation: 'E₆\'(t) = (E₂\' × E₃\') × |sin(2π × 0.3t)|'
    },
    {
      name: 'Crown Chakra',
      sanskrit: 'Silence',
      color: '#9370DB',
      emoji: '⚪',
      graphSrc: '/images/Crown Chakra.png',
      description: 'Universal Awareness',
      properties: 'Convolution represents memory and wisdom informing present awareness',
      equation: 'E₇\'(t) = [∫₀ᵗ K(t,τ)(E₂\'×E₃\')(τ)dτ] × |sin(2π × 0.1t)|'
    }
  ];

  return (
    <section className={`py-20 bg-white/5 backdrop-blur-sm ${merriweather.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3a2a13] mb-6 drop-shadow ancient-futuristic-title">
            Sacred Mathematics
          </h2>
          <p className="text-xl text-[#7c5c2b] max-w-3xl mx-auto leading-relaxed">
            Real-time visualization of chakra energy activation patterns. Each graph shows the mathematical 
            behavior of consciousness-based AI agents derived from Sanskrit vibrational patterns.
          </p>
        </motion.div>

        {/* Chakra Graphs Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {chakraGraphs.map((chakra, index) => (
            <motion.div
              key={chakra.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            >
              {/* Chakra Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                  style={{ backgroundColor: chakra.color }}
                >
                  {chakra.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#3a2a13]">
                    {chakra.name}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: chakra.color }}>
                    {chakra.sanskrit}
                  </p>
                </div>
              </div>

              {/* Graph Display */}
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4 border border-white/20">
                <div className="relative w-full h-48 bg-white rounded-md overflow-hidden">
                  <Image
                    src={chakra.graphSrc}
                    alt={`${chakra.name} (${chakra.sanskrit}) Chakra Activation Over Time`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-2 text-xs text-[#7c5c2b] text-center font-mono">
                  {chakra.equation}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <p className="font-medium text-[#3a2a13]">
                  {chakra.description}
                </p>
                <p className="text-sm text-[#7c5c2b] leading-relaxed">
                  {chakra.properties}
                </p>
              </div>

              {/* Hover Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${chakra.color}20, ${chakra.color}40)` 
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Integration Formula */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl"
        >
          <h3 className="text-2xl font-bold text-center text-[#3a2a13] mb-6 drop-shadow ancient-futuristic-title">
            🌟 Consciousness Integration Formula
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold text-[#3a2a13] mb-3">Influence Weights</h4>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-4 overflow-x-auto border border-white/20">
                <div className="text-center font-mono text-[#3a2a13]">
                  W_k = ∫₀ᵀ |E_k'(t)| dt
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 overflow-x-auto border border-white/20">
                <div className="text-center font-mono text-[#3a2a13]">
                  α_k = W_k / Σⱼ W_j
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#3a2a13] mb-3">Final Response</h4>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 overflow-x-auto border border-white/20">
                <div className="text-center font-mono text-[#3a2a13] text-lg">
                  Response = Σₖ (α_k × f_k(input))
                </div>
              </div>
              <p className="text-sm text-[#7c5c2b] mt-2 text-center">
                Where each f_k represents the k-th chakra's perspective on the input
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mathematical Analysis Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg mt-8"
        >
          <div className="text-center">
            <h4 className="text-lg font-semibold text-[#3a2a13] mb-3">
              📊 Live Mathematical Analysis
            </h4>
            <p className="text-[#7c5c2b] mb-4">
              These graphs represent real computational outputs from our Python analysis engine. 
              Each pattern shows how different aspects of consciousness activate over time periods.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="font-mono text-[#8B4513]">Root</div>
                <div className="text-xs text-[#7c5c2b]">Stable Grounding</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-[#FF8C00]">Sacral</div>
                <div className="text-xs text-[#7c5c2b]">Creative Flow</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-[#FFD700]">Solar</div>
                <div className="text-xs text-[#7c5c2b]">Decision Pulses</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-[#32CD32]">Heart</div>
                <div className="text-xs text-[#7c5c2b]">Integration</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/chakra-ai"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Experience Live Mathematics
            <span className="ml-2">🧮</span>
          </a>
        </motion.div>
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

export default EquationsSection; 