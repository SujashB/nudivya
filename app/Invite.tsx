'use client';
import React from 'react';
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Invite = () => {
  return (
    <motion.div 
      id="invite"
      className={`w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 ${merriweather.className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-6 drop-shadow ancient-futuristic-title">
            Awaken the Network Within
          </h1>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
          >
            <button className="bg-[#f4e9d8] text-[#3a2a13] font-bold py-3 px-6 md:px-8 rounded-lg shadow-md border border-[#d1c0a8] hover:bg-[#e9dccb] transition-colors duration-300 text-sm md:text-base">
              Get Started
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center lg:justify-end w-full"
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <div className="w-full max-w-sm md:max-w-md rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden neon-glass-video border-2 border-white/10 aspect-video">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
            >
              <source src="/video.mp4" type="video/mp4" />
              <source src="/video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
      <style jsx>{`
        .ancient-futuristic-title {
          text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
          letter-spacing: 0.08em;
        }
        .neon-glass-video {
          box-shadow: 0 0 0 2px transparent, 0 0 16px 4px #BEC5A488, 0 0 32px 8px #BEC5A444;
        }
        @media (max-width: 768px) {
          .neon-glass-video {
            box-shadow: 0 0 0 1px transparent, 0 0 8px 2px #BEC5A488, 0 0 16px 4px #BEC5A444;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default Invite; 