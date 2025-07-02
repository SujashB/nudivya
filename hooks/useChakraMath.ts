import { useState, useEffect, useCallback, useMemo } from 'react';

interface ChakraState {
  energies: number[];
  influences: number[];
  weights: number[];
  isResonating: boolean;
  totalEnergy: number;
}

interface ChakraConfig {
  updateInterval?: number;
  sensitivityMultipliers?: number[];
  timeScale?: number;
}

export const useChakraMath = (config: ChakraConfig = {}): ChakraState => {
  const {
    updateInterval = 100,
    sensitivityMultipliers = [1, 1, 1, 1, 1, 1, 1],
    timeScale = 1
  } = config;

  const [energies, setEnergies] = useState<number[]>(new Array(7).fill(0));
  const [weights, setWeights] = useState<number[]>(new Array(7).fill(0));

  // Chakra mathematical functions based on the documented equations
  const computeChakraEnergies = useCallback((time: number): number[] => {
    const t = time * timeScale;

    // Root Chakra (LAM) - E₁'(t) = sin(2π × 0.5t) × |sin(2π × 0.5t)|
    const rootEnergy = Math.sin(2 * Math.PI * 0.5 * t) * Math.abs(Math.sin(2 * Math.PI * 0.5 * t));

    // Sacral Chakra (VAM) - E₂'(t) = (1 - e^(-0.3t)) × sin(2πt) × |sin(2π × 0.7t)|
    const sacralEnergy = (1 - Math.exp(-0.3 * (t % 10))) * 
                        Math.sin(2 * Math.PI * 1.0 * t) * 
                        Math.abs(Math.sin(2 * Math.PI * 0.7 * t));

    // Solar Plexus (RAM) - E₃'(t) = [Σ(n=0 to 3) e^(-((t-(1+3n))²)/(2×0.2²))] × |sin(2πt)|
    let solarBase = 0;
    for (let n = 0; n < 4; n++) {
      const center = 1 + n * 3;
      const timeShifted = (t % 12) - center;
      solarBase += Math.exp(-(timeShifted ** 2) / (2 * 0.2 ** 2));
    }
    const solarEnergy = solarBase * Math.abs(Math.sin(2 * Math.PI * 1.0 * t));

    // Heart Chakra (YAM) - E₄'(t) = [∫(E₂' + E₃')dt / (t + 0.1)] × |sin(2π × 1.2t)|
    // Simplified: Use weighted combination of sacral and solar
    const heartBase = (Math.abs(sacralEnergy) + Math.abs(solarEnergy)) / (2 + 0.1 * t);
    const heartEnergy = heartBase * Math.abs(Math.sin(2 * Math.PI * 1.2 * t));

    // Throat Chakra (HAM) - E₅'(t) = ∇E₄'(t) × |sin(2π × 1.5t)|
    // Simplified: Use time derivative approximation of heart energy
    const prevHeartEnergy = heartBase * Math.abs(Math.sin(2 * Math.PI * 1.2 * (t - 0.01)));
    const heartDerivative = (heartEnergy - prevHeartEnergy) / 0.01;
    const throatEnergy = heartDerivative * Math.abs(Math.sin(2 * Math.PI * 1.5 * t));

    // Third Eye Chakra (OM) - E₆'(t) = (E₂' × E₃') × |sin(2π × 0.3t)|
    const thirdEyeEnergy = (sacralEnergy * solarEnergy) * Math.abs(Math.sin(2 * Math.PI * 0.3 * t));

    // Crown Chakra (Silence) - E₇'(t) = [∫₀ᵗ K(t,τ)(E₂'×E₃')(τ)dτ] × |sin(2π × 0.1t)|
    // Simplified: Exponential weighted average of third eye energy
    const beta = 0.5;
    const crownBase = thirdEyeEnergy * Math.exp(-beta * 0.1); // Simplified convolution
    const crownEnergy = crownBase * Math.abs(Math.sin(2 * Math.PI * 0.1 * t));

    return [
      rootEnergy * sensitivityMultipliers[0],
      sacralEnergy * sensitivityMultipliers[1],
      solarEnergy * sensitivityMultipliers[2],
      heartEnergy * sensitivityMultipliers[3],
      throatEnergy * sensitivityMultipliers[4],
      thirdEyeEnergy * sensitivityMultipliers[5],
      crownEnergy * sensitivityMultipliers[6]
    ];
  }, [sensitivityMultipliers, timeScale]);

  // Compute influence weights: W_k = ∫ |E_k'(t)| dt, α_k = W_k / Σ W_j
  const computeInfluences = useCallback((energyHistory: number[][]): number[] => {
    if (energyHistory.length === 0) return new Array(7).fill(1/7);

    // Integrate energies over time using trapezoidal rule
    const weights = new Array(7).fill(0);
    const dt = updateInterval / 1000; // Convert ms to seconds

    for (let chakra = 0; chakra < 7; chakra++) {
      for (let i = 1; i < energyHistory.length; i++) {
        const prev = Math.abs(energyHistory[i-1][chakra]);
        const curr = Math.abs(energyHistory[i][chakra]);
        weights[chakra] += (prev + curr) * dt / 2;
      }
    }

    // Normalize to get influence weights
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    return totalWeight > 0 ? weights.map(w => w / totalWeight) : new Array(7).fill(1/7);
  }, [updateInterval]);

  // Store energy history for integration
  const [energyHistory, setEnergyHistory] = useState<number[][]>([]);

  // Main computation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Date.now() * 0.001; // Convert to seconds
      const newEnergies = computeChakraEnergies(currentTime);
      
      setEnergies(newEnergies);
      
      // Update energy history (keep last 100 samples for integration)
      setEnergyHistory(prev => {
        const updated = [...prev, newEnergies].slice(-100);
        return updated;
      });
    }, updateInterval);

    return () => clearInterval(interval);
  }, [computeChakraEnergies, updateInterval]);

  // Compute influences when energy history changes
  useEffect(() => {
    if (energyHistory.length > 5) { // Wait for some history
      const newInfluences = computeInfluences(energyHistory);
      setWeights(newInfluences);
    }
  }, [energyHistory, computeInfluences]);

  // Derived state
  const influences = useMemo(() => {
    return weights.length > 0 ? weights : new Array(7).fill(1/7);
  }, [weights]);

  const totalEnergy = useMemo(() => {
    return energies.reduce((sum, energy) => sum + Math.abs(energy), 0);
  }, [energies]);

  const isResonating = useMemo(() => {
    return totalEnergy > 3 && influences.some(inf => inf > 0.3);
  }, [totalEnergy, influences]);

  return {
    energies,
    influences,
    weights,
    isResonating,
    totalEnergy
  };
};

