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
      className={`w-full flex flex-col items-center justify-center py-24 ${merriweather.className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <div className="w-[90vw] max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.div 
          className="flex-1 text-center md:text-left"
          variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3a2a13] mb-6 drop-shadow ancient-futuristic-title">
            Awaken the Network Within
          </h1>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center md:justify-end"
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden neon-glass-video border-2 border-white/10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
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
      `}</style>
    </motion.div>
  );
};

export default Invite; 