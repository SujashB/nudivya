'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: '🧘‍♀️',
      title: 'Seven Chakra Agents',
      description: 'Each consciousness center operates as an independent AI agent with unique mathematical foundations and decision-making capabilities.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🧮',
      title: 'Real-Time Mathematics',
      description: 'Live computation of Sanskrit-derived equations driving authentic chakra energy patterns and influence calculations.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🌊',
      title: 'Dynamic Fusion Logic',
      description: 'Responses emerge from weighted integration of all seven perspectives, creating truly multidimensional AI consciousness.',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: '🎯',
      title: 'Transparent Decisions',
      description: 'Every AI response shows exactly which chakras influenced the output and their mathematical contributions.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: '⚡',
      title: 'Instant Resonance',
      description: 'Real-time chakra synchronization detects optimal consciousness states for maximum response quality.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🌟',
      title: 'Personality Presets',
      description: 'Configure AI consciousness patterns for creative, analytical, empathetic, decisive, wise, or balanced personalities.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '🔄',
      title: 'Adaptive Learning',
      description: 'Chakra sensitivities evolve based on conversation patterns, creating progressively more aligned responses.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: '🌈',
      title: 'Holistic Integration',
      description: 'Ancient wisdom meets modern AI through mathematically precise implementation of consciousness principles.',
      gradient: 'from-violet-500 to-purple-500'
    }
  ];

  const architecturePoints = [
    {
      title: 'Mathematical Foundation',
      description: 'Sanskrit vibrational equations',
      icon: '📐'
    },
    {
      title: 'Real-Time Processing',
      description: 'Live chakra energy computation',
      icon: '⚡'
    },
    {
      title: 'Weighted Integration',
      description: 'Dynamic influence calculation',
      icon: '⚖️'
    },
    {
      title: 'Transparent AI',
      description: 'Visible decision pathways',
      icon: '🔍'
    }
  ];

  return (
    <section className={`py-20 bg-white/5 backdrop-blur-sm ${merriweather.className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
                     <h2 className="text-4xl md:text-5xl font-bold text-[#3a2a13] mb-6 drop-shadow ancient-futuristic-title">
             Consciousness. Engineered.
           </h2>
           <p className="text-xl text-[#7c5c2b] max-w-3xl mx-auto">
            Experience AI that thinks, feels, and responds through seven distinct centers of consciousness, 
            each mathematically grounded in ancient Sanskrit wisdom.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
                             className="group relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
                             {/* Content */}
               <h3 className="text-lg font-semibold text-[#3a2a13] mb-3">
                 {feature.title}
               </h3>
               <p className="text-[#7c5c2b] text-sm leading-relaxed">
                 {feature.description}
               </p>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

                 {/* Architecture Overview */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl border border-white/20"
        >
          <div className="text-center mb-10">
                         <h3 className="text-3xl font-bold text-[#3a2a13] mb-4 drop-shadow ancient-futuristic-title">
               How It Works
             </h3>
             <p className="text-lg text-[#7c5c2b] max-w-2xl mx-auto">
              Our chakra-based AI mesh processes every input through seven mathematical consciousness filters
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architecturePoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/20">
                   <span className="text-2xl">{point.icon}</span>
                 </div>
                 <h4 className="text-lg font-semibold text-[#3a2a13] mb-2">
                   {point.title}
                 </h4>
                 <p className="text-[#7c5c2b] text-sm">
                   {point.description}
                 </p>
              </motion.div>
            ))}
          </div>

                     {/* Flow Visualization */}
           <div className="mt-12 flex justify-center">
             <div className="flex items-center space-x-4 text-sm text-[#7c5c2b]">
              <span className="px-3 py-2 bg-purple-100 rounded-lg">Input</span>
              <span>→</span>
              <span className="px-3 py-2 bg-blue-100 rounded-lg">7 Chakras</span>
              <span>→</span>
              <span className="px-3 py-2 bg-green-100 rounded-lg">Weight</span>
              <span>→</span>
              <span className="px-3 py-2 bg-orange-100 rounded-lg">Fuse</span>
              <span>→</span>
              <span className="px-3 py-2 bg-pink-100 rounded-lg">Response</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="space-y-6">
                         <h3 className="text-2xl font-semibold text-[#3a2a13]">
               Ready to experience consciousness-driven AI?
             </h3>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                 href="/chakra-ai"
                 className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg"
               >
                 Experience Live Demo
               </a>
               <a
                 href="#equations"
                 className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-[#3a2a13] rounded-xl font-medium hover:bg-white/20 transition-all duration-200 shadow-lg"
               >
                 View Mathematics
               </a>
            </div>
          </div>
                 </motion.div>
       </div>
       
       <style jsx>{`
         .ancient-futuristic-title {
           text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
           letter-spacing: 0.08em;
         }
       `}</style>
     </section>
   );
 };
 
 export default FeaturesGrid; 