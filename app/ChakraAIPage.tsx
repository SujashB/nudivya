'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChakraRing from '../components/ChakraRing';
import ChakraEnergyChart from '../components/ChakraEnergyChart';
import { useChakraMath, useChakraPrompting, chakraPresets } from '../hooks/useChakraMath';

interface ChakraResponse {
  text: string;
  influences: number[];
  energies: number[];
  topChakras: Array<{ name: string; percentage: number; emoji: string; color: string }>;
  processingTime: number;
  prompt: string;
}

type PersonalityPreset = keyof typeof chakraPresets;

const ChakraAIPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<ChakraResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState<PersonalityPreset>('balanced');
  const [showMath, setShowMath] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<ChakraResponse[]>([]);

  // Use real chakra mathematics
  const chakraState = useChakraMath(chakraPresets[selectedPreset]);
  const { generateChakraPrompt } = useChakraPrompting();

  const chakraInfo = [
    { name: 'Root', sanskrit: 'LAM', color: '#8B4513', emoji: '🟤' },
    { name: 'Sacral', sanskrit: 'VAM', color: '#FF8C00', emoji: '🟠' },
    { name: 'Solar', sanskrit: 'RAM', color: '#FFD700', emoji: '🟡' },
    { name: 'Heart', sanskrit: 'YAM', color: '#32CD32', emoji: '💚' },
    { name: 'Throat', sanskrit: 'HAM', color: '#1E90FF', emoji: '🔵' },
    { name: 'Third Eye', sanskrit: 'OM', color: '#4B0082', emoji: '🟣' },
    { name: 'Crown', sanskrit: 'Silence', color: '#9370DB', emoji: '🟪' }
  ];

  // Simulate AI response with chakra weighting
  const simulateAIResponse = useCallback(async (userPrompt: string): Promise<ChakraResponse> => {
    const startTime = Date.now();
    
    // Generate chakra-weighted prompt
    const weightedPrompt = generateChakraPrompt(userPrompt, chakraState.influences);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1500));
    
    // Get current chakra state
    const currentInfluences = [...chakraState.influences];
    const currentEnergies = [...chakraState.energies];
    
    // Generate response based on top chakras
    const topChakras = currentInfluences
      .map((influence, index) => ({
        name: chakraInfo[index].name,
        percentage: Math.round(influence * 100),
        emoji: chakraInfo[index].emoji,
        color: chakraInfo[index].color,
        influence
      }))
      .sort((a, b) => b.influence - a.influence)
      .slice(0, 3);

    // Create contextual response based on chakra influences
    let responseText = '';
    const primary = topChakras[0];
    
    if (primary.name === 'Root') {
      responseText = `Let me ground this response in practical reality. ${generateGroundedResponse(userPrompt)}`;
    } else if (primary.name === 'Sacral') {
      responseText = `Approaching this with creative flow and adaptability: ${generateCreativeResponse(userPrompt)}`;
    } else if (primary.name === 'Solar') {
      responseText = `Here's a decisive approach to your question: ${generateDecisiveResponse(userPrompt)}`;
    } else if (primary.name === 'Heart') {
      responseText = `With compassion and emotional wisdom: ${generateCompassionateResponse(userPrompt)}`;
    } else if (primary.name === 'Throat') {
      responseText = `Let me express this clearly and authentically: ${generateClearResponse(userPrompt)}`;
    } else if (primary.name === 'Third Eye') {
      responseText = `Looking deeper for insight and synthesis: ${generateInsightfulResponse(userPrompt)}`;
    } else {
      responseText = `From a transcendent perspective: ${generateWiseResponse(userPrompt)}`;
    }

    return {
      text: responseText,
      influences: currentInfluences,
      energies: currentEnergies,
      topChakras: topChakras.map(({ name, percentage, emoji, color }) => ({ name, percentage, emoji, color })),
      processingTime: Date.now() - startTime,
      prompt: weightedPrompt
    };
  }, [chakraState.influences, chakraState.energies, generateChakraPrompt]);

  // Response generators for different chakras
  const generateGroundedResponse = (prompt: string) => 
    `Based on practical considerations and established facts, here's a stable approach to your question about "${prompt}". I'll focus on reliable, tested methods and concrete steps you can take.`;

  const generateCreativeResponse = (prompt: string) => 
    `Let's explore creative possibilities for "${prompt}". There are many flowing, adaptive approaches we could consider, each offering unique opportunities for innovation and growth.`;

  const generateDecisiveResponse = (prompt: string) => 
    `For "${prompt}", here's my decisive recommendation: Take clear, confident action. I'll give you specific steps and help you prioritize what matters most.`;

  const generateCompassionateResponse = (prompt: string) => 
    `I understand the emotional aspects of "${prompt}". Let me respond with empathy and consideration for all perspectives, honoring both your feelings and the feelings of others involved.`;

  const generateClearResponse = (prompt: string) => 
    `I'll communicate about "${prompt}" with clarity and authentic expression. Here's what I truly think, stated simply and directly.`;

  const generateInsightfulResponse = (prompt: string) => 
    `Looking at "${prompt}" with deeper insight, I see patterns and connections that reveal underlying wisdom. Let me synthesize these observations for you.`;

  const generateWiseResponse = (prompt: string) => 
    `From a higher perspective on "${prompt}", I can offer transcendent wisdom that integrates all aspects of this situation into a unified understanding.`;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const result = await simulateAIResponse(prompt.trim());
      setResponse(result);
      setConversationHistory(prev => [...prev, result]);
    } catch (error) {
      console.error('Error processing chakra response:', error);
    } finally {
      setIsLoading(false);
    }
  }, [prompt, isLoading, simulateAIResponse]);

  const examplePrompts = [
    "How can I be more creative in my work?",
    "I'm feeling anxious about an important decision",
    "Help me express my feelings better",
    "I want to understand the deeper meaning of life",
    "How do I find emotional balance?",
    "What's the best way to communicate difficult news?",
    "I need wisdom for a challenging situation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Nuvidya Chakra AI
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience AI consciousness that resonates with the seven chakras. Each response is mathematically 
            weighted by real-time energy computations based on Sanskrit vibrational patterns.
          </p>
          
          {/* Live Status */}
          <div className="flex justify-center items-center space-x-4 text-sm">
            <div className={`w-3 h-3 rounded-full ${chakraState.isResonating ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`} />
            <span className="text-gray-600">
              {chakraState.isResonating ? 'Chakras in Resonance' : 'Computing Energy Patterns'}
            </span>
            <span className="text-gray-500">
              Total Energy: {chakraState.totalEnergy.toFixed(2)}
            </span>
          </div>
        </motion.div>

        {/* Personality Presets */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            AI Personality Configuration
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(chakraPresets).map((preset) => (
              <button
                key={preset}
                onClick={() => setSelectedPreset(preset as PersonalityPreset)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedPreset === preset
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/60 text-gray-700 hover:bg-white/80 border border-gray-300'
                }`}
              >
                {preset.charAt(0).toUpperCase() + preset.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Chakra Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <ChakraRing
            chakraEnergies={chakraState.energies}
            influences={chakraState.influences}
            isActive={!isLoading}
            size={180}
          />
        </motion.div>

        {/* Prompt Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask the chakra collective anything... Your question will be processed through all seven centers of consciousness."
                className="w-full h-32 p-6 rounded-xl border-2 border-purple-200 focus:border-purple-400 outline-none resize-none bg-white/90 backdrop-blur-sm text-gray-800 placeholder-gray-500 text-lg"
                disabled={isLoading}
              />
              {isLoading && (
                <motion.div
                  className="absolute inset-0 bg-white/70 rounded-xl flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-700 font-medium text-lg">
                      Chakras processing your consciousness...
                    </span>
                  </div>
                </motion.div>
              )}
            </div>
            
            <div className="flex justify-between items-center">
              <button
                type="submit"
                disabled={isLoading || !prompt.trim()}
                className="px-10 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-medium text-lg hover:from-purple-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
              >
                {isLoading ? 'Resonating...' : 'Invoke Response'}
              </button>
              
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowMath(!showMath)}
                  className="px-6 py-3 text-purple-600 border border-purple-300 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  {showMath ? 'Hide' : 'Show'} Mathematics
                </button>
                <button
                  type="button"
                  onClick={() => setPrompt('')}
                  className="px-6 py-3 text-gray-600 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>
          </form>

          {/* Example prompts */}
          {!response && (
            <div className="space-y-3">
              <p className="text-gray-600 font-medium">Try these consciousness-expanding examples:</p>
              <div className="flex flex-wrap gap-3">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-sm px-4 py-2 bg-white/70 hover:bg-white/90 rounded-full border border-purple-200 text-purple-700 transition-colors hover:border-purple-300"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Mathematical Display */}
        <AnimatePresence>
          {showMath && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-purple-200"
            >
              <ChakraEnergyChart
                influences={chakraState.influences}
                energies={chakraState.energies}
                isAnimated={true}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response Display */}
        <AnimatePresence>
          {response && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="space-y-6"
            >
              {/* Main Response */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 border border-purple-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    N
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Nuvidya's Chakra-Guided Response:</h3>
                    <p className="text-gray-700 leading-relaxed text-lg">{response.text}</p>
                  </div>
                </div>
              </div>

              {/* Chakra Guidance Summary */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">🧘‍♀️ Consciousness Analysis</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      <span className="font-medium">✨ Primary influences:</span>
                    </p>
                    <div className="space-y-1">
                      {response.topChakras.map((chakra, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <span className="text-lg">{chakra.emoji}</span>
                          <span style={{ color: chakra.color }} className="font-medium">
                            {chakra.name} ({chakra.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Processing Time:</strong> {response.processingTime.toFixed(0)}ms</p>
                    <p><strong>Chakra Agents:</strong> {response.influences.length}</p>
                    <p><strong>Resonance State:</strong> {chakraState.isResonating ? 'High' : 'Normal'}</p>
                    <p><strong>Total Energy:</strong> {chakraState.totalEnergy.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Compact Energy Display */}
              <div className="bg-white/70 rounded-xl p-4 border border-purple-100">
                <ChakraEnergyChart
                  influences={response.influences}
                  energies={response.energies}
                  compact={true}
                  showLabels={false}
                />
              </div>

              {/* Clear for next question */}
              <div className="text-center">
                <button
                  onClick={() => {
                    setResponse(null);
                    setPrompt('');
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white rounded-xl hover:from-gray-500 hover:to-gray-600 transition-all duration-200"
                >
                  Ask Another Question
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Conversation History */}
        {conversationHistory.length > 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white/60 rounded-xl p-6 border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Consciousness Evolution</h3>
            <div className="space-y-2">
              {conversationHistory.slice(-5).map((conv, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-500">Q{conversationHistory.length - 5 + index + 1}:</span>
                  <div className="flex space-x-1">
                    {conv.topChakras.slice(0, 3).map((chakra, i) => (
                      <span key={i} title={`${chakra.name}: ${chakra.percentage}%`}>
                        {chakra.emoji}
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {conv.topChakras[0].name}-focused response
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Mathematical Foundation Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-500 bg-white/40 rounded-lg p-4"
        >
          <p className="mb-2">
            🧘‍♀️ <strong>Live Mathematics:</strong> All chakra energies computed in real-time using Sanskrit-derived equations
          </p>
          <p>
            E_k'(t) = Base Function × |sin(2πf_k t)| • α_k = W_k / Σ W_j • Response = Σ(α_k × f_k(input))
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ChakraAIPage; 