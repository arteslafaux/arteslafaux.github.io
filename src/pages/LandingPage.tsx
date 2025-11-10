import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SocialBar from "../components/SocialBar";
import SplashBackground from "../components/SplashBackground";

export default function LandingPage() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#21242b]">
      {/* Fondo: ícono */}
      <div className="absolute mt-10 ml-10 flex items-center justify-center z-15 pointer-events-none bg-[#21242b] rounded-full p-4">
        <img
          src="/arteslafaux_icon.svg"
          alt="arteslafaux icon"
          className="w-30 h-30"
        />
      </div>

      <SplashBackground />

      {/* Layout principal */}
      <div className="relative z-15 w-full h-full flex flex-row">
        {/* Columna izquierda */}
        <div className="flex flex-col grow h-full">
          <Header />
          <Outlet />
        </div>

        {/* Barra lateral derecha */}
        <SocialBar />
      </div>
    </div>
  );
}
