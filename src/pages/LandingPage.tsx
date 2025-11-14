import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import SplashBackground from "../components/SplashBackground";

export default function LandingPage() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-[#21242b]">
      {/* Fondo: ícono */}
      <div className="absolute mt-10 ml-10 hidden lg:flex items-center justify-center z-15 pointer-events-none bg-[#21242b] rounded-full p-4">
        <img
          src="/arteslafaux_icon.svg"
          alt="arteslafaux icon"
          className="w-30 h-30"
        />
      </div>

      <SplashBackground />

      {/* Layout principal */}
      <div className="relative z-15 w-full min-h-screen flex flex-row">
        {/* Header fijo solo en mobile */}
        <div className="lg:hidden fixed top-0 left-0 w-full z-30">
          <Header />
        </div>

        {/* Contenedor principal */}
        <div
          className="grow min-h-full flex flex-col 
                  lg:pt-0 pt-16   /* espacio para el header en mobile */
                  overflow-y-auto">
          <div className="hidden lg:block">
            <Header />
          </div>

          <Outlet />
        </div>

        {/* Barra social lateral */}
        <SocialBar />
      </div>
    </div>
  );
}
