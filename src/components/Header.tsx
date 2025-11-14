import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation("header");

  return (
    <header className="w-full h-16 flex items-center px-10 py-6 text-sm font-semibold text-gray-200 bg-[#21242b] lg:bg-transparent border-b border-b-[#ffffff0c] lg:border-b-0 shadow-md lg:shadow-none">
      <nav className="flex flex-row w-full justify-between lg:justify-end items-center space-x-8 leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
        <div className="lg:hidden flex ">
          <img
            src="/arteslafaux_icon.svg"
            alt="arteslafaux icon"
            className="w-10 h-10"
          />
        </div>
        <div className="flex space-x-8">
          {[
            { label: "home", to: "/" },
            { label: "collection", to: "/collection" },
            { label: "contact", to: "/contact" },
          ].map((item, idx) => (
            <Link
              key={`${item.label}-${idx}`}
              to={item.to}
              className="capitalize relative text-gray-300 tracking-widest font-medium transition-colors duration-300 
                       hover:text-orange-400 after:content-[''] after:absolute after:left-1/2 after:-bottom-2 
                       after:w-0 after:h-0.5 after:bg-orange-500 after:transition-all after:duration-300 
                       hover:after:w-full hover:after:left-0">
              {t(item.label)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
