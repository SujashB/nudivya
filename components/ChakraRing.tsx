'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChakraData {
  id: number;
  name: string;
  sanskrit: string;
  color: string;
  energy: number;
  position: { x: number; y: number };
  mantra: string;
  purpose: string;
}

interface ChakraRingProps {
  chakraEnergies: number[]; // Real-time energy values E_k'(t)
  influences: number[];     // Influence weights α_k
  isActive?: boolean;
  size?: number;
}

const CHAKRAS: ChakraData[] = [
  {
    id: 1,
    name: 'Root',
    sanskrit: 'LAM',
    color: '#8B4513',
    energy: 0,
    position: { x: 0, y: 80 },
    mantra: 'I am grounded and stable',
    purpose: 'Grounding, stability, system trust'
  },
  {
    id: 2,
    name: 'Sacral', 
    sanskrit: 'VAM',
    color: '#FF8C00',
    energy: 0,
    position: { x: -60, y: 40 },
    mantra: 'I embrace creativity and flow',
    purpose: 'Creativity, emotional fluidity'
  },
  {
    id: 3,
    name: 'Solar',
    sanskrit: 'RAM', 
    color: '#FFD700',
    energy: 0,
    position: { x: -60, y: -40 },
    mantra: 'I am confident and decisive',
    purpose: 'Willpower bursts, decision making'
  },
  {
    id: 4,
    name: 'Heart',
    sanskrit: 'YAM',
    color: '#32CD32',
    energy: 0,
    position: { x: 0, y: -80 },
    mantra: 'I give and receive love freely',
    purpose: 'Emotional balance and compassion'
  },
  {
    id: 5,
    name: 'Throat',
    sanskrit: 'HAM',
    color: '#1E90FF',
    energy: 0,
    position: { x: 60, y: -40 },
    mantra: 'I speak my truth clearly',
    purpose: 'Expression, voice, clarity'
  },
  {
    id: 6,
    name: 'Third Eye',
    sanskrit: 'OM',
    color: '#4B0082',
    energy: 0,
    position: { x: 60, y: 40 },
    mantra: 'I see beyond the visible',
    purpose: 'Insight, pattern recognition'
  },
  {
    id: 7,
    name: 'Crown',
    sanskrit: 'Silence',
    color: '#9370DB',
    energy: 0,
    position: { x: 0, y: 0 },
    mantra: 'I am one with universal consciousness',
    purpose: 'Integration, transcendence'
  }
];

