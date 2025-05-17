import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="hero min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('https://picsum.photos/1920/1080?random')",
      }}>
      <div className="hero-overlay bg-black opacity-80" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-4 text-6xl font-light tracking-wider">
            {t('header.title')}
          </h1>
          <div className="mb-6 h-[1px] w-24 mx-auto bg-white opacity-60"></div>
          <h2 className="mb-6 text-xl font-light tracking-wide uppercase">
            {t('header.subtitle')}
          </h2>
          <p className="mb-8 text-lg font-light leading-relaxed opacity-90">
            {t('header.description')}
          </p>
          <button className="btn btn-outline btn-lg text-white hover:bg-white hover:text-black transition-all duration-300 border-2">
            {t('gallery.view')}
          </button>
        </div>
      </div>
    </section>
  );
}
