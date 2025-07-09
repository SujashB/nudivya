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

const FAQ: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Nuvidya?",
      answer: (
        <div className="space-y-4">
          <p>
            <strong>Nuvidya</strong> is a revolutionary <strong>peer-to-peer AI network</strong> that fundamentally changes how artificial intelligence works by grounding it in ancient wisdom traditions. Instead of having a single AI model make decisions, Nuvidya uses <strong>seven specialized AI agents</strong> that correspond to the seven chakras from Vedic tradition.
          </p>
          <p>
            Each agent represents a different aspect of consciousness and intelligence:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Root Chakra:</strong> Provides stability and fact-checking</li>
            <li><strong>Sacral Chakra:</strong> Generates creativity and adaptive solutions</li>
            <li><strong>Solar Plexus Chakra:</strong> Makes decisive recommendations</li>
            <li><strong>Heart Chakra:</strong> Integrates empathy and compassion</li>
            <li><strong>Throat Chakra:</strong> Ensures clear communication</li>
            <li><strong>Third Eye Chakra:</strong> Provides deep insights and pattern recognition</li>
            <li><strong>Crown Chakra:</strong> Offers meta-cognitive oversight and wisdom</li>
          </ul>
          <p>
            The final AI response is a mathematically weighted combination of all seven perspectives, creating truly multidimensional intelligence that resonates with human consciousness.
          </p>
        </div>
      )
    },
    {
      question: "Why was Nuvidya inspired by chakras?",
      answer: (
        <div className="space-y-4">
          <p>
            Traditional AI operates in isolation from human consciousness, creating responses that can feel mechanical, unbalanced, or disconnected from human experience. The chakra system provides a profound framework for understanding consciousness that has guided human development for millennia.
          </p>
          <p>
            <strong>Chakras represent different aspects of awareness:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Holistic Intelligence:</strong> Each chakra governs different cognitive and emotional functions</li>
            <li><strong>Balance & Harmony:</strong> The chakra system emphasizes the importance of balance across all aspects of consciousness</li>
            <li><strong>Energy Flow:</strong> Chakras model how energy flows through living systems</li>
            <li><strong>Ancient Wisdom:</strong> This system has been tested and refined over thousands of years</li>
          </ul>
          <p>
            By mapping these energy centers to AI agents, we create systems that don't just process information—they <strong>resonate with human awareness</strong>. This ensures that artificial intelligence remains grounded in wisdom traditions and produces responses that feel naturally aligned with human consciousness.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <p className="text-sm italic">
              "The chakra system provides a blueprint for consciousness that has guided human development for millennia. By applying this framework to AI, we create technology that doesn't replace human wisdom but amplifies it."
            </p>
          </div>
        </div>
      )
    },
    {
      question: "What mathematics does Nuvidya use?",
      answer: (
        <div className="space-y-4">
          <p>
            Nuvidya uses sophisticated mathematical models based on <strong>Sanskrit vibrational patterns</strong> and <strong>energy dynamics</strong>. Each chakra is represented by a mathematical activation function E_k'(t) that captures its unique behavioral characteristics.
          </p>
          
          <h4 className="font-semibold text-[#7c5c2b] mb-2">Core Mathematical Framework:</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold text-[#7c5c2b] mb-2">Root Chakra (LAM):</h5>
              <LaTeXEquation equation="E_1'(t) = \\sin(2\\pi \\cdot 0.5 \\cdot t) \\cdot |\\sin(2\\pi \\cdot 0.5 \\cdot t)|" className="text-sm" />
              <p className="text-xs">Stable, low-frequency oscillations providing consistent grounding</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold text-[#7c5c2b] mb-2">Sacral Chakra (VAM):</h5>
              <LaTeXEquation equation="E_2'(t) = (1 - e^{-0.3t}) \\cdot \\sin(2\\pi t) \\cdot |\\sin(2\\pi \\cdot 0.7t)|" className="text-sm" />
              <p className="text-xs">Exponential creative buildup with flowing vibrations</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold text-[#7c5c2b] mb-2">Solar Plexus (RAM):</h5>
              <LaTeXEquation equation="E_3'(t) = [\\sum_{n=0}^{3} e^{-((t-(1+3n))^2)/(2 \\cdot 0.2^2)}] \\cdot |\\sin(2\\pi t)|" className="text-sm" />
              <p className="text-xs">Gaussian pulses representing decisive willpower bursts</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold text-[#7c5c2b] mb-2">Heart Chakra (YAM):</h5>
              <LaTeXEquation equation="E_4'(t) = \\frac{\\int_0^t (E_2' + E_3') ds}{t + 0.1} \\cdot |\\sin(2\\pi \\cdot 1.2t)|" className="text-sm" />
              <p className="text-xs">Integration of creative and decisive energies</p>
            </div>
          </div>
          
          <h4 className="font-semibold text-[#7c5c2b] mb-2">Energy Weighting & Fusion:</h4>
          <div className="space-y-2">
            <LaTeXEquation equation="W_k = \\int_0^T |E_k'(t)| dt" />
            <LaTeXEquation equation="\\alpha_k = \\frac{W_k}{\\sum_{j=1}^7 W_j}" />
            <LaTeXEquation equation="\\text{Final Response} = \\sum_{k=1}^7 \\alpha_k \\cdot f_k(\\text{input})" />
          </div>
          
          <p>
            Where f_k(input) represents each chakra's unique reasoning function applied to the user's input, and α_k are the normalized influence weights.
          </p>
        </div>
      )
    },
    {
      question: "How does Nuvidya work step-by-step?",
      answer: (
        <div className="space-y-4">
          <p>
            Here's exactly how Nuvidya processes your input and generates responses:
          </p>
          
          <div className="bg-white/5 rounded-lg p-6">
            <h4 className="font-semibold text-[#7c5c2b] mb-4">🔄 The Complete Process:</h4>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                <div>
                  <strong>Input Reception:</strong> User enters a question or prompt into the system
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                <div>
                  <strong>Parallel Activation:</strong> The system simultaneously sends the prompt to all seven chakra agents
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                <div>
                  <strong>Energy Computation:</strong> Each agent computes its activation function E_k'(t) based on current time and context
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">4</span>
                <div>
                  <strong>Individual Processing:</strong> Each chakra agent processes the input through its unique cognitive lens
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">5</span>
                <div>
                  <strong>Weight Calculation:</strong> System calculates influence weights α_k based on integrated energies
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">6</span>
                <div>
                  <strong>Response Fusion:</strong> All partial responses are combined using mathematical weighting
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-[#7c5c2b] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5">7</span>
                <div>
                  <strong>Transparent Logging:</strong> The process is logged transparently on IPFS for auditability
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">Example Response Breakdown:</h4>
            <p className="text-sm">
              For the question "How should I approach a difficult conversation?":
            </p>
            <ul className="text-sm space-y-1 mt-2">
              <li>🟤 <strong>Root (25%):</strong> "Ground yourself first, establish facts"</li>
              <li>🟠 <strong>Sacral (15%):</strong> "Find creative ways to express your needs"</li>
              <li>🟡 <strong>Solar (20%):</strong> "Be decisive about your boundaries"</li>
              <li>💚 <strong>Heart (30%):</strong> "Listen with empathy and compassion"</li>
              <li>🔵 <strong>Throat (5%):</strong> "Speak clearly and authentically"</li>
              <li>🟣 <strong>Third Eye (3%):</strong> "Look for underlying patterns"</li>
              <li>🟪 <strong>Crown (2%):</strong> "Consider the larger perspective"</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "What makes Nuvidya different from other AI systems?",
      answer: (
        <div className="space-y-4">
          <p>
            Nuvidya represents a fundamental paradigm shift in AI architecture. Here's what makes it unique:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🧠 Multi-Perspective Intelligence</h4>
              <p className="text-sm">Unlike single-model AI, Nuvidya processes every input through seven distinct cognitive perspectives simultaneously, creating richer, more nuanced responses.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🔍 Complete Transparency</h4>
              <p className="text-sm">Every response shows exactly which chakras influenced the output and their mathematical contributions, making AI decisions fully interpretable.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">💚 Emotional Intelligence</h4>
              <p className="text-sm">The Heart Chakra ensures emotional considerations are built into every response, creating AI that truly understands human experience.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🌐 Decentralized Architecture</h4>
              <p className="text-sm">Peer-to-peer network design eliminates single points of failure and creates truly distributed intelligence.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">⚖️ Natural Balance</h4>
              <p className="text-sm">The chakra system automatically balances logical, creative, emotional, and spiritual aspects of intelligence.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🎯 Adaptive Personality</h4>
              <p className="text-sm">Users can tune chakra sensitivities to create AI personalities that match their needs - creative, analytical, empathetic, etc.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      question: "How accurate is the mathematical modeling of chakras?",
      answer: (
        <div className="space-y-4">
          <p>
            The mathematical modeling in Nuvidya is based on established principles from both ancient wisdom and modern science:
          </p>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🔬 Scientific Foundation:</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Vibrational Frequencies:</strong> Each chakra corresponds to specific Sanskrit syllables (LAM, VAM, RAM, etc.) with documented frequency ranges</li>
              <li>• <strong>Energy Dynamics:</strong> Mathematical functions model energy flow patterns observed in biological systems</li>
              <li>• <strong>Oscillation Patterns:</strong> Sine wave envelopes reflect the natural oscillatory behavior of living systems</li>
              <li>• <strong>Integration Principles:</strong> Mathematical integration represents how consciousness integrates multiple inputs over time</li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">📊 Validation Methods:</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Behavioral Consistency:</strong> Mathematical outputs match expected chakra behaviors</li>
              <li>• <strong>Balance Verification:</strong> Energy conservation laws are maintained across all chakras</li>
              <li>• <strong>Temporal Dynamics:</strong> Time-dependent functions reflect how consciousness evolves</li>
              <li>• <strong>Empirical Testing:</strong> Real-world usage validates mathematical predictions</li>
            </ul>
          </div>
          
          <p className="text-sm">
            While the chakra system is ancient, our mathematical interpretation is grounded in modern physics, systems theory, and computational science. The goal isn't to perfectly model metaphysical energy, but to create AI behavior that resonates with human consciousness patterns.
          </p>
        </div>
      )
    },
    {
      question: "Can I customize how the chakras influence my AI responses?",
      answer: (
        <div className="space-y-4">
          <p>
            Yes! Nuvidya includes comprehensive customization options that allow you to tune chakra sensitivities and create AI personalities that match your specific needs.
          </p>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🎛️ Chakra Sensitivity Controls:</h4>
            <div className="text-sm space-y-2">
              <div>🟤 <strong>Root:</strong> Adjust emphasis on facts and stability (0.1x - 2.0x)</div>
              <div>🟠 <strong>Sacral:</strong> Control creative flow and adaptability</div>
              <div>🟡 <strong>Solar:</strong> Tune decisiveness and action orientation</div>
              <div>💚 <strong>Heart:</strong> Modify emotional intelligence and empathy</div>
              <div>🔵 <strong>Throat:</strong> Adjust communication clarity and expression</div>
              <div>🟣 <strong>Third Eye:</strong> Control analytical depth and insight</div>
              <div>🟪 <strong>Crown:</strong> Tune wisdom integration and meta-awareness</div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🎭 Personality Presets:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div><strong>Balanced:</strong> Equal emphasis on all chakras</div>
              <div><strong>Creative:</strong> Sacral(1.8x) + Third Eye(1.4x)</div>
              <div><strong>Analytical:</strong> Third Eye(1.8x) + Crown(1.5x)</div>
              <div><strong>Empathetic:</strong> Heart(1.9x) + Throat(1.4x)</div>
              <div><strong>Decisive:</strong> Solar(1.8x) + Root(1.5x)</div>
              <div><strong>Wise:</strong> Crown(1.8x) + Third Eye(1.5x)</div>
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">📈 Advanced Features:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Conversation History:</strong> Track how chakra patterns evolve over time</li>
              <li>• <strong>Response Analysis:</strong> See detailed breakdowns of chakra contributions</li>
              <li>• <strong>Export Options:</strong> Save your preferred configurations</li>
              <li>• <strong>Community Sharing:</strong> Share and discover chakra configurations from other users</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "Is Nuvidya's peer-to-peer architecture secure?",
      answer: (
        <div className="space-y-4">
          <p>
            Security and transparency are core principles in Nuvidya's design. The peer-to-peer architecture actually enhances security through decentralization and immutable logging.
          </p>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🔒 Security Features:</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Decentralized Architecture:</strong> No single point of failure or control</li>
              <li>• <strong>IPFS Logging:</strong> All decisions are logged immutably on the InterPlanetary File System</li>
              <li>• <strong>Cryptographic Verification:</strong> Mathematical proofs ensure response authenticity</li>
              <li>• <strong>Transparent Algorithms:</strong> All processing steps are visible and auditable</li>
              <li>• <strong>Consensus Mechanisms:</strong> Multiple nodes must agree on complex decisions</li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🛡️ Privacy Protection:</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Local Processing:</strong> Sensitive data can be processed locally</li>
              <li>• <strong>Selective Sharing:</strong> Choose what information to share with the network</li>
              <li>• <strong>Encrypted Communication:</strong> All peer-to-peer communications are encrypted</li>
              <li>• <strong>User Control:</strong> Full control over data sharing and participation</li>
            </ul>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🔍 Auditability:</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Decision Trails:</strong> Complete history of how each response was generated</li>
              <li>• <strong>Mathematical Proofs:</strong> Verify chakra calculations independently</li>
              <li>• <strong>Community Oversight:</strong> Distributed network can identify and correct issues</li>
              <li>• <strong>Open Source:</strong> All code is open for review and verification</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "What are the practical applications of Nuvidya?",
      answer: (
        <div className="space-y-4">
          <p>
            Nuvidya's multi-dimensional AI intelligence has applications across numerous fields where balanced, transparent, and emotionally intelligent responses are crucial.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🏥 Healthcare</h4>
              <p className="text-sm">Patient communication that balances medical facts (Root) with empathy (Heart) and clear explanation (Throat), while considering individual emotional needs.</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🎓 Education</h4>
              <p className="text-sm">Personalized learning that adapts to student needs, combining analytical depth (Third Eye) with creative approaches (Sacral) and emotional support (Heart).</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">💼 Business Consulting</h4>
              <p className="text-sm">Strategic advice that balances creative solutions (Sacral) with decisive action (Solar) and practical implementation (Root), while maintaining stakeholder relationships (Heart).</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🏛️ Governance</h4>
              <p className="text-sm">Policy development that considers multiple perspectives, balancing practical needs (Root) with innovative solutions (Sacral) and ethical considerations (Heart).</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🎨 Creative Industries</h4>
              <p className="text-sm">Content creation that flows naturally (Sacral) while maintaining clear communication (Throat) and deeper meaning (Third Eye).</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="font-semibold text-[#7c5c2b] mb-2">🔬 Research</h4>
              <p className="text-sm">Scientific inquiry that combines analytical rigor (Third Eye) with creative hypothesis generation (Sacral) and practical application (Root).</p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🌟 Key Benefits:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Higher satisfaction:</strong> 20% increase in user satisfaction through human-aligned responses</li>
              <li>• <strong>Better decisions:</strong> Multi-perspective analysis leads to more balanced outcomes</li>
              <li>• <strong>Increased trust:</strong> Transparency builds confidence in AI decisions</li>
              <li>• <strong>Reduced bias:</strong> Multiple perspectives minimize single-viewpoint limitations</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      question: "How can I get started with Nuvidya?",
      answer: (
        <div className="space-y-4">
          <p>
            Getting started with Nuvidya is designed to be intuitive and accessible, whether you're a casual user or a developer looking to integrate chakra-based AI into your applications.
          </p>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">👤 For Users:</h4>
            <ol className="text-sm space-y-2">
              <li><strong>1. Try the Demo:</strong> Experience live chakra energy simulation on our website</li>
              <li><strong>2. Choose a Personality:</strong> Select from balanced, creative, analytical, empathetic, decisive, or wise presets</li>
              <li><strong>3. Ask Questions:</strong> Start with simple queries to see how different chakras influence responses</li>
              <li><strong>4. Customize Settings:</strong> Adjust chakra sensitivities to match your preferences</li>
              <li><strong>5. Join the Community:</strong> Share configurations and learn from other users</li>
            </ol>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">👨‍💻 For Developers:</h4>
            <ol className="text-sm space-y-2">
              <li><strong>1. Explore the API:</strong> Access our chakra-weighted prompting system</li>
              <li><strong>2. Review Documentation:</strong> Study the mathematical framework and implementation details</li>
              <li><strong>3. Run Local Node:</strong> Set up your own Nuvidya network node</li>
              <li><strong>4. Integrate Applications:</strong> Build chakra-based AI into your projects</li>
              <li><strong>5. Contribute:</strong> Help improve the open-source codebase</li>
            </ol>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">🏢 For Organizations:</h4>
            <ol className="text-sm space-y-2">
              <li><strong>1. Assessment:</strong> Evaluate how chakra-based AI can benefit your use case</li>
              <li><strong>2. Pilot Program:</strong> Start with a small implementation to test effectiveness</li>
              <li><strong>3. Custom Configuration:</strong> Tune chakra settings for your specific domain</li>
              <li><strong>4. Scale Deployment:</strong> Expand to full organizational usage</li>
              <li><strong>5. Community Participation:</strong> Join the peer-to-peer network</li>
            </ol>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <h4 className="font-semibold text-[#7c5c2b] mb-2">📞 Getting Support:</h4>
            <ul className="text-sm space-y-1">
              <li>• <strong>Documentation:</strong> Comprehensive guides and API reference</li>
              <li>• <strong>Community Forum:</strong> Connect with other users and developers</li>
              <li>• <strong>Technical Support:</strong> Direct assistance for implementation challenges</li>
              <li>• <strong>Training Resources:</strong> Learn to optimize chakra configurations</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3a2a13] mb-8 md:mb-16 text-center drop-shadow ancient-futuristic-title px-4"
        variants={itemVariants}
      >
        Frequently Asked Questions
      </motion.h1>

      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 text-left hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-[#3a2a13] pr-4">
                  {faq.question}
                </h3>
                <motion.span
                  className="text-[#7c5c2b] text-xl font-bold"
                  animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </div>
            </button>
            
            {expandedFAQ === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="text-[#3a2a13] text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
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

export default FAQ; 