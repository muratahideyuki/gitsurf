"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    // 文字を1文字ずつアニメーション
    const textElements = document.querySelectorAll(".animated-text");
    textElements.forEach((element) => {
      const text = element.textContent || "";
      element.innerHTML = text
        .split("")
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      gsap.fromTo(
        element.querySelectorAll(".char"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    });
  }, []);

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景画像を next/image で表示 */}
      <Image
        src="/a.jpg"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={90}
        priority
        className="z-0"
      />

      {/* テキストのみ */}
      <div className="z-10 p-8 text-center text-white">
        <h1 className="text-4xl md:text-9xl font-bold mb-4 animated-text">
          ISAMU SUMI
        </h1>
      </div>
    </main>
  );
}
