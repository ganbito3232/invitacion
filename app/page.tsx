"use client";
import { useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Nuestra primera foto 💕",
    text: "En esta foto fue nuestra primera salida juntos. Tal vez no lo sabías, pero desde ese día algo en mí cambió. Me sentí tranquilo, feliz y con una sonrisa que no podía esconder.",
    image: "/1.jpeg",
  },
  {
    title: "Una de mis favoritas ✨",
    text: "Esta es una de mis fotos favoritas porque me recuerda lo bien que lo paso contigo. Tu risa, tu forma de ser, los momentos simples que se vuelven especiales solo porque estás tú.",
    image: "/2.jpeg",
  },
  {
    title: "Eres mi persona favorita 💖",
    text: "Entre todas las personas del mundo, tú eres con quien quiero compartir mis días, mis risas y también mis silencios. Eres mi lugar seguro.",
    image: "/3.jpeg",
  },
  {
    title: "Lo que siento por ti ❤️",
    text: "La paso increíble contigo, me haces feliz de una forma muy especial y sincera. Por eso quiero estar contigo, cuidarte, acompañarte y elegirte siempre.",
    image: "/4.jpeg",
  },
];

export default function Home() {
  const [step, setStep] = useState(-1);
  const [beat, setBeat] = useState(false);

  const handleHeart = () => {
    setBeat(true);
    setStep(0);
    setTimeout(() => setBeat(false), 300);
  };

  const nextStep = () => {
    setStep((prev) => (prev + 1 < steps.length ? prev + 1 : prev));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center px-4">
      {step === -1 ? (
        /* PANTALLA INICIAL */
        <button
          onClick={handleHeart}
          className={`text-8xl transition-transform duration-300 ${
            beat ? "scale-125" : "scale-100"
          }`}
        >
          ❤️
        </button>
      ) : (
        /* CONTENIDO */
        <div className="w-full max-w-sm bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden animate-fade">
          {/* Imagen */}
          <div className="relative w-full h-72">
            <Image
              src={steps[step].image}
              alt="Nosotros"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Texto */}
          <div className="p-5 text-center">
            <h2 className="text-2xl font-bold text-rose-600 mb-3">
              {steps[step].title}
            </h2>
            <p className="text-rose-700 leading-relaxed">{steps[step].text}</p>

            {step < steps.length - 1 && (
              <button
                onClick={nextStep}
                className="mt-5 px-6 py-3 bg-rose-500 text-white rounded-full font-semibold shadow-lg active:scale-95 transition"
              >
                Siguiente 💕
              </button>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
