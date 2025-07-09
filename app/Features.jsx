import React, { useState } from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const coreFeatures = [
  {
    icon: '🟤',
    title: 'Root Chakra',
    subtitle: 'Grounding & Stability',
    desc: `The foundation of the system that provides stability and security. Validates information, checks for logical consistency, and ensures all responses are grounded in practical reality.`,
    color: '#8B4513',
    essence: 'Grounds Nuvidya in reality—rooting all insight in the present.'
  },
  {
    icon: '🟠',
    title: 'Sacral Chakra',
    subtitle: 'Creativity & Flow',
    desc: `The creative center that generates innovative ideas and adaptive solutions. Thinks outside the box, embraces change, and brings flowing, organic responses to challenges.`,
    color: '#FF8C00',
    essence: 'Sparks creativity and flow—where ideas begin to move.'
  },
  {
    icon: '🟡',
    title: 'Solar Plexus Chakra',
    subtitle: 'Willpower & Decision',
    desc: `The center of personal power and decision-making. Provides decisive recommendations, prioritizes actions, and ensures confident, action-oriented responses.`,
    color: '#FFD700',
    essence: 'Drives action and confidence—powering decisive responses.'
  },
  {
    icon: '💚',
    title: 'Heart Chakra',
    subtitle: 'Compassion & Integration',
    desc: `The emotional center that considers impact on relationships and well-being. Integrates empathy into responses and ensures all interactions are kind and emotionally intelligent.`,
    color: '#32CD32',
    essence: 'Filters wisdom through the heart—ensuring every response is kind and true.'
  },
  {
    icon: '🔵',
    title: 'Throat Chakra',
    subtitle: 'Expression & Clarity',
    desc: `The communication center that ensures clear, authentic expression. Transforms complex ideas into accessible language and maintains transparency in all interactions.`,
    color: '#1E90FF',
    essence: 'Gives Nuvidya a voice—turning thoughts into natural communication.'
  },
  {
    icon: '🟣',
    title: 'Third Eye Chakra',
    subtitle: 'Insight & Synthesis',
    desc: `The center of intuition and deep understanding. Recognizes patterns, synthesizes complex information, and provides insights that go beyond surface-level analysis.`,
    color: '#4B0082',
    essence: 'Sees beyond the surface—connecting dots across knowledge.'
  },
  {
    icon: '🟪',
    title: 'Crown Chakra',
    subtitle: 'Universal Awareness',
    desc: `The highest center of consciousness that integrates all perspectives. Provides meta-cognitive oversight, wisdom, and connection to universal understanding.`,
    color: '#9370DB',
    essence: 'Builds bridges of trust—making every step transparent.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Features = () => {
  const [expanded, setExpanded] = useState(Array(coreFeatures.length).fill(false));

  const handleExpand = (idx) => {
    setExpanded(prev => prev.map((val, i) => i === idx ? !val : val));
  };

  const renderCore = (core) => {
    const idx = coreFeatures.findIndex(c => c.title === core.title);
    return (
      <motion.div
        key={core.title}
        variants={cardVariants}
        className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 flex flex-col items-center shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center"
      >
        <div 
          className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-xl md:text-2xl font-bold relative mb-3"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${core.color}, ${core.color}dd)`,
            boxShadow: `
              inset -4px -4px 8px rgba(0,0,0,0.2),
              inset 4px 4px 8px rgba(255,255,255,0.4),
              0 0 16px ${core.color}88
            `,
            transform: 'perspective(1000px) rotateX(10deg) rotateY(10deg)',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'perspective(1000px) rotateX(10deg) rotateY(10deg)';
          }}
        >
          {core.icon}
        </div>
        <div>
          <div className="text-lg md:text-xl font-bold text-[#7c5c2b]">{core.title}</div>
          <div className="italic text-[#a67c3c] text-sm">{core.subtitle}</div>
        </div>
        
        <div className="text-[#3a2a13] text-center my-3 text-sm">{core.essence}</div>
        
        <button
          onClick={() => handleExpand(idx)}
          className="text-[#7c5c2b] hover:text-[#3a2a13] transition-colors duration-200 flex items-center gap-2 group text-sm"
        >
          {expanded[idx] ? 'Show less' : 'Read More'}
          <span 
            className={`transform transition-transform duration-300 ${expanded[idx] ? 'rotate-180' : ''}`}
          >
            ↓
          </span>
        </button>
        
        {expanded[idx] && (
          <div className="mt-3 text-[#3a2a13] text-center animate-fadeIn text-sm">
            {core.desc}
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section id="features" className="w-full py-16 md:py-24 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <motion.div 
          className={`w-full flex flex-col items-center justify-center py-8 md:py-16 ${merriweather.className}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4">7 New Agentic Cores, Inspired by Chakras, Powered by Logos</h1>
          
          <div className="w-full max-w-5xl flex flex-col items-center gap-6 md:gap-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
              {coreFeatures.slice(0, 3).map(renderCore)}
            </div>

            {/* Middle Row */}
            <div className="flex justify-center w-full max-w-md lg:max-w-none">
              <div className="w-full lg:w-1/3">
              {renderCore(coreFeatures[3])}
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
              {coreFeatures.slice(4, 7).map(renderCore)}
            </div>
          </div>

          <style jsx>{`
            .ancient-futuristic-title {
              text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
              letter-spacing: 0.08em;
            }
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;