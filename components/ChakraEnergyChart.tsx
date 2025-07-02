'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ChakraEnergyChartProps {
  influences: number[];
  energies: number[];
  isAnimated?: boolean;
  showLabels?: boolean;
  compact?: boolean;
}

const CHAKRA_INFO = [
  { name: 'Root', sanskrit: 'LAM', color: '#8B4513', emoji: '🟤' },
  { name: 'Sacral', sanskrit: 'VAM', color: '#FF8C00', emoji: '🟠' },
  { name: 'Solar', sanskrit: 'RAM', color: '#FFD700', emoji: '🟡' },
  { name: 'Heart', sanskrit: 'YAM', color: '#32CD32', emoji: '💚' },
  { name: 'Throat', sanskrit: 'HAM', color: '#1E90FF', emoji: '🔵' },
  { name: 'Third Eye', sanskrit: 'OM', color: '#4B0082', emoji: '🟣' },
  { name: 'Crown', sanskrit: 'Silence', color: '#9370DB', emoji: '🟪' }
];

const ChakraEnergyChart: React.FC<ChakraEnergyChartProps> = ({
  influences,
  energies,
  isAnimated = true,
  showLabels = true,
  compact = false
}) => {
  const maxInfluence = Math.max(...influences, 0.1);
  const topThreeIndices = influences
    .map((influence, index) => ({ influence, index }))
    .sort((a, b) => b.influence - a.influence)
    .slice(0, 3)
    .map(item => item.index);

  if (compact) {
    return (
      <div className="flex items-center space-x-2">
        {CHAKRA_INFO.map((chakra, index) => {
          const influence = influences[index] || 0;
          const isTopThree = topThreeIndices.includes(index);
          
          return (
            <div key={index} className="flex items-center space-x-1">
              <span className="text-sm">{chakra.emoji}</span>
              <motion.div
                className="h-2 bg-gray-200 rounded-full overflow-hidden"
                style={{ width: '30px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: chakra.color,
                    boxShadow: isTopThree ? `0 0 8px ${chakra.color}` : 'none'
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(influence / maxInfluence) * 100}%` }}
                  transition={{
                    duration: isAnimated ? 0.8 : 0,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
              {influence > 0.05 && (
                <span className="text-xs text-gray-600 min-w-[30px]">
                  {(influence * 100).toFixed(0)}%
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full space-y-3">
      {showLabels && (
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          Chakra Influence Weights (α_k)
        </h3>
      )}
      
      <div className="space-y-2">
        {CHAKRA_INFO.map((chakra, index) => {
          const influence = influences[index] || 0;
          const energy = energies[index] || 0;
          const isTopThree = topThreeIndices.includes(index);
          
          return (
            <motion.div
              key={index}
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Chakra info */}
              <div className="flex items-center space-x-2 w-24">
                <span className="text-lg">{chakra.emoji}</span>
                <div className="text-sm">
                  <div className="font-medium text-gray-800">{chakra.name}</div>
                  <div className="text-xs text-gray-500">{chakra.sanskrit}</div>
                </div>
              </div>
              
              {/* Energy bar background */}
              <div className="flex-1 relative">
                <motion.div
                  className="h-6 bg-gray-200 rounded-full overflow-hidden relative"
                  style={{
                    boxShadow: isTopThree ? `inset 0 0 0 2px ${chakra.color}` : 'none'
                  }}
                >
                  {/* Influence bar */}
                  <motion.div
                    className="h-full rounded-full relative overflow-hidden"
                    style={{ backgroundColor: chakra.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(influence / maxInfluence) * 100}%` }}
                    transition={{
                      duration: isAnimated ? 0.8 : 0,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                  >
                    {/* Energy pulse overlay */}
                    {Math.abs(energy) > 0.3 && (
                      <motion.div
                        className="absolute inset-0 bg-white rounded-full"
                        animate={{
                          opacity: [0, 0.4, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </motion.div>
                  
                  {/* Glow effect for top chakras */}
                  {isTopThree && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${chakra.color}40, transparent)`
                      }}
                      animate={{
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              </div>
              
              {/* Percentage display */}
              <div className="w-16 text-right">
                <motion.span
                  className={`text-sm font-medium ${
                    isTopThree ? 'text-gray-900' : 'text-gray-600'
                  }`}
                  animate={{
                    scale: isTopThree ? [1, 1.1, 1] : 1,
                    fontWeight: isTopThree ? 'bold' : 'normal'
                  }}
                  transition={{
                    duration: 0.3
                  }}
                >
                  {(influence * 100).toFixed(1)}%
                </motion.span>
                {Math.abs(energy) > 0.1 && (
                  <div className="text-xs text-gray-400">
                    E: {energy.toFixed(2)}
                  </div>
                )}
              </div>
              
              {/* Top 3 indicator */}
              {isTopThree && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">
                    {topThreeIndices.indexOf(index) + 1}
                  </span>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Summary for top influencers */}
      {topThreeIndices.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200"
        >
          <p className="text-sm text-gray-700">
            <span className="font-medium">✨ Primary influences:</span>{' '}
            {topThreeIndices.map((index, i) => (
              <span key={index}>
                {CHAKRA_INFO[index].emoji} {CHAKRA_INFO[index].name} ({(influences[index] * 100).toFixed(0)}%)
                {i < topThreeIndices.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ChakraEnergyChart; 