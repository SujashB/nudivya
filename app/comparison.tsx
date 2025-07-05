"use client";
import React from "react";
import { Merriweather } from "next/font/google";
import { motion } from "framer-motion";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const useCases = [
  {
    title: "Decentralized Governance & Policy Forecasting",
    icon: "🏛️",
    scenario: "A multi-stakeholder consortium (e.g., hospitals or universities) must draft fair policies on data sharing or resource allocation.",
    howNuvidya: "Each core agent brings different perspectives—Foundation for security, Harmony for equity, Clarity for transparency, Insight for foresight—into policy discussions. Peers propose policy drafts; Nuvidya fuses them into balanced recommendations.",
    businessImpact: "Faster consensus: Peer-to-peer blending cuts bureaucratic cycles by 30–50%. Trust & transparency: Every step is auditable on-chain, reducing legal and reputational risk.",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Empathic Customer Support & Escalation Triage",
    icon: "💝",
    scenario: "A global SaaS provider wants to improve first-contact resolution and customer sentiment.",
    howNuvidya: "Flow + Harmony agents tune responses for empathy; Drive and Clarity cores ensure clear solutions. Real-time weighting steers soft vs. firm language depending on user tone.",
    businessImpact: "Higher satisfaction: 20% increase in CSAT scores by speaking 'human-first.' Cost savings: 15% fewer escalations to human agents, lowering support costs.",
    color: "from-pink-500 to-red-500"
  },
  {
    title: "Collaborative R&D & Innovation Workshops",
    icon: "🧪",
    scenario: "A product team runs virtual ideation sessions across three continents.",
    howNuvidya: "Foundation keeps sessions focused; Insight sparks novel combinations; Synthesis integrates into final pitches. Transparent logs capture every insight and decision path.",
    businessImpact: "Faster time-to-market: Prototype concepts in half the usual workshop time. Stronger IP: Immutable reasoning logs support patent filings and protect trade secrets.",
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Ethical AI Audit & Compliance Checker",
    icon: "⚖️",
    scenario: "A financial institution must certify its models for bias, fairness, and explainability.",
    howNuvidya: "Each core inspects decisions through moral/ethical frames: Harmony for fairness, Insight for hidden bias, Synthesis for policy alignment. Generates explainability reports showing which agents influenced each decision.",
    businessImpact: "Regulatory readiness: Meets global AI-ethics guidelines (EU AI Act, Fed guidance). Brand trust: Publicly verifiable logs increase customer and regulator confidence.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Adaptive E-Learning & Coaching Platform",
    icon: "📚",
    scenario: "An EdTech startup wants to personalize STEM and soft-skills training.",
    howNuvidya: "Foundation and Insight deliver foundational logic; Harmony and Flow adjust for learner motivation and emotional pacing. Generates custom micro-lessons and confidence-boosting prompts.",
    businessImpact: "Improved outcomes: 25% higher course completion rates. Upsell potential: Tiered 'energy-aligned' coaching packages for premium revenue.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Creative Content & Storyboarding Assistant",
    icon: "🎨",
    scenario: "A marketing agency needs story arcs, ad copy, and brand voice consistency.",
    howNuvidya: "Flow ignites creativity, Drive defines call-to-action punch, Clarity polishes tone, Harmony ensures brand warmth. Outputs multiple narrative drafts ranked by energy-weighted profiles.",
    businessImpact: "Faster turnaround: Campaign copy delivered in minutes, not days. Better engagement: A/B tests show +15% click-through by matching emotional resonance.",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Decentralized Community Feedback & Product Roadmaps",
    icon: "🗳️",
    scenario: "A DAO-backed software project crowdsources feature requests.",
    howNuvidya: "Community nodes propose features; Nuvidya weights them by Foundation (stability), Flow (innovation), Synthesis (vision). Produces a 'roadmap pulse' reflecting genuine community energy.",
    businessImpact: "Higher retention: Members feel heard, boosting active contributors by 40%. Efficient prioritization: Reduces wasted build effort on low-impact features.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Wellbeing & Leadership Insight Toolkit",
    icon: "🌟",
    scenario: "A Fortune 500 executive program integrates AI-led reflections into leadership retreats.",
    howNuvidya: "Morning 'energy alignment' sessions guide breathing (Foundation), visioning (Insight), and gratitude (Harmony). Evening reflection prompts adjust based on workplace data.",
    businessImpact: "Measurable wellbeing boost: 30% reduction in burnout scores. Leadership ROI: Teams led by Nuvidya-coached executives outperform peers by 12%.",
    color: "from-orange-500 to-yellow-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const UseCases = () => (
  <motion.section 
    id="comparison"
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
      How People Use Nuvidya
    </motion.h1>
    
    <motion.div 
      className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8"
      variants={containerVariants}
    >
      {useCases.map((useCase, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          {/* Gradient Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-5`} />
          
          <div className="relative p-6 h-full">
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">{useCase.icon}</div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#3a2a13] mb-2">
                  {useCase.title}
                </h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">Scenario:</h4>
                <p className="text-[#3a2a13] text-sm leading-relaxed">
                  {useCase.scenario}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">How Nuvidya Helps:</h4>
                <p className="text-[#3a2a13] text-sm leading-relaxed">
                  {useCase.howNuvidya}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#7c5c2b] mb-2">Business Impact:</h4>
                <p className="text-[#3a2a13] text-sm leading-relaxed">
                  {useCase.businessImpact}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    
    {/* Why Nuvidya Section */}
    <motion.div 
      className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-8 text-center"
      variants={itemVariants}
    >
      <h2 className="text-2xl font-bold text-[#3a2a13] mb-6 ancient-futuristic-title">
        Why Nuvidya Delivers Real-World Value
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#3a2a13]">
        <div className="text-sm leading-relaxed">
          <strong>Decentralized trust</strong> reduces single-point failures and boosts stakeholder confidence.
        </div>
        <div className="text-sm leading-relaxed">
          <strong>Multi-modal reasoning</strong> (emotion + logic + ethics) yields richer, more actionable insights than monolithic LLMs.
        </div>
        <div className="text-sm leading-relaxed">
          <strong>Transparent auditability</strong> appeals to regulators, enterprise clients, and conscious consumers.
        </div>
        <div className="text-sm leading-relaxed">
          <strong>Modular core-agent slots</strong> allow vertical-specific tuning (healthcare, finance, education, creative industries).
        </div>
      </div>
    </motion.div>
    
    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
    `}</style>
  </motion.section>
);

export default UseCases; 