import { useState, useEffect, useCallback } from 'react';

// Chakra preset configurations
export const chakraPresets = {
  balanced: {
    name: 'Balanced',
    weights: [0.14, 0.14, 0.14, 0.16, 0.14, 0.14, 0.14], // Slight emphasis on harmony core
    description: 'Harmonious balance across all core agents'
  },
  grounded: {
    name: 'Grounded',
    weights: [0.30, 0.20, 0.15, 0.10, 0.10, 0.10, 0.05], // Foundation and flow emphasis
    description: 'Practical, stability-centered approach'
  },
  creative: {
    name: 'Creative',
    weights: [0.10, 0.30, 0.20, 0.15, 0.15, 0.10, 0.00], // Flow and drive emphasis
    description: 'Flowing, innovative, and expressive'
  },
  wise: {
    name: 'Wise',
    weights: [0.05, 0.05, 0.10, 0.15, 0.15, 0.25, 0.25], // Insight and synthesis emphasis
    description: 'Intuitive, insightful, and transcendent'
  },
  compassionate: {
    name: 'Compassionate',
    weights: [0.10, 0.10, 0.10, 0.40, 0.20, 0.05, 0.05], // Harmony and clarity emphasis
    description: 'Empathetic, loving, and communicative'
  },
  decisive: {
    name: 'Decisive',
    weights: [0.20, 0.15, 0.35, 0.10, 0.10, 0.05, 0.05], // Drive core emphasis
    description: 'Confident, action-oriented, and powerful'
  }
};

type ChakraPreset = typeof chakraPresets[keyof typeof chakraPresets];

interface ChakraState {
  influences: number[];
  energies: number[];
  isResonating: boolean;
  totalEnergy: number;
}

// Sanskrit syllable frequencies for chakra resonance calculations
const sankritFrequencies = {
  LAM: 256,   // Root
  VAM: 288,   // Sacral  
  RAM: 320,   // Solar
  YAM: 341,   // Heart
  HAM: 384,   // Throat
  OM: 426,    // Third Eye
  AUM: 480    // Crown
};

export function useChakraMath(preset: ChakraPreset): ChakraState {
  const [influences, setInfluences] = useState<number[]>(preset.weights);
  const [energies, setEnergies] = useState<number[]>(new Array(7).fill(0.5));
  const [isResonating, setIsResonating] = useState(false);
  const [totalEnergy, setTotalEnergy] = useState(0);

  // Calculate chakra resonance based on mathematical principles
  const calculateResonance = useCallback(() => {
    const newEnergies = preset.weights.map((weight, index) => {
      // Apply sine wave modulation based on Sanskrit frequencies
      const frequency = Object.values(sankritFrequencies)[index];
      const timePhase = Date.now() / 1000;
      const resonance = Math.sin(timePhase * frequency / 100) * 0.1 + 0.5;
      
      // Combine preset weight with resonance
      return Math.max(0, Math.min(1, weight + resonance * 0.3));
    });

    // Normalize to maintain energy conservation
    const sum = newEnergies.reduce((a, b) => a + b, 0);
    const normalizedEnergies = newEnergies.map(e => e / sum);
    
    setInfluences(normalizedEnergies);
    setEnergies(normalizedEnergies);
    
    // Calculate total energy
    const total = normalizedEnergies.reduce((sum, energy) => sum + energy, 0);
    setTotalEnergy(total);
    
    // Check if chakras are in resonance (balanced within threshold)
    const variance = normalizedEnergies.reduce((var_sum, energy) => {
      const diff = energy - (1/7);
      return var_sum + diff * diff;
    }, 0) / 7;
    
    setIsResonating(variance < 0.01);
  }, [preset.weights]);

  // Update energies periodically
  useEffect(() => {
    const interval = setInterval(calculateResonance, 1000);
    calculateResonance(); // Initial calculation
    return () => clearInterval(interval);
  }, [calculateResonance]);

  return {
    influences,
    energies,
    isResonating,
    totalEnergy
  };
}

export function useChakraPrompting() {
  const generateChakraPrompt = useCallback((userPrompt: string, influences: number[]): string => {
    // Find the dominant core agents
    const coreNames = ['Foundation', 'Flow', 'Drive', 'Harmony', 'Clarity', 'Insight', 'Synthesis'];
    const dominant = influences
      .map((influence, index) => ({ name: coreNames[index], value: influence }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 2);

    // Create core-influenced prompt
    const coreContext = dominant.map(core => {
      switch (core.name) {
        case 'Foundation':
          return 'grounding this in practical reality and stability';
        case 'Flow':
          return 'approaching with creativity and adaptive flow';
        case 'Drive':
          return 'responding with confidence and decisive action';
        case 'Harmony':
          return 'infusing with compassion and emotional wisdom';
        case 'Clarity':
          return 'expressing with transparency and clear communication';
        case 'Insight':
          return 'providing pattern recognition and intuitive understanding';
        case 'Synthesis':
          return 'offering integrated wisdom and strategic perspective';
        default:
          return 'responding with balanced awareness';
      }
    }).join(' while ');

    return `${userPrompt} (Please respond by ${coreContext}. Current core influences: ${dominant.map(c => `${c.name}: ${Math.round(c.value * 100)}%`).join(', ')})`;
  }, []);

  return {
    generateChakraPrompt
  };
} 