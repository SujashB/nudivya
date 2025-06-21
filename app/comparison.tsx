"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const data = [
  ["OpenAI / GPT", "Transformer, RLHF, API Cloud", "❌ Limited/Closed", "Centralized, Fast", "Productization, Monetization"],
  ["Anthropic / Claude", "Constitutional AI, RLHF", "❌ Closed", "Aligned, Controlled", "Safety through Central Oversight"],
  ["Meta / LLaMA", "Transformer, Open Weights", "⚠️ Open but Guarded", "Competitive, Fast", "Research Leadership"],
  ["Google / Gemini", "Multimodal, Internal TPU Core", "❌ Fully Closed", "Fast, Proprietary", "Market Domination"],
  ["Nuvidya", "Chakra-Centric Modular Agents, P2P AI Mesh, Transparent Reasoning", "✅ Fully Open", "Community-Governed, Fast", "AI that Aligns with Human Values"],
];

const headers = [
  "AI Orientation",
  "Core Technologies",
  "Open-Source",
  "Development",
  "Final Goal",
];

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Comparison = () => (
  <motion.section 
    id="comparison"
    className={`w-full flex flex-col items-center justify-center px-2 py-0 min-h-screen ${merriweather.className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariants}
  >
    <motion.h1 
      className="text-4xl md:text-5xl font-extrabold text-[#3a2a13] mb-16 text-center drop-shadow ancient-futuristic-title"
      variants={itemVariants}
    >
      How is Nuvidya Different?
    </motion.h1>
    <motion.div 
      className="w-[90vw] max-w-5xl flex flex-col items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl px-6 py-8 mb-4 transition-all duration-500 border-2 neon-glass"
      variants={itemVariants}
    >
      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full border-separate border-spacing-y-1 bg-white/10 backdrop-blur-md rounded-xl shadow-lg">
          <motion.thead variants={containerVariants}>
            <tr>
              {headers.map((header) => (
                <motion.th 
                  key={header} 
                  className="px-3 py-2 bg-white/10 backdrop-blur-md border-b-2 text-[#7c5c2b] text-base font-bold text-center shadow-md ancient-futuristic-title"
                  variants={itemVariants}
                >
                  {header}
                </motion.th>
              ))}
            </tr>
          </motion.thead>
          <motion.tbody variants={containerVariants}>
            {data.map((row, i) => (
              <motion.tr 
                key={i} 
                className={i === 4 ? "bg-[#e6f7ff]/40 backdrop-blur-md" : "bg-white/10 backdrop-blur-md"}
                variants={itemVariants}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-3 py-3 border text-center text-sm md:text-base ${i === 4 ? "font-extrabold text-[#1a4a5c]" : "text-[#3a2a13]"}`}
                    style={i === 4 ? { background: 'linear-gradient(90deg, #e6f7ff88 60%, #f5ecd7 100%)', boxShadow: '0 0 8px #3ecfff88' } : {}}
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>
      <style jsx>{`
        .ancient-futuristic-title {
          text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
          letter-spacing: 0.08em;
        }
        .neon-glass {
          box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
        }
      `}</style>
    </motion.div>
  </motion.section>
);

export default Comparison; 