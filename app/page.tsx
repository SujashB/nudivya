"use client";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ParallaxBackground from "./ParallaxBackground";
import Features from "./Features";
import FeaturesGrid from "./FeaturesGrid";
import EquationsSection from "./EquationsSection";
import Explanation from "./Explanation";
import UseCases from "./comparison";

import Demo from "./Demo";
import Footer from "./Footer";
import Invite from "./Invite";
import Spacer from "./Spacer";
import ChakraDemo from "./ChakraDemo";
import MathematicalFramework from "./MathematicalFramework";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-auto">
      <Navbar />
      <ParallaxBackground />
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Hero />
        <Spacer imageName="spacer_sun.png" />
        <FeaturesGrid />
        <Spacer imageName="spacer_lambda.png" />
        <Explanation />
        <Spacer imageName="spacer_rho.png" />
        <div id="equations">
          <EquationsSection />
        </div>
        <Spacer imageName="spacer_sun.png" />
        <UseCases />
        <Spacer imageName="spacer_lambda.png" />
        <Features />
        <Spacer imageName="spacer.png" />
        <Demo />
        <Spacer imageName="spacer_rho.png" />
        <ChakraDemo />
        <Spacer imageName="spacer_sun.png" />
        <MathematicalFramework />
        <Spacer imageName="spacer_lambda.png" />
  
        <Spacer imageName="spacer_lambda.png" />
        <Invite />
        <Spacer imageName="spacer_rho.png" />
      </div>
      <Footer />
    </div>
  );
}
