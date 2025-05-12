"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    <div className="bg-white min-h-screen">
      <header className="max-w-screen-xl mx-auto px-4">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className={`${roboto.className} text-4xl md:text-6xl font-light`}>
            SURFER
          </h2>
          <h1 className={`${roboto.className} text-6xl md:text-9xl font-bold`}>
            SUMI ISAMU
          </h1>
          <div className="relative w-full h-[60vh] mt-4">
            <Image
              src="/b.jpg"
              alt="Wave background"
              fill
              quality={90}
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
