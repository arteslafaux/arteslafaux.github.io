import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MainContent() {
  const { t } = useTranslation("mainContent");

  return (
    <main className="relative w-full h-full flex items-center justify-center overflow-hidden lg:overflow-hidden overflow-y-auto lg:py-0 py-10">
      {/* <main className="relative w-full h-full flex items-center justify-center overflow-hidden overflow-y-auto py-10 lg:py-0"> */}
      {/* Contenedor de contenido principal */}
      <div className="relative flex w-10/12 max-w-6xl items-center justify-center lg:justify-between lg:flex-row flex-col-reverse gap-6">
        {/* Texto izquierdo */}
        <div
          className="
            flex flex-col gap-6 text-white lg:w-1/2 text-center items-center p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 shadow-lg leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
          <h1
            className="
              text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight
            ">
            <span>{t("professionalName")}</span>
            <br />
            <span className="font-light text-xl sm:text-2xl md:text-3xl  text-white capitalize">
              {t("role")}
            </span>
          </h1>

          <p className="text-white max-w-sm text-sm sm:text-base">
            {t("description")}
          </p>

          <div className="uppercase tracking-widest text-white text-sm">
            {t("name")}
          </div>

          <div className="flex flex-col gap-3 sm:gap-6 ">
            <Link
              to="/collection"
              className="text-orange-500 font-semibold tracking-widest hover:text-orange-400">
              {t("button")} →
            </Link>
            <Link
              to="/contact"
              className="text-orange-500 font-semibold tracking-widest hover:text-orange-400">
              {t("buttonAlt")} →
            </Link>
          </div>
        </div>

        {/* Imagen derecha (usando <img>) */}
        <div className="relative xl:w-1/2 flex justify-center items-center md:h-full xl:h-[300px]">
          {/* Mobile → círculo perfecto */}
          <div className="xl:hidden max-w-80 max-h-80 rounded-full overflow-hidden flex justify-center items-center backdrop-blur-md bg-white/10 border border-b-6 border-t border-l-3 border-r-3 border-white/50 shadow-lg">
            <img
              src="/brigette.png"
              alt="ArtesLafaux model"
              className="w-full h-full rounded-full"
            />
          </div>

          {/* Desktop → imagen original completa */}
          <img
            src="/brigette.png"
            alt="ArtesLafaux model"
            className="hidden xl:block w-auto h-230 object-cover z-30"
          />
        </div>
      </div>
    </main>
  );
}
