import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96] as const
    }
  }
};

const Applications = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full flex flex-col items-center justify-center py-8 ${merriweather.className}`}
    >
      <motion.div
        className="w-[90vw] max-w-5xl flex flex-col items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl px-6 py-8 mb-4 transition-all duration-500 mt-8 border-2 neon-glass"
      >
        <h1 className="text-3xl font-bold text-[#3a2a13] text-center mb-8">
          How People Use Nuvidya
        </h1>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow w-full"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              variants={cardVariants}
              className="border rounded-lg p-4 bg-[#f4d03f]/5 backdrop-blur-[2px] relative"
            >
              <div className="text-3xl mb-3">{useCase.icon}</div>
              <h3 className="text-lg font-bold text-[#3a2a13] mb-2">
                {useCase.title}
              </h3>
              <p className="text-[#5a442b] italic mb-2 text-sm">{useCase.whoFor}</p>
              {useCase.description.map((line, i) => (
                <p key={i} className="text-[#3a2a13] mb-1 text-sm">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </motion.div>

        {/* Greek Symbols */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-15 pointer-events-none">
          <div className="text-4xl mb-4 text-[#3a2a13]">Σ</div>
          <div className="text-4xl mb-4 text-[#3a2a13]">Θ</div>
          <div className="text-4xl mb-4 text-[#3a2a13]">Ψ</div>
          <div className="text-4xl text-[#3a2a13]">Δ</div>
        </div>

        <style jsx>{`
          .neon-glass {
            box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
          }
        `}</style>
      </motion.div>
    </motion.div>
  );
};

export default Applications; 