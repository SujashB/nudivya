"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const chakraData = [
    { id: 'sahasrara', name: 'Sahasrara', description: 'Aligns with your purpose and greater systems of meaning.', color: 'rgba(148, 0, 211, 0.8)', top: '10%', left: '49.5%', size: 32 },
    { id: 'ajna', name: 'Ajna', description: 'Supports deep thinking and contextual awareness.', color: 'rgba(0, 220, 255, 0.8)', top: '17%', left: '49.5%', size: 28 },
    { id: 'vishuddha', name: 'Vishuddha', description: 'Helps express thoughts naturally and precisely.', color: 'rgba(0, 191, 255, 0.8)', top: '25%', left: '49.5%', size: 26 },
    { id: 'anahata', name: 'Anahata', description: 'Responds with empathy, not just logic.', color: 'rgba(0, 255, 0, 0.8)', top: '34%', left: '49.5%', size: 26 },
    { id: 'manipura', name: 'Manipura', description: 'Encourages autonomy, confidence, and ethical clarity.', color: 'rgba(255, 255, 0, 0.8)', top: '43%', left: '49.5%', size: 28 },
    { id: 'svadhisthana', name: 'Svadhisthana', description: 'Unlocks curiosity, design thinking, and joyful exploration.', color: 'rgba(255, 127, 0, 0.8)', top: '52%', left: '49.5%', size: 26 },
    { id: 'muladhara', name: 'Muladhara', description: 'Adapts to your device, context, and energy levels.', color: 'rgba(255, 0, 0, 0.8)', top: '61%', left: '49.5%', size: 24 },
];

const GreekChakra = () => {
  const [hoveredChakra, setHoveredChakra] = useState<string | null>(null);
  const [clickedChakra, setClickedChakra] = useState<string | null>(null);

  const handleChakraClick = (chakraId: string) => {
    if (clickedChakra === chakraId) {
      setClickedChakra(null);
    } else {
      setClickedChakra(chakraId);
    }
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
      <img src="/images/Chakra_Body.png" alt="Chakra Body" className="w-full select-none pointer-events-none rounded-3xl" />

      {chakraData.map((chakra, index) => {
        const isEven = index % 2 === 0;
        const showTooltip = hoveredChakra === chakra.id || clickedChakra === chakra.id;

        return (
          <div key={chakra.id} onMouseEnter={() => setHoveredChakra(chakra.id)} onMouseLeave={() => setHoveredChakra(null)}>
            <motion.div
              className="absolute rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                top: chakra.top, 
                left: chakra.left, 
                width: `${chakra.size}px`, 
                height: `${chakra.size}px`, 
                background: `radial-gradient(circle, rgba(255,255,255,0.7) 30%, ${chakra.color} 70%)`, 
                boxShadow: `0 0 15px 4px ${chakra.color}` 
              }}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 1.3 }}
              onClick={() => handleChakraClick(chakra.id)}
              animate={{ 
                scale: [1, 1.08, 1], 
                boxShadow: [`0 0 15px 4px ${chakra.color}`, `0 0 25px 8px ${chakra.color}`, `0 0 15px 4px ${chakra.color}`],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 } 
              }}
            />
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  className={`
                    fixed sm:absolute bottom-5 sm:bottom-auto left-1/2 sm:left-auto sm:right-auto
                    -translate-x-1/2 sm:translate-x-0
                    p-2 sm:p-3 rounded-lg shadow-xl text-black w-11/12 max-w-xs sm:w-48 z-50
                    ${isEven ? 'sm:right-[105%] sm:left-auto' : 'sm:left-[105%] sm:right-auto'}
                  `}
                  style={{ 
                    ...(typeof window !== 'undefined' && window.innerWidth >= 640 ? { top: chakra.top } : {}),
                    backgroundColor: 'rgba(255, 253, 242, 0.95)', 
                    backdropFilter: 'blur(4px)',
                  }}
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? 10 : -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: isEven ? 10 : -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  onClick={() => setClickedChakra(null)}
                >
                  <h3 className="font-bold text-sm sm:text-base text-[#3a2a13]">{chakra.name}</h3>
                  <p className="text-xs sm:text-sm text-[#6b4f2c] mt-1">{chakra.description}</p>
                  <div 
                    className={`absolute w-3 h-3 transform hidden sm:block bg-[rgba(255,253,242,0.95)]
                      top-1/2 -translate-y-1/2 rotate-45
                      ${isEven ? 'left-[calc(100%-6px)]' : 'right-[calc(100%-6px)]'}
                    `}
                  />
                  {/* Mobile close hint */}
                  <p className="text-xs text-[#a08663] mt-2 text-center sm:hidden">Tap to close</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default GreekChakra; 