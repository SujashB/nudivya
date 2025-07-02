'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = 200; // Footer height
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      life: number;
      maxLife: number;
    }> = [];

    // Create particles
    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        life: 0,
        maxLife: Math.random() * 100 + 50
      };
    };

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(createParticle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life++;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Reset particle if it's too old
        if (particle.life > particle.maxLife) {
          particles[index] = createParticle();
        }

        // Draw particle
        const alpha = particle.opacity * (1 - particle.life / particle.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        
        // Create gradient for neon effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, '#3ecfff');
        gradient.addColorStop(0.5, '#3ecfff88');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = '#3ecfff';
        ctx.shadowBlur = particle.size * 3;
        ctx.fillStyle = '#3ecfff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      });

      // Draw connecting lines between nearby particles
      ctx.strokeStyle = '#3ecfff44';
      ctx.lineWidth = 1;
      particles.forEach((particle1, i) => {
        particles.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.3;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <footer className={`relative w-full bg-white/10 backdrop-blur-md neon-footer rounded-t-3xl ${merriweather.className}`} style={{margin: 0, padding: 0}}>
      {/* Particle Canvas - hidden on mobile for performance */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ zIndex: 1 }}
      />
      
      {/* Content */}
      <div className="relative z-10 w-full px-0 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full px-4 md:px-6">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-lg bg-white/30 backdrop-blur-md flex items-center justify-center overflow-hidden">
                <img src="/images/emblem.png" alt="Nuvidya Emblem" className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#3a2a13] tracking-wider">NUVIDYA</h3>
            </div>
            <p className="text-[#3a2a13] text-sm max-w-xs md:max-w-md">
              Where Ancient Wisdom Meets Modern Intelligence. 
              A peer-to-peer AI network designed to evolve through the people who use it.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-end gap-3 md:gap-4">
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <a href="#home" className="text-[#3a2a13] hover:text-[#3ecfff] transition-colors duration-200 text-sm font-medium">
                Home
              </a>
              <a href="#features" className="text-[#3a2a13] hover:text-[#3ecfff] transition-colors duration-200 text-sm font-medium">
                Features
              </a>
              <a href="#applications" className="text-[#3a2a13] hover:text-[#3ecfff] transition-colors duration-200 text-sm font-medium">
                Applications
              </a>
            </div>
            <div className="text-[#3a2a13] text-xs text-center md:text-right">
              © 2025 Nuvidya. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .neon-footer {
          box-shadow: 
            0 0 0 2px transparent,
            0 0 16px 4px #BEC5A488,
            0 0 32px 8px #BEC5A444,
            inset 0 0 32px #BEC5A41A;
        }
        @media (max-width: 768px) {
          .neon-footer {
            box-shadow: 
              0 0 0 1px transparent,
              0 0 8px 2px #BEC5A488,
              0 0 16px 4px #BEC5A444;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 