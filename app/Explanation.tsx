"use client";
import React from "react";
import GreekChakra from "./GreekChakra";

const Explanation = () => (
  <section className="w-full flex flex-col items-center justify-center py-24" style={{ fontFamily: 'Merriweather, serif' }}>
    <div className="text-center px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4 drop-shadow ancient-futuristic-title">The Ancient Wisdom <br /> Behind Nuvidya</h1>
      <p className="text-lg md:text-xl text-black mb-12 max-w-3xl mx-auto">
        Nuvidya draws inspiration from Chakra, an ancient vedic knowledge that has been lost over time. It represents the flow of energy in living systems, a framework we use to design and align intelligent systems in a more humane way.
      </p>
    </div>
    <GreekChakra />
    <style jsx>{`
      .ancient-futuristic-title {
        text-shadow: 0 0 8px #fffbe6, 0 0 2px #bfa76a;
        letter-spacing: 0.08em;
      }
    `}</style>
  </section>
);

export default Explanation; 