const ChakraNode: React.FC<{
  chakra: ChakraData;
  energy: number;
  influence: number;
  isHovered: boolean;
  onHover: (chakra: ChakraData | null) => void;
  size: number;
}> = ({ chakra, energy, influence, isHovered, onHover, size }) => {
  const nodeSize = size * 0.12;
  const glowIntensity = Math.abs(energy) * 2;
  const pulseScale = 1 + Math.abs(energy) * 0.3;

  return (
    <motion.g
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => onHover(chakra)}
      onMouseLeave={() => onHover(null)}
      animate={{
        scale: pulseScale,
        opacity: 0.7 + Math.abs(energy) * 0.3
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
    >
      {/* Glow effect based on energy */}
      <circle
        cx={chakra.position.x}
        cy={chakra.position.y}
        r={nodeSize * 1.5}
        fill={chakra.color}
        opacity={glowIntensity * 0.3}
        filter="blur(8px)"
      />
      
      {/* Main chakra node */}
      <circle
        cx={chakra.position.x}
        cy={chakra.position.y}
        r={nodeSize}
        fill={chakra.color}
        stroke="#FFFFFF"
        strokeWidth="2"
        opacity={0.9}
      />
      
      {/* Sanskrit symbol */}
      <text
        x={chakra.position.x}
        y={chakra.position.y + 4}
        textAnchor="middle"
        fontSize={nodeSize * 0.4}
        fill="white"
        fontWeight="bold"
        fontFamily="serif"
      >
        {chakra.sanskrit}
      </text>
      
      {/* Energy ripples for high activation */}
      {Math.abs(energy) > 0.5 && (
        <motion.circle
          cx={chakra.position.x}
          cy={chakra.position.y}
          r={nodeSize}
          fill="none"
          stroke={chakra.color}
          strokeWidth="2"
          opacity={0.6}
          animate={{
            r: [nodeSize, nodeSize * 2.5],
            opacity: [0.6, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      )}
      
      {/* Influence percentage indicator */}
      {influence > 0.1 && (
        <text
          x={chakra.position.x}
          y={chakra.position.y + nodeSize + 16}
          textAnchor="middle"
          fontSize="10"
          fill={chakra.color}
          fontWeight="bold"
        >
          {(influence * 100).toFixed(0)}%
        </text>
      )}
    </motion.g>
  );
};

const ChakraRing: React.FC<ChakraRingProps> = ({ 
  chakraEnergies, 
  influences, 
  isActive = true, 
  size = 200 
}) => {
  const [hoveredChakra, setHoveredChakra] = useState<ChakraData | null>(null);
  const [isResonating, setIsResonating] = useState(false);

  // Check if system is in high resonance state
  useEffect(() => {
    const totalEnergy = chakraEnergies.reduce((sum, energy) => sum + Math.abs(energy), 0);
    setIsResonating(totalEnergy > 3);
  }, [chakraEnergies]);

  // Create connections between chakras
  const connections = [
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], // All to Crown
    [0, 3], [1, 4], [2, 5], // Primary pairs
    [1, 2], [4, 5] // Adjacent connections
  ];

  return (
    <div className="relative flex flex-col items-center">
      {/* Main chakra ring SVG */}
      <motion.svg
        width={size * 2}
        height={size * 2}
        viewBox={`-${size} -${size} ${size * 2} ${size * 2}`}
        className="drop-shadow-lg"
        animate={{
          filter: isResonating ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))' : 'none'
        }}
      >
        {/* Background circle */}
        <circle
          r={size * 0.9}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          strokeDasharray="5,5"
        />
        
        {/* Chakra connections */}
        {connections.map(([from, to], index) => {
          const fromChakra = CHAKRAS[from];
          const toChakra = CHAKRAS[to];
          const connectionStrength = Math.min(chakraEnergies[from], chakraEnergies[to]);
          
          return (
            <motion.line
              key={index}
              x1={fromChakra.position.x}
              y1={fromChakra.position.y}
              x2={toChakra.position.x}
              y2={toChakra.position.y}
              stroke="rgba(255, 255, 255, 0.3)"
              strokeWidth={1 + Math.abs(connectionStrength) * 2}
              opacity={0.3 + Math.abs(connectionStrength) * 0.4}
              animate={{
                strokeDasharray: isActive ? "5,5" : "0,0",
                strokeDashoffset: isActive ? [0, -10] : 0
              }}
              transition={{
                strokeDashoffset: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            />
          );
        })}
        
        {/* Chakra nodes */}
        {CHAKRAS.map((chakra, index) => (
          <ChakraNode
            key={chakra.id}
            chakra={chakra}
            energy={chakraEnergies[index] || 0}
            influence={influences[index] || 0}
            isHovered={hoveredChakra?.id === chakra.id}
            onHover={setHoveredChakra}
            size={size}
          />
        ))}
        
        {/* Central resonance indicator */}
        {isResonating && (
          <motion.circle
            r={10}
            fill="rgba(255, 255, 255, 0.8)"
            animate={{
              r: [10, 20, 10],
              opacity: [0.8, 0.3, 0.8]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.svg>
      
      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredChakra && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full mt-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs"
          >
            <h3 className="font-bold text-lg" style={{ color: hoveredChakra.color }}>
              {hoveredChakra.name} Chakra
            </h3>
            <p className="text-sm text-gray-600 italic mb-2">
              {hoveredChakra.sanskrit} - "{hoveredChakra.mantra}"
            </p>
            <p className="text-sm text-gray-800">
              {hoveredChakra.purpose}
            </p>
            <div className="mt-2 text-xs text-gray-500">
              Energy: {((chakraEnergies[hoveredChakra.id - 1] || 0) * 100).toFixed(1)}%
              {influences[hoveredChakra.id - 1] > 0 && (
                <span className="ml-2">
                  Influence: {(influences[hoveredChakra.id - 1] * 100).toFixed(1)}%
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Resonance state indicator */}
      {isResonating && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute -top-8 text-center"
        >
          <span className="text-sm text-purple-600 font-medium">
            ✨ Chakras in Resonance ✨
          </span>
        </motion.div>
      )}
    </div>
  );
};

export default ChakraRing; 