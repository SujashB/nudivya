'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";
import Latex from 'react-latex';

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

// LaTeX equation renderer component
const LaTeXEquation = ({ equation, className = "" }: { equation: string; className?: string }) => {
  return (
    <div className={`text-center bg-white/5 rounded-lg p-4 my-4 ${className}`}>
      <Latex displayMode={true}>{`$$${equation}$$`}</Latex>
    </div>
  );
};

const MathematicalFramework = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section 
      className={`w-full flex flex-col items-center justify-center px-4 py-16 md:py-24 ${merriweather.className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4"
        variants={itemVariants}
      >
        Mathematical Reasoning Behind Nuvidya
      </motion.h1>

      <div className="w-full max-w-6xl space-y-8">
        {/* Simple Explanation */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title">
            🧠 What Nuvidya Actually Does (Simple Explanation)
          </h2>
          <div className="text-[#3a2a13] space-y-4">
            <p>
              <strong>Nuvidya</strong> is a <strong>peer-to-peer AI mesh</strong> inspired by both chakras and decentralized systems like Cosmos. 
              Instead of a single AI model deciding what to say, <strong>seven different "core agents"</strong> each interpret a user's prompt 
              in a different way—based on emotional, creative, logical, or strategic principles.
            </p>
            
            <div className="bg-white/5 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-semibold text-[#7c5c2b] mb-4">🔄 Step-by-step Process:</h3>
              <ol className="space-y-2 text-sm">
                <li><strong>1.</strong> User asks a question or enters a prompt</li>
                <li><strong>2.</strong> The system sends this prompt to seven core agents</li>
                <li><strong>3.</strong> Each agent uses a math model that simulates how that core's energy behaves over time</li>
                <li><strong>4.</strong> Based on this, the agent responds with a partial answer</li>
                <li><strong>5.</strong> All seven answers are combined—weighted by their energy influence—into one final response</li>
                <li><strong>6.</strong> This process is logged transparently (on IPFS), and the community can tune the system (via DAO or config governance)</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Core Activation Equations */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <button
            onClick={() => toggleSection('activation')}
            className="w-full text-left"
          >
            <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title flex items-center">
              🧩 1. Core Activation Equations
              <span className="ml-4 text-sm">
                {expandedSection === 'activation' ? '▼' : '▶'}
              </span>
            </h2>
          </button>
          
          {expandedSection === 'activation' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[#3a2a13] space-y-4"
            >
              <p>
                Each core agent has an <strong>activation function</strong>:
              </p>
              <LaTeXEquation equation="E_k'(t)" />
              <p>
                Where <code>k ∈ &#123;1, 2, ..., 7&#125;</code> represents one of the cores.
              </p>
              <p>These functions:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Model each core's <strong>time-dependent energy</strong></li>
                <li>Include <strong>oscillations</strong>, <strong>growth</strong>, <strong>decay</strong>, <strong>integrals</strong>, and <strong>derivatives</strong></li>
                <li>Are <strong>modulated by vibrational sine waves</strong> tied to Sanskrit bija mantras</li>
              </ul>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-semibold text-[#7c5c2b] mb-2">Foundation Core (LAM):</h4>
                  <LaTeXEquation equation="E_1'(t) = \\sin(2\\pi \\cdot 0.5 \\cdot t) \\cdot |\\sin(2\\pi \\cdot 0.5 \\cdot t)|" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#7c5c2b] mb-2">Synthesis Core (Silence):</h4>
                  <LaTeXEquation equation="E_7'(t) = \\int_0^t 0.5e^{-0.5(t - s)} E_6(s)\\,ds \\cdot |\\sin(2\\pi \\cdot 0.1 \\cdot t)|" />
                </div>
              </div>
              
              <p className="text-sm text-[#7c5c2b] italic">
                These capture how Foundation is steady, Flow builds, Drive bursts, and Synthesis integrates all wisdom slowly.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Energy Weighting */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <button
            onClick={() => toggleSection('weighting')}
            className="w-full text-left"
          >
            <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title flex items-center">
              📊 2. Core Energy Weighting
              <span className="ml-4 text-sm">
                {expandedSection === 'weighting' ? '▼' : '▶'}
              </span>
            </h2>
          </button>
          
          {expandedSection === 'weighting' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[#3a2a13] space-y-4"
            >
              <p>
                Once you've computed the 7 core functions <code>E_k'(t)</code>, you integrate over time:
              </p>
              <LaTeXEquation equation="W_k = \\int_0^T E_k'(t)\\,dt" />
              <p>
                This gives a <strong>total energy score</strong> for each core.
              </p>
              <p>Then normalize:</p>
              <LaTeXEquation equation="\\alpha_k = \\frac{W_k}{\\sum_{j=1}^7 W_j}" />
              <p>
                These <strong>α_k</strong> values are weights that tell you <strong>how much each core should influence the final answer</strong>.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Agent Responses */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <button
            onClick={() => toggleSection('responses')}
            className="w-full text-left"
          >
            <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title flex items-center">
              🧠 3. Agent Responses
              <span className="ml-4 text-sm">
                {expandedSection === 'responses' ? '▼' : '▶'}
              </span>
            </h2>
          </button>
          
          {expandedSection === 'responses' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[#3a2a13] space-y-4"
            >
              <p>
                Each core agent has a response function:
              </p>
              <LaTeXEquation equation="f_k(x)" />
              <p>
                Where <code>x</code> is the user input (the prompt).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-[#7c5c2b] mb-2">Examples:</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>f₁(x)</strong> = returns logical response</li>
                    <li><strong>f₄(x)</strong> = adds empathy</li>
                    <li><strong>f₆(x)</strong> = interprets meaning intuitively</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Fusion Process */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <button
            onClick={() => toggleSection('fusion')}
            className="w-full text-left"
          >
            <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title flex items-center">
              🧬 4. Fusion Into a Final Response
              <span className="ml-4 text-sm">
                {expandedSection === 'fusion' ? '▼' : '▶'}
              </span>
            </h2>
          </button>
          
          {expandedSection === 'fusion' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="text-[#3a2a13] space-y-4"
            >
              <p>
                The full final output is:
              </p>
              <LaTeXEquation equation="z = \\sum_{k=1}^7 \\alpha_k \\cdot f_k(x)" />
              <p>Where:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>z</strong> is a vector or sentence output</li>
                <li>Each response is <strong>blended proportionally to its core's energy</strong></li>
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Final Summary */}
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title">
            ✨ Summary (In Equations)
          </h2>
          <div className="text-[#3a2a13] space-y-4">
            <p className="font-semibold">
              <strong>Prompt → Agents → Math → Fusion → Output</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">1. Core energies:</h4>
                <LaTeXEquation equation="E_k'(t) \\quad \\text{for } k = 1, ..., 7" />
              </div>
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">2. Core scores:</h4>
                <LaTeXEquation equation="W_k = \\int_0^T E_k'(t)\\,dt" />
              </div>
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">3. Normalized weights:</h4>
                <LaTeXEquation equation="\\alpha_k = \\frac{W_k}{\\sum_{j=1}^7 W_j}" />
              </div>
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">4. Agent responses:</h4>
                <LaTeXEquation equation="f_k(x)" />
              </div>
            </div>
            
            <div className="text-center">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">5. Final Fusion:</h4>
              <LaTeXEquation equation="z = \\sum_k \\alpha_k \\cdot f_k(x)" />
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
    </motion.section>
  );
};

export default MathematicalFramework; 