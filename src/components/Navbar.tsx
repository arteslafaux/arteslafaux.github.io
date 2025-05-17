import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const progress = Math.min(scrollPosition / 100, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
  };

  const headerHeight = 20 - scrollProgress * 4;
  const maxWidth = 100 - scrollProgress * 28;
  const borderRadius = scrollProgress * 9999;
  const blurStrength = 8 + scrollProgress * -2; // Blur dinámico de 8px a 16px

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center">
      <header
        className="navbar transition-all duration-300"
        style={{
          height: `${headerHeight * 0.25}rem`,
          width: `${maxWidth}%`,
          borderRadius: `${borderRadius}px`,
          backgroundColor:
            scrollProgress > 0
              ? `rgba(255, 255, 255, ${0.4 + scrollProgress * 0.2})`
              : `rgba(255, 255, 255, 0.25)`,
          backdropFilter: `blur(${blurStrength}px)`,
          WebkitBackdropFilter: `blur(${blurStrength}px)`,
          boxShadow:
            scrollProgress > 0
              ? `0 ${scrollProgress * 4}px ${scrollProgress * 12}px rgba(0,0,0,${scrollProgress * 0.08})`
              : "none",
          margin: `${scrollProgress * 0.5}rem 0`,
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}>
        {/* Left section – hamburger (only visible on mobile) */}
        <div className="flex-none lg:hidden">
          <label htmlFor="drawer" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
        </div>

        {/* Search bar */}
        <div className="flex-1 px-2 lg:px-4">
          <div className="form-control w-full">
            <input
              type="text"
              placeholder={t('navbar.search')}
              className="input input-bordered w-full sm:w-80 bg-white/50 backdrop-blur-sm border-white/20"
            />
          </div>
        </div>

        {/* Desktop menu */}
        <nav className="hidden flex-none lg:flex">
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost normal-case">
              {t('navbar.explore')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box z-10 w-52 bg-white/70 backdrop-blur-lg p-2 shadow-sm">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Language + avatar */}
        <div className="flex flex-row gap-2">
          <div className="dropdown dropdown-end hidden sm:block">
            <label tabIndex={0} className="btn btn-ghost normal-case">
              {currentLang.toUpperCase()}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box w-24 bg-white/70 backdrop-blur-lg p-2 shadow">
              <li>
                <button 
                  className={`${currentLang === 'en' ? 'bg-neutral-100' : ''}`}
                  onClick={() => handleLanguageChange('en')}
                >
                  {t('navbar.lang.options.english')}
                </button>
              </li>
              <li>
                <button 
                  className={`${currentLang === 'es' ? 'bg-neutral-100' : ''}`}
                  onClick={() => handleLanguageChange('es')}
                >
                  {t('navbar.lang.options.spanish')}
                </button>
              </li>
            </ul>
          </div>
          <div className="avatar placeholder border border-white/20 rounded-full">
            <div className="w-10 rounded-full bg-neutral-focus text-neutral-content">
              <img src="/5611.jpg" alt="avatar" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
