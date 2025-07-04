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
    icon: 'M',
    title: 'Mularebus',
    subtitle: 'Your system check-in.',
    desc: `Watches over your device's health, speed, and network strength—then decides how much AI power should be used so nothing slows down or overheats.`,
    color: '#FF3B30',
    essence: 'Grounds Nuvidya in reality—rooting all insight in the present.'
  },
  {
    icon: 'V',
    title: 'Svathymos',
    subtitle: 'The emotional translator.',
    desc: `Understands how you feel and what matters to you. Makes sure the AI responds in a way that fits your mood, motivation, and personal values.`,
    color: '#FF9500',
    essence: 'Sparks creativity and flow—where ideas begin to move.'
  },
  {
    icon: 'Λ',
    title: 'VākSopher',
    subtitle: 'The emmoneun voice',
    desc: `Takes thoughts, images, or ideas and turns them into words—like a digital tongue that's fluent in your way of speaking, writing, or sharing.`,
    color: '#007AFF',
    essence: 'Gives Nuvidya a voice—turning thoughts into natural communication.'
  },
  {
    icon: 'Σ',
    title: 'AjhaPhrōnésis',
    subtitle: 'The memory keeper',
    desc: `Stores how the system made decisions so they can't be tampered with later. It's your AI's brain journal—secure, verifiable, and unchangeable.`,
    color: '#AF52DE',
    essence: 'Preserves wisdom—keeping every insight safe and true.'
  },
  {
    icon: 'A',
    title: 'Anāhsophia',
    subtitle: 'The wisdom filter.',
    desc: `Before answering, it asks: "Is this kind? Is this ethical? Is this true?" It's like a conscience that blends gut instinct with what's right.`,
    color: '#34C759',
    essence: 'Filters wisdom through the heart—ensuring every response is kind and true.'
  },
  {
    icon: 'Θ',
    title: 'VisūNoesis',
    subtitle: 'The synthesizer',
    desc: `Pulls from different sources—news, code, facts—and combines them in a way that makes sense. It sees patterns and helps you see the full picture.`,
    color: '#5856D6',
    essence: 'Sees beyond the surface—connecting dots across knowledge.'
  },
  {
    icon: 'Φ',
    title: 'SahaPhrónesis',
    subtitle: 'The trust gate.',
    desc: `Makes sure every AI decision is trackable and can be checked by others. Think of it like a public ledger that builds trust—no hidden tricks.`,
    color: '#5AC8FA',
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