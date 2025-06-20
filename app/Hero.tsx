"use client"
import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";
import ChakraNetLarge from "./ChakraNetLarge";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Hero: React.FC = () => {
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
      id="home"
      className={`min-h-screen w-full flex flex-col items-center justify-center px-2 py-0 ${merriweather.className}`}
      style={{
        background: 'none',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="w-[90vw] max-w-5xl flex flex-col md:flex-row items-center justify-center">
        <motion.div 
          className="flex-1 flex flex-col justify-center items-start text-left pr-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold text-[#3a2a13] mb-4 tracking-wide drop-shadow-lg"
            style={{
              lineHeight: 1.1,
              textShadow: '0 0 20px rgba(58, 42, 19, 0.3), 0 0 40px rgba(58, 42, 19, 0.2)'
            }}
            variants={childVariants}
          >
            NUVIDYA
          </motion.h1>
          <motion.div
            className="text-lg md:text-xl text-[#3a2a13]"
            style={{
              textShadow: '0 0 10px rgba(58, 42, 19, 0.2), 0 0 20px rgba(58, 42, 19, 0.1)'
            }}
            variants={childVariants}
          >
            Nuvidya is a peer-to-peer AI network which shares intelligence without gatekeepers, and is designed to evolve through the people who use it.
          </motion.div>
        </motion.div>
        <div className="flex-1 flex items-center justify-end mt-8 md:mt-0">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 shadow-lg w-[500px] h-[540px]">
            <ChakraNetLarge />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 