import { EyeIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useNavigate } from "react-router-dom";
import SeedData from "./seedData.ts";

export default function Collection() {
  const navigate = useNavigate();
  const { t } = useTranslation("collection");

  return (
    <main className="relative w-full min-h-full flex flex-col items-center gap-12 px-4 py-10 md:px-6 md:py-12 text-gray-200">
      <Outlet />
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

      <div className="w-11/12 max-w-6xl rounded-[2rem] bg-[#2b2f38]/85 p-4 md:p-6 shadow-lg backdrop-blur-sm">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6">
          {SeedData.map((item, idx) => (
            <div
              key={idx}
              className="group relative mb-4 md:mb-6 break-inside-avoid cursor-pointer overflow-hidden rounded-[1.5rem] bg-[#20242c] shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              onClick={() => navigate(`/collection/${item.id}`)}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/collection/${item.id}`);
                }}
                className="
                  absolute top-3 right-3 z-20 inline-flex items-center gap-2
                  rounded-full border border-white/15 bg-orange-500 px-3 py-2
                  text-white shadow-md transition-all duration-300
                  hover:bg-orange-400 hover:shadow-lg
                  cursor-pointer
                "
                aria-label={`${t("viewButton")} ${item.title}`}>
                <EyeIcon className="h-5 w-5" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                  {t("viewButton")}
                </span>
              </button>

              <img
                src={Array.isArray(item.image) ? item.image[0] : item.image}
                alt={`Gallery item ${idx + 1}`}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
              />

              <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-4 pt-12 transition-all duration-300">
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/75">
                  {item.technique}
                </p>
              </div>
            </div>
          ))}
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
