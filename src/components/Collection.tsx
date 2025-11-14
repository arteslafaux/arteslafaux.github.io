import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Collection() {
  const navigate = useNavigate();
  const { t } = useTranslation("collection");
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const simulateKey = (key: "ArrowLeft" | "ArrowRight") => {
    const keyboardEvent = new KeyboardEvent("keydown", { key });
    document.dispatchEvent(keyboardEvent);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;
      const scrollAmount = 400;
      const maxScroll = carousel.scrollWidth - carousel.clientWidth;
      const threshold = 40; // tolerancia para considerar "estoy al final/inicio"

      if (e.key === "ArrowRight") {
        if (carousel.scrollLeft >= maxScroll - threshold) {
          // Ya estoy en el final → ahora sí loop al inicio
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else if (
          carousel.scrollLeft + scrollAmount >=
          maxScroll - threshold
        ) {
          // Próximo paso me dejaría cerca del final → ajusto al final exacto
          carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else {
          // Movimiento normal
          carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }

      if (e.key === "ArrowLeft") {
        if (carousel.scrollLeft <= threshold) {
          // Ya estoy al inicio → loop al final
          carousel.scrollTo({ left: maxScroll, behavior: "smooth" });
        } else if (carousel.scrollLeft - scrollAmount <= threshold) {
          // Próximo paso me deja cerca del inicio → ajusto al inicio exacto
          carousel.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Movimiento normal
          carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <main className="relative w-full gap-12 h-full flex flex-col items-center justify-center overflow-hidden text-gray-200">
      {/* Título */}
      <div className="text-center leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
        <h1 className="text-5xl font-extrabold tracking-wide text-white mb-4">
          {t("title") || "Colección de Proyectos"}
        </h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto">
          {t("subtitle") ||
            "Una selección de trabajos que reflejan creatividad, identidad y diseño funcional."}
        </p>
      </div>

      {/* 🔹 Contenedor del carousel + botones */}
      <div className="relative w-11/12 max-w-6xl flex flex-col md:flex-row items-center justify-center">
        {/* Botón Izquierda */}
        <button
          aria-label="Prev"
          onClick={() => simulateKey("ArrowLeft")}
          className="md:flex hidden absolute left-0 z-20 bg-[#2b2f38]/80 hover:bg-orange-500 text-white p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer">
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        {/* Carousel DaisyUI */}
        <div
          ref={carouselRef}
          className="carousel carousel-center bg-[#2b2f38] rounded-box w-full space-x-6 p-8 shadow-lg scroll-smooth">
          {[...Array(16)].map((_, idx) => (
            <div
              key={idx}
              className="carousel-item relative group cursor-pointer transition-all duration-500"
              onClick={() => navigate(`/gallery/${idx + 1}`)}>
              <img
                src={`https://picsum.photos/800/1000?random=${idx + 1}`}
                alt={`Gallery item ${idx + 1}`}
                className="rounded-box w-80 h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className="absolute bottom-0 left-0 w-full bg-white/50 py-3 px-4 
                           rounded-b-box transition-all duration-300 
                           group-hover:bg-white/60 group-hover:rounded-t-box backdrop-blur-md">
                <h3 className="text-black font-semibold text-lg">
                  {t("gallery.title")} #{idx + 1}
                </h3>
                <p className="text-gray-700 text-xs">
                  {t("header.description")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Derecha */}
        <button
          aria-label="Next"
          onClick={() => simulateKey("ArrowRight")}
          className="md:flex hidden absolute right-0 z-20 bg-[#2b2f38]/80 hover:bg-orange-500 text-white p-3 rounded-full shadow-md transition-all duration-300 cursor-pointer">
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        <div className="flex md:hidden w-full justify-center gap-10 mt-6">
          <button
            aria-label="Prev-Mobile"
            onClick={() => simulateKey("ArrowLeft")}
            className="bg-[#2b2f38]/80 hover:bg-orange-500 text-white p-4 rounded-full shadow-md transition-all duration-300 cursor-pointer">
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          <button
            aria-label="Next-Mobile"
            onClick={() => simulateKey("ArrowRight")}
            className="bg-[#2b2f38]/80 hover:bg-orange-500 text-white p-4 rounded-full shadow-md transition-all duration-300 cursor-pointer">
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      <Link
        to="/"
        className="text-orange-500 font-semibold tracking-widest hover:text-orange-400">
        ← {t("button")}
      </Link>
      {/* Sombra decorativa */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" /> */}
    </main>
  );
}
