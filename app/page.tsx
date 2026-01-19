"use client";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Home() {
  const [phase, setPhase] = useState("closed");
  const audioRef = useRef(null);

  const openEnvelope = () => {
    if (phase !== "closed") return;

    setPhase("opening");
    setTimeout(() => setPhase("open"), 3600);
  };

  return (
    <main className="min-h-screen bg-[#e8f1f5] flex items-center justify-center relative overflow-hidden">
      {/* HALO DE LUZ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[720px] bg-[#cfdcc8] blur-3xl opacity-30 rounded-full" />
      </div>

      {/* SOBRE */}
      {phase !== "open" && (
        <div
          onClick={openEnvelope}
          className="relative w-screen h-screen"
          style={{ perspective: "2000px" }}
        >
          {/* BASE */}
          <div className="absolute inset-0 rounded-2xl bg-[#cfdcc8]" />

          {/* PAPEL PRENSADO */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow: `
                inset 0 0 0 1px rgba(0,0,0,0.08),
                inset 0 20px 30px rgba(0,0,0,0.15)
              `,
            }}
          />

          {/* FLORES SUPERIORES */}
          <div className="absolute top-0 left-0 right-0 h-36 pointer-events-none">
            <Image
              src="/plantas-top.png"
              alt="Plantas decorativas"
              fill
              className="object-contain opacity-40"
              priority
            />
          </div>

          {/* FLORES INFERIORES */}
          <div
            className="absolute bottom-4 left-0 right-0 h-36 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 60%, rgba(0,0,0,0.18) 1px, transparent 3px),
                radial-gradient(circle at 70% 40%, rgba(0,0,0,0.14) 1px, transparent 3px)
              `,
              backgroundSize: "90px 90px",
              opacity: 0.28,
            }}
          />

          {/* SOLAPA INFERIOR */}
          <div
            className="absolute inset-0 bg-[#b9cbb0] rounded-2xl"
            style={{
              clipPath:
                "polygon(0% 100%, 0% 70%, 50% 50%, 100% 70%, 100% 100%)",
              boxShadow: `
                inset 0 1px 0 rgba(255,255,255,0.35),
                inset 0 12px 16px rgba(0,0,0,0.22)
              `,
            }}
          />

          {/* SOLAPA SUPERIOR */}
          {/* SOLAPA SUPERIOR CON COLOR + PLANTAS */}
          <div
            className="absolute inset-0 rounded-2xl origin-top overflow-hidden"
            style={{
              clipPath: "polygon(0% 0%, 0% 28%, 50% 50%, 100% 28%, 100% 0%)",
              transform:
                phase === "opening" ? "rotateX(120deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
              transition: "transform 3s cubic-bezier(0.4,0.0,0.2,1)",
            }}
          >
            {/* COLOR BASE */}
            <div className="absolute inset-0 bg-[#b3c6a8]" />

            {/* PLANTAS PNG */}
            <Image
              src="/fondo1.png"
              alt="Plantas decorativas"
              fill
              className="w-full h-full object-contain opacity-30 translate-y-[-230px] z-0"
              priority
            />
            {/* SOMBRA DEL PLIEGUE */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                boxShadow: `
        inset 0 -1px 0 rgba(0,0,0,0.25),
        inset 0 -10px 14px rgba(0,0,0,0.22)
      `,
              }}
            />
          </div>

          {/* SELLO HUNDIDO */}
          {/* SELLO TIPO FOTO */}
          {/* SELLO 3 CÍRCULOS (COMO LA FOTO) */}
          {/* SELLO 3 CÍRCULOS – SOLO TAILWIND */}
          {/* SELLO FINAL – IGUAL A LA FOTO */}
          {phase === "closed" && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <Image
                src="/ga.png"
                alt="Sello G&A"
                width={250}
                height={250}
                className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.22)]"
                priority
              />
            </div>
          )}
          {/* CARTA FULL (COMO LA FOTO) */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[92%]
            bg-[#fdfdfb] rounded-2xl shadow-2xl px-8 py-12 text-center
            transition-all ease-out
            ${
              phase === "opening"
                ? "top-[55%] -translate-y-[105%] opacity-100"
                : "top-[55%] opacity-0"
            }`}
            style={{
              transitionDuration: "1600ms",
              transitionDelay: "2300ms",
            }}
          >
            <h2 className="font-serif text-2xl text-[#2f2f2f]">
              Gabriel <span className="text-[#c7a16b]">♥</span> Ani
            </h2>
            <p className="mt-3 text-xs tracking-widest text-gray-500">
              ESTA INVITACIÓN ES EXCLUSIVA PARA TI
            </p>
          </div>
        </div>
      )}

      {/* CONTENIDO FINAL */}
      {phase === "open" && (
        <div className="w-full px-4 flex justify-center">
          <div className="animate-popIn bg-white rounded-3xl shadow-2xl px-8 py-12 text-center space-y-6 max-w-[420px] w-full">
            <h1 className="font-serif text-3xl text-[#2f2f2f]">
              Gabriel <span className="text-[#c7a16b]">♥</span> Ani
            </h1>
            <p className="text-gray-600">
              Con mucha alegría queremos invitarte a celebrar nuestro
              matrimonio.
            </p>
            <div className="space-y-1 text-gray-700">
              <p className="font-semibold tracking-widest">15 · Marzo · 2026</p>
              <p>18:00 hrs</p>
              <p>Viña del Mar</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