// Preset configurations for different AI personalities
export const chakraPresets = {
  balanced: { sensitivityMultipliers: [1, 1, 1, 1, 1, 1, 1] },
  creative: { sensitivityMultipliers: [0.8, 1.8, 1.0, 1.2, 1.4, 1.4, 1.0] },
  analytical: { sensitivityMultipliers: [1.3, 0.7, 1.0, 0.9, 1.1, 1.8, 1.5] },
  empathetic: { sensitivityMultipliers: [1.0, 1.1, 0.8, 1.9, 1.4, 1.0, 1.2] },
  decisive: { sensitivityMultipliers: [1.5, 0.9, 1.8, 1.0, 1.3, 1.1, 1.0] },
  wise: { sensitivityMultipliers: [1.2, 0.8, 0.9, 1.3, 1.1, 1.4, 1.8] }
};

// Hook for chakra-weighted AI prompting
export const useChakraPrompting = () => {
  const generateChakraPrompt = useCallback((userInput: string, influences: number[]): string => {
    const chakraInstructions = [
      `Ground this response in facts and stability (weight: ${influences[0].toFixed(2)})`,
      `Add creative alternatives and flowing ideas (weight: ${influences[1].toFixed(2)})`,
      `Provide decisive recommendations and clear action steps (weight: ${influences[2].toFixed(2)})`,
      `Consider emotional impact and show compassion (weight: ${influences[3].toFixed(2)})`,
      `Ensure clear communication and authentic expression (weight: ${influences[4].toFixed(2)})`,
      `Synthesize deeper insights and wisdom (weight: ${influences[5].toFixed(2)})`,
      `Integrate transcendent perspective and universal awareness (weight: ${influences[6].toFixed(2)})`
    ];

    // Get top 3 most influential chakras
    const topChakras = influences
      .map((influence, index) => ({ influence, index }))
      .sort((a, b) => b.influence - a.influence)
      .slice(0, 3);

    const topInstructions = topChakras.map(({ index }) => chakraInstructions[index]);

    return `${userInput}

Please respond considering these perspectives in order of importance:
${topInstructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')}

Integrate all perspectives harmoniously while emphasizing the most influential chakra guidance.`;
  }, []);

  return { generateChakraPrompt };
}; 