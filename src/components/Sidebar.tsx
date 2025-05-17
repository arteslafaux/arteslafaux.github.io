import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="drawer-side z-40">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <aside className=" min-h-full bg-base-200">
        <div className="navbar bg-base-200/50 px-4">
          <div className="flex-1">
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                <img src="/5611.jpg" alt="avatar" />
              </div>
            </div>
          </div>
        </div>
        <ul className="menu p-4">
          <li>
            <details open={false}>
              <summary>{t('navbar.lang.title')}</summary>
              <ul>
                <li>
                  <button 
                    className={`${currentLang === 'en' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    {t('navbar.lang.options.english')}
                  </button>
                </li>
                <li>
                  <button 
                    className={`${currentLang === 'es' ? 'active' : ''}`}
                    onClick={() => handleLanguageChange('es')}
                  >
                    {t('navbar.lang.options.spanish')}
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </aside>
    </div>
  );
}
