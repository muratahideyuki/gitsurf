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
    <div className="bg-gray-100">
      {/* ヒーローセクション */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景画像 */}
        <Image
          src="/a.jpg"
          alt="Hero background"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority
          className="z-0"
        />

        {/* テキスト */}
        <div className="z-10 p-8 text-center text-white">
          <h1 className="text-6xl md:text-9xl font-bold mb-4 animated-text">
            ISAMU SUMI
          </h1>
        </div>
      </main>

      {/* ボックスセクション */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">ボックス1</h2>
              <p>コンテンツの説明をここに。</p>
            </div>
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">ボックス2</h2>
              <p>コンテンツの説明をここに。</p>
            </div>
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">ボックス3</h2>
              <p>コンテンツの説明をここに。</p>
            </div>
            <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">ボックス4</h2>
              <p>コンテンツの説明をここに。</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 ISAMU SUMI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
