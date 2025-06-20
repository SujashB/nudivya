import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const useCases = [
  {
    icon: "🧘",
    title: "Digital Town Halls",
    whoFor: "For Ivcommunities",
    description: [
      "Mulárebu & AjhaPhró-",
      "For muilti-persuticitves",
      "Mulare and AjjaPubs",
      "For isat-lelives-and",
      "decision-making fie."
    ]
  },
  {
    icon: "⚖️",
    title: "AI Companions With Values",
    whoFor: "Powered by:",
    description: [
      "Svathymos & Anásonos",
      "Powered by:Svathymos",
      "powers AI learns way",
      "with values.",
      "ùndida listenen'",
      "enpathy, mirror ćal."
    ]
  },
  {
    icon: "📜",
    title: "Education Moderators",
    whoFor: "For Students",
    description: [
      "Local u, teachers",
      "Examines AI ecliencial",
      "material's emotionally",
      "and ethical perspectives",
      "Brings ifocalonc-",
      "smothly aftend fuint."
    ]
  },
  {
    icon: "⚖️",
    title: "Transparent AI Decisions",
    whoFor: "For legal ins",
    description: [
      "Provides a public kéćis",
      "record of each decision",
      "'s reasoning.",
      "Powered a public",
      "record of each decis-",
      "ion,"
    ]
  },
  {
    icon: "♀️",
    title: "Local Policy Decisions",
    whoFor: "For citizen advocates",
    description: []
  },
  {
    icon: "⚖️",
    title: "Local Policy Aciwions",
    whoFor: "For Anakśophia-SahaPhro-",
    description: []
  }
];

const radius = 180; // px
const centerX = 250;
const centerY = 250;
const cardW = 170;
const cardH = 170;

const Applications = () => {
  return (
    <motion.div 
      className={`w-full flex flex-col items-center justify-center py-24 ${merriweather.className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <motion.h1 
        className="text-4xl md:text-5xl font-extrabold text-[#3a2a13] mb-16 text-center drop-shadow ancient-futuristic-title"
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
      >
        How People Use Nuvidya
      </motion.h1>
      <motion.div 
        className="relative w-[500px] h-[500px] flex items-center justify-center mx-auto"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
      >
        {/* Central Node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#fffbe6] shadow-xl flex items-center justify-center border-4 border-[#e7d7b6] z-10"
          variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
        >
          <span className="text-3xl font-bold text-[#3a2a13]">Nuvidya</span>
        </motion.div>
        {/* Lines from center to each card */}
        {useCases.map((_, i) => {
          const angle = (i / useCases.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <svg key={i} className="absolute left-0 top-0 pointer-events-none" width={500} height={500} style={{zIndex: 1}}>
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
                <p className="text-[#5a442b] italic mb-2 text-sm text-center">{useCase.whoFor}</p>
                {useCase.description.map((line, i) => (
                  <p key={i} className="text-[#3a2a13] mb-1 text-sm text-center">
                    {line}
                  </p>
                ))}
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