'use client';
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

// Custom SVG backgrounds for each node (mandala/star style)
const nodeSvgs = [
  // Ajha Phrónesis (Σ)
  (color: string) => (
    <g>
      <path d="M200 60 l20 35 l-20 35 l-20 -35 z" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="200" cy="95" r="30" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
  // Mulárebus
  (color: string) => (
    <g>
      <polygon points="70,160 90,190 70,220 50,190" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="70" cy="190" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
  // SahaPhrónesis (Λ)
  (color: string) => (
    <g>
      <polygon points="330,160 350,190 330,220 310,190" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="330" cy="190" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
  // Svâthymos
  (color: string) => (
    <g>
      <polygon points="70,300 90,330 70,360 50,330" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="70" cy="330" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
  // Anáhsophia
  (color: string) => (
    <g>
      <polygon points="330,300 350,330 330,360 310,330" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="330" cy="330" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
  // VisúNoesis (Φ)
  (color: string) => (
    <g>
      <polygon points="200,370 220,400 200,430 180,400" fill={color} stroke="#7c5c2b" strokeWidth="2" />
      <circle cx="200" cy="400" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    </g>
  ),
];
// Center: SahaPhrónesis (I)
const centerSvg = (color: string) => (
  <g>
    <polygon points="200,220 220,250 200,280 180,250" fill={color} stroke="#7c5c2b" strokeWidth="2" />
    <circle cx="200" cy="250" r="28" fill={color} stroke="#7c5c2b" strokeWidth="2" />
  </g>
);

// Sharp, pointy mandala/star SVG background
const mandalaSvg = (cx: number, cy: number, color: string) => (
  <g>
    {/* Outer sharp mandala/star shape (12-pointed) */}
    <polygon
      points={Array.from({ length: 12 }).map((_, i) => {
        const angle = (Math.PI * 2 * i) / 12;
        const r = i % 2 === 0 ? 44 : 34;
        return `${cx + Math.sin(angle) * r},${cy - Math.cos(angle) * r}`;
      }).join(' ')}
      fill={color}
      stroke="#7c5c2b"
      strokeWidth="2.5"
      opacity="0.8"
      filter="url(#neon-glow)"
    />
    {/* Inner circle */}
    <circle
      cx={cx}
      cy={cy}
      r={32}
      fill={color}
      stroke="#7c5c2b"
      strokeWidth="3"
      filter="url(#neon-glow)"
    />
  </g>
);

// Neon glow SVG filter definition
const NeonGlowDefs = () => (
  <defs>
    <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#fffbe6" floodOpacity="0.7" />
      <feDropShadow dx="0" dy="0" stdDeviation="12" floodColor="#fffbe6" floodOpacity="0.4" />
    </filter>
  </defs>
);

// Helper for animated data pulse along a line
interface DataPulseProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  duration?: number;
  delay?: number;
}
const DataPulse = ({ x1, y1, x2, y2, duration = 2, delay = 0 }: DataPulseProps) => {
  // Calculate direction vector
  const dx = x2 - x1;
  const dy = y2 - y1;
  return (
    <motion.circle
      r={6}
      fill="#fffbe6"
      filter="url(#neon-glow)"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, x2],
        cy: [y1, y2],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
    />
  );
};

// Updated node data to match the image and correct symbols
const nodes = [
  { x: 200, y: 70, icon: "Σ", color: "#bfa6b6", title: "Ajha Phrónesis" },
  { x: 70, y: 180, icon: "M", color: "#c7b36a", title: "Mularebus" },
  { x: 330, y: 180, icon: "Λ", color: "#5fae8e", title: "VākSopher" },
  { x: 70, y: 290, icon: "V", color: "#e2a05c", title: "Svathymos" },
  { x: 330, y: 290, icon: "A", color: "#e2c590", title: "Anahsophia" },
  { x: 200, y: 400, icon: "Θ", color: "#8ca76a", title: "VisuNoesis" },
];
const centerNode = { x: 200, y: 235, icon: "Φ", color: "#7ca07c", title: "SahaPhrónesis" };

// Connections (roughly matching the image)
const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 3], [1, 5], [2, 4], [2, 5], [3, 5], [4, 5],
  // Center connections
  [0, "center"], [1, "center"], [2, "center"], [3, "center"], [4, "center"], [5, "center"]
];

const ChakraNet = () => {
  const nodeRefs = useRef<(SVGCircleElement | null)[]>([]);
  const centerRef = useRef<SVGCircleElement | null>(null);

  // Animate nodes with GSAP
  useEffect(() => {
    nodes.forEach((node, i) => {
      if (nodeRefs.current[i]) {
        gsap.to(nodeRefs.current[i], {
          x: `+=${Math.random() * 30 - 15}`,
          y: `+=${Math.random() * 30 - 15}`,
          repeat: -1,
          yoyo: true,
          duration: 3 + Math.random() * 2,
          ease: "sine.inOut"
        });
      }
    });
    if (centerRef.current) {
      gsap.to(centerRef.current, {
        x: "+=0",
        y: "+=10",
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut"
      });
    }
  }, []);

  // Helper to get animated positions
  const getNodePos = (i: number) => {
    const el = nodeRefs.current[i];
    if (el) {
      const x = Number(el.getAttribute("cx")) + Number(el.getAttribute("x") || 0);
      const y = Number(el.getAttribute("cy")) + Number(el.getAttribute("y") || 0);
      return { x, y };
    }
    return { x: nodes[i].x, y: nodes[i].y };
  };
  const getCenterPos = () => {
    const el = centerRef.current;
    if (el) {
      const x = Number(el.getAttribute("cx")) + Number(el.getAttribute("x") || 0);
      const y = Number(el.getAttribute("cy")) + Number(el.getAttribute("y") || 0);
      return { x, y };
    }
    return { x: centerNode.x, y: centerNode.y };
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 1.1, ease: [0.42, 0, 0.58, 1] }}
      style={{ width: '100%', height: '100%' }}
    >
      <div
        className="flex justify-center items-center w-full py-4"
        style={{
          zIndex: -1,
          width: 'auto',
          height: '100%',
          pointerEvents: 'none', // so it doesn't block foreground interactions
        }}
      >
        <motion.svg
          width={400}
          height={430}
          style={{ maxWidth: "100%" }}
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        >
          <NeonGlowDefs />
          {/* Connections */}
          {connections.map(([a, b], idx) => {
            const posA = a === "center" ? getCenterPos() : getNodePos(a as number);
            const posB = b === "center" ? getCenterPos() : getNodePos(b as number);
            return (
              <g key={idx}>
                <motion.line
                  x1={posA.x}
                  y1={posA.y}
                  x2={posB.x}
                  y2={posB.y}
                  stroke="#7c5c2b"
                  strokeWidth={2}
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    strokeWidth: [2, 4, 2],
                    stroke: ["#7c5c2b", "#fffbe6", "#7c5c2b"]
                  }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
                />
                {/* Data pulse animation */}
                <DataPulse x1={posA.x} y1={posA.y} x2={posB.x} y2={posB.y} duration={2 + (idx % 3)} delay={idx * 0.3} />
              </g>
            );
          })}
          {/* Nodes */}
          {nodes.map((node, i) => (
            <g key={i} style={{ filter: "url(#neon-glow)" }}>
              {mandalaSvg(node.x, node.y, node.color)}
              <text
                x={node.x}
                y={node.y + 10}
                textAnchor="middle"
                fontSize="3.2rem"
                fontWeight="bold"
                fill="#7c5c2b"
                fontFamily="Merriweather, serif"
                dominantBaseline="middle"
              >
                {node.icon}
              </text>
            </g>
          ))}
          {/* Center node */}
          <g style={{ filter: "url(#neon-glow)" }}>
            {mandalaSvg(centerNode.x, centerNode.y, centerNode.color)}
            <text
              x={centerNode.x}
              y={centerNode.y + 10}
              textAnchor="middle"
              fontSize="3.2rem"
              fontWeight="bold"
              fill="#7c5c2b"
              fontFamily="Merriweather, serif"
              dominantBaseline="middle"
            >
              {centerNode.icon}
            </text>
          </g>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default ChakraNet;