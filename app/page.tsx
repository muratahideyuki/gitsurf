import Image from "next/image";

// app/page.tsx

export default function Home() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: "url(/a.jpg)" }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">ore</h1>
        <p className="text-xl md:text-2xl">Pro Surfer / Wave Artist</p>
      </div>
    </main>
  );
}
