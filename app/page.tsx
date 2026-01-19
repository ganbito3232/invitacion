"use client";
import { useState, useRef } from "react";

export default function Home() {
  const [phase, setPhase] = useState("closed");
  const audioRef = useRef(null);

  const openEnvelope = () => {
    if (phase !== "closed") return;

    setPhase("opening");

    setTimeout(() => {
      setPhase("open");
    }, 3200);
  };

  return (
    <main
      style={{
        background:
          "radial-gradient(circle at 30% 30%, #f8f1e7, #e7d6b8, #c9a96a)",
      }}
      className="min-h-screen  flex items-center justify-center overflow-hidden"
    >
      {/* <audio ref={audioRef} src="/paper.mp3" preload="auto" /> */}

      {/* SOBRE */}
      {phase !== "open" && (
        <div
          className="relative w-[92vw] max-w-[420px] aspect-3/4"
          style={{ perspective: "1600px" }}
          onClick={openEnvelope}
        >
          {/* BASE */}
          <div className="absolute inset-0 rounded-2xl bg-[#cfdcc8]" />

          {/* TEXTURA PAPEL */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6) 1px, transparent 2px),
                radial-gradient(circle at 70% 60%, rgba(255,255,255,0.4) 1px, transparent 2px)
              `,
              backgroundSize: "60px 60px",
              opacity: 0.25,
              mixBlendMode: "overlay",
            }}
          />

          {/* SOMBRA INTERNA */}
          <div className="absolute inset-0 rounded-2xl shadow-inner pointer-events-none" />

          {/* SOLAPA INFERIOR */}
          <div
            className="absolute inset-0 bg-[#b9cbb0] rounded-2xl"
            style={{
              clipPath:
                "polygon(0% 100%, 0% 70%, 50% 50%, 100% 70%, 100% 100%)",
              boxShadow: "inset 0 10px 12px rgba(0,0,0,0.12)",
            }}
          />

          {/* SOLAPA SUPERIOR */}
          <div
            className="absolute inset-0 bg-[#b3c6a8] rounded-2xl origin-top"
            style={{
              clipPath: "polygon(0% 0%, 0% 28%, 50% 58%, 100% 28%, 100% 0%)",
              transformStyle: "preserve-3d",
              transform:
                phase === "opening" ? "rotateX(115deg)" : "rotateX(0deg)",
              transition: "transform 2.4s cubic-bezier(0.4,0.0,0.2,1)",
              boxShadow: "inset 0 -8px 10px rgba(0,0,0,0.12)",
            }}
          />

          {/* SELLO DE CERA */}
          {phase === "closed" && (
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              w-24 h-24 rounded-full flex items-center justify-center
              cursor-pointer select-none"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #f8f1e7, #e7d6b8, #c9a96a)",
                boxShadow:
                  "0 10px 20px rgba(0,0,0,0.35), inset 0 3px 6px rgba(255,255,255,0.6)",
                transform: "rotate(-3deg)",
              }}
            >
              <span className="font-serif text-[#8c7a5a] text-xl tracking-widest">
                G&A
              </span>
            </div>
          )}

          {/* CARTA */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-[88%]
              bg-white rounded-3xl shadow-2xl px-8 py-10 text-center
              transition-all duration-[1200ms] ease-out
              ${
                phase === "opening"
                  ? "top-[55%] -translate-y-[130%] opacity-100 scale-105"
                  : "top-[55%] opacity-0 scale-95"
              }`}
            style={{ transitionDelay: "1800ms" }}
          >
            <h2 className="font-serif text-2xl text-[#2f2f2f]">
              Gabriel <span className="text-[#c7a16b]">♥</span> Ani
            </h2>

            <p className="mt-2 text-xs tracking-widest text-gray-500">
              NOS CASAMOS
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

            <p className="text-gray-600 leading-relaxed">
              Con mucha alegría queremos invitarte a celebrar nuestro
              matrimonio.
            </p>

            <div className="space-y-1 text-gray-700">
              <p className="font-semibold tracking-widest">15 · Marzo · 2026</p>
              <p>18:00 hrs</p>
              <p>Viña del Mar</p>
            </div>

            <div className="space-y-3 pt-4">
              <button className="w-full py-3 rounded-xl bg-[#c7a16b] text-white font-medium">
                Confirmar asistencia
              </button>

              <button className="w-full py-3 rounded-xl border border-gray-300 text-gray-700">
                Ver ubicación
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
