"use client";
import React from "react";
import GreekChakra from "./GreekChakra";
import { motion } from "framer-motion";

const Explanation = () => (
  <motion.section 
    id="explanation"
    className="w-full py-24" 
    style={{ fontFamily: 'Merriweather, serif' }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3a2a13] mb-4 drop-shadow ancient-futuristic-title">
          The Ancient Wisdom Behind Nuvidya
        </h1>
      </div>

      {/* Side by side content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl text-[#7c5c2b] leading-relaxed">
            Nuvidya draws inspiration from <strong className="text-[#3a2a13]">Chakra</strong>, an ancient vedic knowledge that has been lost over time. It represents the flow of energy in living systems, a framework we use to design and align intelligent systems in a more humane way.
          </p>
          
          <p className="text-md md:text-lg text-[#7c5c2b] leading-relaxed">
            Each of the seven chakras corresponds to different aspects of consciousness and intelligence. By mapping these ancient energy centers to AI agents, we create systems that don't just process information—they resonate with human awareness.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg">
            <h3 className="text-lg font-semibold text-[#3a2a13] mb-3">
              🌟 Why This Matters
            </h3>
            <p className="text-[#7c5c2b] text-sm leading-relaxed">
              Traditional AI operates in isolation from human consciousness. Our chakra-based approach ensures that artificial intelligence remains grounded in wisdom traditions that have guided human development for millennia.
            </p>
          </div>
        </motion.div>

        {/* Chakra visualization */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20 max-w-md w-full">
            <GreekChakra />
          </div>
        </motion.div>
      </div>
    </div>

    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
    `}</style>
  </motion.section>
);

export default Explanation; 