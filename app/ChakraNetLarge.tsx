'use client';
import React from "react";
import { motion } from "framer-motion";

const nodeSvgs = [
  (color: string) => (<g><path d="M250 75 l25 43.75 l-25 43.75 l-25 -43.75 z" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="250" cy="118.75" r="37.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
  (color: string) => (<g><polygon points="87.5,200 112.5,237.5 87.5,275 62.5,237.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="87.5" cy="237.5" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
  (color: string) => (<g><polygon points="412.5,200 437.5,237.5 412.5,275 387.5,237.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="412.5" cy="237.5" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
  (color: string) => (<g><polygon points="87.5,375 112.5,412.5 87.5,450 62.5,412.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="87.5" cy="412.5" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
  (color: string) => (<g><polygon points="412.5,375 437.5,412.5 412.5,450 387.5,412.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="412.5" cy="412.5" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
  (color: string) => (<g><polygon points="250,462.5 275,500 250,537.5 225,500" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="250" cy="500" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>),
];

const centerSvg = (color: string) => (<g><polygon points="250,275 275,312.5 250,350 225,312.5" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /><circle cx="250" cy="312.5" r="35" fill={color} stroke="#7c5c2b" strokeWidth="2.5" /></g>);

const mandalaSvg = (cx: number, cy: number, color: string) => (
  <g>
    <polygon points={Array.from({ length: 12 }).map((_, i) => { const angle = (Math.PI * 2 * i) / 12; const r = i % 2 === 0 ? 55 : 42.5; return `${cx + Math.sin(angle) * r},${cy - Math.cos(angle) * r}`; }).join(' ')} fill={color} stroke="#7c5c2b" strokeWidth="3.125" opacity="0.8" filter="url(#neon-glow)" />
    <circle cx={cx} cy={cy} r={40} fill={color} stroke="#7c5c2b" strokeWidth="3.75" filter="url(#neon-glow)" />
  </g>
);

const NeonGlowDefs = () => (
  <defs>
    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="7.5" floodColor="#fffbe6" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#fffbe6" floodOpacity="0.4" />
    </filter>
  </defs>
);

interface DataPulseProps { x1: number; y1: number; x2: number; y2: number; duration?: number; delay?: number; }
const DataPulse = ({ x1, y1, x2, y2, duration = 2, delay = 0 }: DataPulseProps) => {
  const dx = x2 - x1; const dy = y2 - y1;
  return (<motion.circle r={7.5} fill="#fffbe6" filter="url(#neon-glow)" initial={{ cx: x1, cy: y1, opacity: 0 }} animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] }} transition={{ duration, delay, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }} />);
};

const nodes = [
  { x: 250, y: 87.5, icon: "Σ", color: "#bfa6b6", title: "Ajha Phrónesis" }, { x: 87.5, y: 225, icon: "M", color: "#c7b36a", title: "Mularebus" }, { x: 412.5, y: 225, icon: "Λ", color: "#5fae8e", title: "VākSopher" }, { x: 87.5, y: 362.5, icon: "V", color: "#e2a05c", title: "Svathymos" }, { x: 412.5, y: 362.5, icon: "A", color: "#e2c590", title: "Anahsophia" }, { x: 250, y: 500, icon: "Θ", color: "#8ca76a", title: "VisuNoesis" },
];
const centerNode = { x: 250, y: 293.75, icon: "Φ", color: "#7ca07c", title: "SahaPhrónesis" };

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 3], [1, 5], [2, 4], [2, 5], [3, 5], [4, 5],
  [0, "center"], [1, "center"], [2, "center"], [3, "center"], [4, "center"], [5, "center"]
];

const ChakraNetLarge = () => {
  const getNodePos = (i: number) => ({ x: nodes[i].x, y: nodes[i].y });
  const getCenterPos = () => ({ x: centerNode.x, y: centerNode.y });

  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 1.1, ease: [0.42, 0, 0.58, 1] }} style={{ width: '100%', height: '100%' }}>
      <div className="flex justify-center items-center w-full py-4" style={{ zIndex: -1, width: 'auto', height: '100%', pointerEvents: 'none' }}>
        <motion.svg width={500} height={537.5} style={{ maxWidth: "100%" }} initial={{ rotate: 0 }} animate={{ rotate: [0, 2, -2, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}>
          <NeonGlowDefs />
          {connections.map(([a, b], idx) => {
            const posA = a === "center" ? getCenterPos() : getNodePos(a as number); const posB = b === "center" ? getCenterPos() : getNodePos(b as number);
            return (
              <g key={idx}>
                <motion.line x1={posA.x} y1={posA.y} x2={posB.x} y2={posB.y} stroke="#7c5c2b" strokeWidth={2.5} initial={{ opacity: 0.5 }} animate={{ opacity: [0.5, 1, 0.5], strokeWidth: [2.5, 5, 2.5], stroke: ["#7c5c2b", "#fffbe6", "#7c5c2b"] }} transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }} />
                <DataPulse x1={posA.x} y1={posA.y} x2={posB.x} y2={posB.y} duration={2 + (idx % 3)} delay={idx * 0.3} />
              </g>
            );
          })}
          {nodes.map((node, i) => (
            <g key={i}>
              {mandalaSvg(node.x, node.y, node.color)}
              <text x={node.x} y={node.y} dominantBaseline="middle" textAnchor="middle" fill="#fffbe6" fontSize="37.5" fontWeight="bold" style={{ pointerEvents: 'none', textShadow: "0 0 10px #fffbe6" }}>{node.icon}</text>
            </g>
          ))}
          <g>
            {mandalaSvg(centerNode.x, centerNode.y, centerNode.color)}
            <text x={centerNode.x} y={centerNode.y} dominantBaseline="middle" textAnchor="middle" fill="#fffbe6" fontSize="37.5" fontWeight="bold" style={{ pointerEvents: 'none', textShadow: "0 0 10px #fffbe6" }}>{centerNode.icon}</text>
          </g>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ChakraNetLarge; 