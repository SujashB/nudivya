import React from "react";
import Image from "next/image";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const useCases = [
  {
    icon: "💬",
    title: "Community Forum Moderation",
  },
  {
    icon: "😊",
    title: "Personalized Mental Health Check-Ins",
  },
  {
    icon: "💹",
    title: "Transparent Financial Advice",
  },
  {
    icon: "🎓",
    title: "Adaptive E-Learning Tutor",
  },
  {
    icon: "🌾",
    title: "Edge AI for Smart Agriculture",
  },
  {
    icon: "📜",
    title: "Compliance-Ready Document Drafting",
  }
];

const radius = 280; // px
const centerX = 350;
const centerY = 350;
const cardW = 170;
const cardH = 170;

const Applications = () => {
  return (
    <motion.div 
      id="applications"
      className={`w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 ${merriweather.className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      >
        How People Use Nuvidya
      </motion.h1>
      
      {/* Mobile view - Grid */}
      <motion.div 
        className="block lg:hidden w-full max-w-2xl"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {useCases.map((useCase) => (
            <motion.div
              key={useCase.title}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-[#bfa76a]/20"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              <div className="text-4xl mb-3 text-center">{useCase.icon}</div>
              <h3 className="text-base font-bold text-[#3a2a13] text-center">{useCase.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Desktop view - Circular layout */}
      <motion.div 
        className="hidden lg:block relative w-[700px] h-[700px] items-center justify-center mx-auto"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
      >
        {/* Central Node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#fffbe6] shadow-xl flex items-center justify-center border-4 border-[#e7d7b6] z-10 overflow-hidden"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
        >
          <Image src="/images/emblem.png" alt="Nuvidya Emblem" width={96} height={96} className="object-cover" />
        </motion.div>
        {/* Lines from center to each card */}
        {useCases.map((_, i) => {
          const angle = (i / useCases.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <svg key={i} className="absolute left-0 top-0 pointer-events-none" width={700} height={700} style={{zIndex: 1}}>
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="#bfa76a"
                strokeWidth={3}
                opacity={0.5}
              />
            </svg>
          );
        })}
        {/* Stationary Cards */}
        {useCases.map((useCase, i) => {
          const angle = (i / useCases.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle) - cardW / 2;
          const y = centerY + radius * Math.sin(angle) - cardH / 2;
          return (
            <motion.div
              key={useCase.title}
              className="absolute"
              style={{
                width: cardW,
                height: cardH,
                left: x,
                top: y
              }}
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
            >
              <div className="border rounded-lg p-4 bg-[#f4d03f]/5 backdrop-blur-[2px] shadow-xl flex flex-col items-center justify-center w-full h-full">
                <div className="text-3xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-bold text-[#3a2a13] mb-2 text-center">{useCase.title}</h3>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      <style jsx>{`
        .ancient-futuristic-title {
          text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
          letter-spacing: 0.08em;
        }
      `}</style>
    </motion.div>
  );
};

export default Applications; 