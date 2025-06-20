"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface SpacerProps {
  imageName: string;
}

const Spacer: React.FC<SpacerProps> = ({ imageName }) => {
  return (
    <motion.div 
      className="flex justify-center items-center py-8"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <img src={`/images/${imageName}`} alt="Section Spacer" className="w-full max-w-[10rem]" />
    </motion.div>
  );
};

export default Spacer; 