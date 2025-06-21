"use client";
import React from "react";
import GreekChakra from "./GreekChakra";
import { motion } from "framer-motion";

const Explanation = () => (
  <motion.section 
    id="explanation"
    className="w-full flex flex-col items-center justify-center py-24" 
    style={{ fontFamily: 'Merriweather, serif' }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <div className="text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow ancient-futuristic-title">The Ancient Wisdom Behind Nuvidya</h1>
      <p className="text-lg md:text-xl text-black mb-12 max-w-3xl mx-auto">
        Nuvidya draws inspiration from Chakra, an ancient vedic knowledge that has been lost over time. It represents the flow of energy in living systems, a framework we use to design and align intelligent systems in a more humane way.
      </p>
    </div>
    <GreekChakra />
    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
    `}</style>
  </motion.section>
);

export default Explanation; 