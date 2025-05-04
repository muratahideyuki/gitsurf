"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    // GSAPアニメーション
    gsap.fromTo(
      ".animated-text",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 }
    );
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url(/a.jpg)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animated-text">
          ISAMU SUMI
        </h1>
        <p className="text-xl md:text-2xl animated-text">Surfer</p>
      </div>
    </main>
  );
}
