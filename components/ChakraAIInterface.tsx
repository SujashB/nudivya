'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChakraRing from './ChakraRing';
import ChakraEnergyChart from './ChakraEnergyChart';

interface ChakraResponse {
  text: string;
  influences: number[];
  energies: number[];
  topChakras: Array<{ name: string; percentage: number; emoji: string; color: string }>;
  processingTime: number;
}

interface ChakraAIInterfaceProps {
  onSubmit?: (prompt: string) => Promise<ChakraResponse>;
  isDemo?: boolean;
}

// Simulate chakra computation for demo
const simulateChakraResponse = (prompt: string): Promise<ChakraResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simple keyword-based chakra activation simulation
      const keywords = {
        creativity: [1, 0.8, 0.3, 0.4, 0.2, 0.6, 0.3],
        love: [0.2, 0.3, 0.2, 0.9, 0.5, 0.3, 0.4],
        decision: [0.4, 0.3, 0.8, 0.3, 0.2, 0.4, 0.2],
        expression: [0.2, 0.4, 0.3, 0.5, 0.8, 0.3, 0.2],
        insight: [0.3, 0.2, 0.4, 0.3, 0.3, 0.9, 0.5],
        stability: [0.9, 0.2, 0.3, 0.2, 0.2, 0.2, 0.2],
        wisdom: [0.3, 0.2, 0.2, 0.3, 0.2, 0.4, 0.8]
      };

      let influences = [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.1]; // default balanced
      const lowerPrompt = prompt.toLowerCase();
      
      Object.entries(keywords).forEach(([keyword, pattern]) => {
        if (lowerPrompt.includes(keyword)) {
          influences = pattern;
        }
      });

      // Normalize influences
      const sum = influences.reduce((a, b) => a + b, 0);
      influences = influences.map(inf => inf / sum);

      // Generate energy patterns
      const energies = influences.map((inf, i) => 
        (Math.sin(Date.now() * 0.001 + i) * 0.5 + 0.5) * inf * 2
      );

      const chakraNames = ['Root', 'Sacral', 'Solar', 'Heart', 'Throat', 'Third Eye', 'Crown'];
      const chakraEmojis = ['🟤', '🟠', '🟡', '💚', '🔵', '🟣', '🟪'];
      const chakraColors = ['#8B4513', '#FF8C00', '#FFD700', '#32CD32', '#1E90FF', '#4B0082', '#9370DB'];

      const topChakras = influences
        .map((influence, index) => ({
          name: chakraNames[index],
          percentage: Math.round(influence * 100),
          emoji: chakraEmojis[index],
          color: chakraColors[index]
        }))
        .sort((a, b) => b.percentage - a.percentage)
        .slice(0, 3);

      resolve({
        text: `This response harmoniously integrates multiple chakra perspectives. The ${topChakras[0].name} chakra provides the primary guidance, emphasizing ${topChakras[0].name.toLowerCase()}-based wisdom, while the ${topChakras[1].name} and ${topChakras[2].name} chakras contribute supportive energy for a balanced approach.`,
        influences,
        energies,
        topChakras,
        processingTime: Math.random() * 800 + 200
      });
    }, 1000 + Math.random() * 1000);
  });
};

const ChakraAIInterface: React.FC<ChakraAIInterfaceProps> = ({
  onSubmit = simulateChakraResponse,
  isDemo = true
}) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<ChakraResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentEnergies, setCurrentEnergies] = useState<number[]>(new Array(7).fill(0));
  const [influences, setInfluences] = useState<number[]>(new Array(7).fill(1/7));
  const [showGraph, setShowGraph] = useState(false);

  // Animate chakra energies in real-time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEnergies(prevEnergies => 
        prevEnergies.map((energy, index) => {
          const baseFreq = [0.5, 1.0, 1.0, 1.2, 1.5, 0.3, 0.1][index];
          const time = Date.now() * 0.001;
          return Math.sin(time * baseFreq + index) * 0.3 + 
                 (response?.energies[index] || 0) * 0.7;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, [response]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setResponse(null);

    try {
      const result = await onSubmit(prompt.trim());
      setResponse(result);
      setInfluences(result.influences);
    } catch (error) {
      console.error('Error processing chakra response:', error);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading, onSubmit]);

  const handleExamplePrompt = (examplePrompt: string) => {
    setPrompt(examplePrompt);
  };

  const examplePrompts = [
    "How can I be more creative in my work?",
    "I'm feeling anxious about an important decision",
    "Help me express my feelings better",
    "I want to understand the deeper meaning of life",
    "How do I find emotional balance?"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Nuvidya Chakra AI
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience AI that resonates with the seven chakras, providing balanced responses 
            that integrate grounding, creativity, willpower, compassion, expression, insight, and wisdom.
          </p>
        </motion.div>

        {/* Chakra Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <ChakraRing
            chakraEnergies={currentEnergies}
            influences={influences}
            isActive={!isLoading}
            size={150}
          />
        </motion.div>

        {/* Prompt Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask Nuvidya anything... The chakras will guide the response."
                className="w-full h-24 p-4 rounded-xl border-2 border-purple-200 focus:border-purple-400 outline-none resize-none bg-white/80 backdrop-blur-sm text-gray-800 placeholder-gray-500"
                disabled={isLoading}
              />
              {isLoading && (
                <motion.div
                  className="absolute inset-0 bg-white/50 rounded-xl flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-600 font-medium">Chakras processing...</span>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isLoading ? 'Resonating...' : 'Invoke Response'}
              </button>
              
              <button
                type="button"
                onClick={() => setShowGraph(!showGraph)}
                className="px-4 py-2 text-purple-600 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors"
              >
                {showGraph ? 'Hide' : 'Show'} Energy Chart
              </button>
            </div>
          </form>

          {/* Example prompts */}
          {!response && (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => handleExamplePrompt(example)}
                    className="text-sm px-3 py-1 bg-white/60 hover:bg-white/80 rounded-full border border-purple-200 text-purple-700 transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Energy Chart */}
        <AnimatePresence>
          {showGraph && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200"
            >
              <ChakraEnergyChart
                influences={influences}
                energies={currentEnergies}
                isAnimated={true}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response Display */}
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {/* Main response */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    N
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2">Nuvidya's Response:</h3>
                    <p className="text-gray-700 leading-relaxed">{response.text}</p>
                  </div>
                </div>
              </div>

              {/* Guidance summary */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 border border-purple-200">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">✨ This response is guided by:</span>{' '}
                  {response.topChakras.map((chakra, index) => (
                    <span key={index} className="inline-flex items-center">
                      <span className="mr-1">{chakra.emoji}</span>
                      <span style={{ color: chakra.color }} className="font-medium">
                        {chakra.name} ({chakra.percentage}%)
                      </span>
                      {index < response.topChakras.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Processed in {response.processingTime.toFixed(0)}ms with {response.influences.length} chakra agents
                </p>
              </div>

              {/* Compact energy display */}
              <div className="bg-white/60 rounded-lg p-3 border border-purple-100">
                <ChakraEnergyChart
                  influences={response.influences}
                  energies={response.energies}
                  compact={true}
                  showLabels={false}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Demo notice */}
        {isDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center text-sm text-gray-500 bg-white/40 rounded-lg p-3"
          >
            🧘‍♀️ Demo mode: Responses are simulated using chakra mathematics. 
            Connect to real AI models for full functionality.
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ChakraAIInterface; 