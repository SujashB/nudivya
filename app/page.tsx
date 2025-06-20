"use client";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ParallaxBackground from "./ParallaxBackground";
import Features from "./Features";
import Explanation from "./Explanation";
import Comparison from "./comparison";
import Applications from "./Applications";
import Demo from "./Demo";
import Footer from "./Footer";
import Invite from "./Invite";
import Spacer from "./Spacer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-0 overflow-auto">
      <Navbar />
      <ParallaxBackground />
      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <Hero />
        <Spacer imageName="spacer_sun.png" />
        <Explanation />
        <Spacer imageName="spacer_lambda.png" />
        <Features />
        <Spacer imageName="spacer_rho.png" />
        <Comparison />
        <Spacer imageName="spacer.png" />
        <Applications />
        <Spacer imageName="spacer_sun.png" />
        <Demo />
        <Spacer imageName="spacer_lambda.png" />
        <Invite />
        <Spacer imageName="spacer_sun.png" />
      </div>
      <Footer />
    </div>
  );
}
