"use client"
import React, { useEffect, useState } from "react";
import { Merriweather } from "next/font/google";
import {motion} from "framer-motion";
import ChakraNet from "./ChakraNet";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const LandingPage: React.FC = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.96 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.1 } },
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-center px-2 py-0 ${merriweather.className}`}
      style={{
        background: 'none',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="w-[90vw] max-w-5xl h-[75vh] flex flex-col items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md shadow-2xl px-6 py-8 mb-4 transition-all duration-500 mt-8">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col items-center justify-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-[#3a2a13] mb-2 tracking-wide text-center drop-shadow-lg"
              style={{
                lineHeight: 1.1,
                textShadow: '0 0 20px rgba(58, 42, 19, 0.3), 0 0 40px rgba(58, 42, 19, 0.2)'
              }}
              variants={childVariants}
            >
              NUVIDYA
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-bold text-[#3a2a13] mb-2 text-center mt-2"
              style={{
                textShadow: '0 0 15px rgba(58, 42, 19, 0.25), 0 0 30px rgba(58, 42, 19, 0.15)'
              }}
              variants={childVariants}
            >
              Where Ancient Wisdom Meets Modern Intelligence.
            </motion.h2>
            <motion.div
              className="text-lg md:text-xl text-[#3a2a13] text-center mb-0"
              style={{
                textShadow: '0 0 10px rgba(58, 42, 19, 0.2), 0 0 20px rgba(58, 42, 19, 0.1)'
              }}
              variants={childVariants}
            >
              Nuvidya is a peer-to-peer AI network which shares intelligence without gatekeepers, and is designed to evolve through the people who use it.
            </motion.div>
            <div className="flex flex-col items-center mt-6">
              <div className="animate-bounce text-2xl text-[#3a2a13] opacity-70">↓</div>
            </div>
          </motion.div>
          <div className="flex-1 flex items-center justify-end mt-6 md:mt-0 md:ml-8 w-full" style={{ marginTop: '-24px' }}>
            <ChakraNet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 