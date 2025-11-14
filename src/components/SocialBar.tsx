import { LanguageIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SocialBar() {
  return (
    <div className="w-16 hidden md:flex flex-col justify-between items-center pb-10 pt-4 border-l border-l-[#ffffff0c] ">
      <Link to="#" className="hover:text-white transition-colors">
        <Squares2X2Icon className="w-8 h-8" />
      </Link>
      {/* Enlaces sociales */}
      <div className="flex flex-row items-center justify-center space-x-12 transform rotate-90 origin-center leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
        {[
          // { label: "Facebook", to: "" },
          // { label: "Twitter", to: "" },
          {
            label: "Instagram",
            to: "https://www.instagram.com/marketing_artes_lafaux?igsh=MTZzeHc5dWhzOGh2bg==",
          },
        ].map((network, idx) => (
          <Link
            key={`${network.label}-${idx}`}
            to={network.to}
            className="relative flex gap-2 text-gray-300 text-sm tracking-widest font-medium transition-colors duration-300 
                       hover:text-orange-400 after:content-[''] after:absolute after:left-1/2 after:-bottom-2 
                       after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 
                       hover:after:w-full hover:after:left-0">
            <FaInstagram className="w-6 h-6 rotate-0" />
            <span>{network.label}</span>
          </Link>
        ))}
      </div>

      {/* Icono de idioma */}
      <LanguageIcon className="w-6 h-6 text-gray-400 hover:text-orange-400 transition-colors cursor-pointer" />
    </div>
  );
}
