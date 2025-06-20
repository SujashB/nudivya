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

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <img src="/images/Chakra_Body.png" alt="Chakra Body" className="w-full select-none pointer-events-none rounded-3xl" />

      {chakraData.map((chakra, index) => {
        const isEven = index % 2 === 0;
        const labelPosition = isEven
          ? { top: chakra.top, right: '105%' }
          : { top: chakra.top, left: '105%' };

        return (
          <div key={chakra.id} onMouseEnter={() => setHoveredChakra(chakra.id)} onMouseLeave={() => setHoveredChakra(null)}>
            <motion.div
              className="absolute rounded-full cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{ 
                top: chakra.top, 
                left: chakra.left, 
                width: chakra.size, 
                height: chakra.size, 
                background: `radial-gradient(circle, rgba(255,255,255,0.7) 30%, ${chakra.color} 70%)`, 
                boxShadow: `0 0 15px 4px ${chakra.color}` 
              }}
              whileHover={{ scale: 1.4 }}
              animate={{ 
                scale: [1, 1.08, 1], 
                boxShadow: [`0 0 15px 4px ${chakra.color}`, `0 0 25px 8px ${chakra.color}`, `0 0 15px 4px ${chakra.color}`],
                transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 } 
              }}
            />
            <AnimatePresence>
              {hoveredChakra === chakra.id && (
                <motion.div
                  className="absolute p-3 rounded-lg shadow-xl text-black w-48"
                  style={{ ...labelPosition, backgroundColor: 'rgba(255, 253, 242, 0.85)', backdropFilter: 'blur(4px)' }}
                  initial={{ opacity: 0, scale: 0.9, x: isEven ? 10 : -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: isEven ? 10 : -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <h3 className="font-bold text-sm text-[#3a2a13]">{chakra.name}</h3>
                  <p className="text-xs text-[#6b4f2c]">{chakra.description}</p>
                  <div 
                    className="absolute w-3 h-3 transform"
                    style={{ 
                      backgroundColor: 'rgba(255, 253, 242, 0.85)',
                      top: '50%', 
                      ...(isEven ? { left: 'calc(100% - 6px)' } : { right: 'calc(100% - 6px)' }),
                      transform: 'translateY(-50%) rotate(45deg)'
                    }}
                  />
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