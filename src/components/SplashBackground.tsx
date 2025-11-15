import { useMemo, useState } from "react";

export default function SplashBackground() {
  const [seed, setSeed] = useState(0); // fuerza regeneración

  const splashes = [
    "/splash_blue.svg",
    "/splash_green.svg",
    "/splash_magenta.svg",
    "/splash_red.svg",
    "/splash_cyan.svg",
    "/splash_indigo.svg",
    "/splash_orange.svg",
    "/splash_yellow.svg",
  ];
  const overlays = [
    "/brush.svg",
    "/pencil.svg",
    "color_palette.svg",
    "bloc.svg",
  ];

  const tailwindColors = [
    "#dc2626", // red-600
    "#ea580c", // orange-600
    "#ca8a04", // yellow-600
    "#16a34a", // green-600
    "#0891b2", // cyan-600
    "#2563eb", // blue-600
    "#4f46e5", // indigo-600
    "#db2777", // pink-600
  ];

  // 🎨 Capa inferior — splashes coloreados aleatorios
  const randomSplashes = useMemo(() => {
    return Array.from({ length: 16 }).map(() => {
      const src = splashes[Math.floor(Math.random() * splashes.length)];
      const color =
        tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
      const size = 150 + Math.random() * 150;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const rotate = Math.random() * 360;
      const opacity = 0.6 + Math.random() * 0.3;
      return { src, color, size, top, left, rotate, opacity };
    });
  }, [seed]); // 🔁 cambia al hacer clic

  // 🖌️ Capa superior — brush y pencil (solo 2)
  const overlayElements = useMemo(() => {
    return Array.from({ length: 8 }).map(() => {
      const src = overlays[Math.floor(Math.random() * overlays.length)];
      const size = 120 + Math.random() * 180;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const rotate = Math.random() * 45 - 22;
      const opacity = 0.8 + Math.random() * 0.2;
      return { src, size, top, left, rotate, opacity };
    });
  }, [seed]); // 🔁 también cambia con el mismo seed

  return (
    <>
      {/* 🎨 Fondo con splashes (z-13) */}
      <div className="absolute z-13 inset-0 overflow-hidden pointer-events-none w-screen h-screen">
        {randomSplashes.map((splash, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: splash.size,
              height: splash.size,
              top: `calc(${splash.top}% - ${splash.size / 2}px)`,
              left: `calc(${splash.left}% - ${splash.size / 2}px)`,
              transform: `rotate(${splash.rotate}deg)`,
              opacity: splash.opacity,
              backgroundColor: splash.color,
              WebkitMaskImage: `url(${splash.src})`,
              maskImage: `url(${splash.src})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              mixBlendMode: "multiply",
            }}
          />
        ))}
      </div>

      {/* ✏️ Capa superior con brush y pencil (z-14) */}
      <div className="absolute z-14 inset-0 overflow-hidden pointer-events-none w-screen h-screen">
        {overlayElements.map((el, i) => (
          <img
            key={i}
            src={el.src}
            alt={`overlay-${i}`}
            style={{
              position: "absolute",
              width: el.size,
              height: el.size,
              top: `calc(${el.top}% - ${el.size / 2}px)`,
              left: `calc(${el.left}% - ${el.size / 2}px)`,
              transform: `rotate(${el.rotate}deg)`,
              opacity: el.opacity,
            }}
          />
        ))}
      </div>

      {/* 🔘 Botón para regenerar el fondo */}
      <button
        onClick={() => setSeed((s) => s + 1)}
        className="absolute bottom-6 left-6 z-20 text-white px-8 py-3 text-lg cursor-pointer transition-transform duration-300 hover:scale-120 hidden sm:flex">
        {/* Fondo SVG */}
        <img
          src="/splash_button.svg"
          alt="splash background"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
        />
        <span className="relative">¡Splash!</span>
      </button>
    </>
  );
}
