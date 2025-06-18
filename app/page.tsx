"use client";
import { Merriweather } from "next/font/google";
import LandingPage from "./LandingPage";
import Features from "./Features";
import Applications from "./Applications";
import Navbar from "./Navbar";
import Explanation from "./Explanation";
import Comparison from "./comparison";
import Demo from "./Demo";
import Footer from "./Footer";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-2 py-0 overflow-auto">
      <Navbar />
      <div className="w-full flex flex-col items-center justify-center min-h-screen">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0" style={{minHeight: '80vh'}}>
          <div className="flex-1 flex items-center justify-center">
            <LandingPage />
          </div>
        </div>
        <Explanation />
        <Comparison />
        <div className="w-full flex flex-col items-center justify-center mt-2">
          <Features />
        </div>
        <Demo />
        <div className="w-full flex flex-col items-center justify-center mt-8">
          <Applications />
        </div>
      </div>
      <Footer />
    </div>
  );
}
