import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MainContent() {
  const { t } = useTranslation("mainContent");

  return (
    <main className="relative w-full h-full flex items-center justify-center  overflow-hidden">
      {/* Contenedor de contenido principal */}
      <div className="relative flex w-10/12 max-w-6xl items-center justify-between">
        {/* Texto izquierdo */}
        <div className="flex flex-col space-y-6 text-white w-1/2 text-center items-center p-6 rounded-lg backdrop-blur-md bg-white/10 border border-white/10 shadow-lg leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
          <h1 className="text-6xl font-extrabold leading-tight">
            <span>{t("professionalName")}</span>
            <br />
            <span className="font-light text-4xl text-white capitalize">
              {t("role")}
            </span>
          </h1>
          <p className="text-white max-w-sm">{t("description")}</p>
          <div className="uppercase tracking-widest text-white text-sm">
            {t("name")}
          </div>
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

        {/* Imagen derecha (usando <img>) */}
        <div className="relative w-1/2 flex justify-center h-full items-center ">
          {/* Cápsulas de fondo */}
          {/* <div className="absolute top-[10%] left-[25%] transform -translate-y-1/2">
            <div className="absolute w-40 h-200 rotate-30 bg-[#2d313a] rounded-full"></div>
            <div className="absolute w-40 h-200 rotate-40 bg-blue-600 rounded-full translate-x-10 translate-y-10 opacity-90"></div>
            <div className="absolute w-40 h-200 rotate-50 bg-orange-600 rounded-full translate-x-20 translate-y-20 opacity-90"></div>
            <div className="absolute w-40 h-200 rotate-60 bg-amber-600 rounded-full translate-x-28 translate-y-32 opacity-90"></div>
            <div className="absolute w-40 h-200 rotate-70 bg-emerald-600 rounded-full translate-x-34 translate-y-45 opacity-90"></div>
            <div className="absolute w-40 h-200 rotate-80 bg-slate-600 rounded-full translate-x-37 translate-y-59 opacity-90"></div>
          </div> */}
          <img
            src="/brigette.png"
            alt="ArtesLafaux model"
            className="w-auto h-230 object-cover  z-30 "
          />
        </div>
      </div>
    </main>
  );
}
