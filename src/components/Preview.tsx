import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
/**
 * LandingPage – mockup‑based layout with:
 *  • Navbar menu for desktop + sidebar drawer for mobile (DaisyUI pattern)
 *  • TailwindCSS + DaisyUI (strict TS)
 *  • Vite + React + TypeScript project ready.
 */
export default function Preview() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Emitir un evento personalizado con el estado de intersección
        window.dispatchEvent(
          new CustomEvent("heroIntersection", {
            detail: { isIntersecting: entry.isIntersecting }
          })
        );
      },
      { threshold: 0.1 } // Trigger cuando el 10% del elemento es visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className="bg-white">
      {/* Hero Section Preview */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-cover bg-center bg-fixed overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://picsum.photos/1920/1080?random=preview')",
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        <div className="relative flex items-center justify-center min-h-[60vh] px-4">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="mb-4 text-5xl font-light tracking-wider">
              {t('gallery.project')} {t('gallery.title')}
            </h1>
            <div className="mb-6 h-[1px] w-24 mx-auto bg-white opacity-60" />
            <p className="mb-8 text-lg font-light leading-relaxed opacity-90">
              {t('gallery.description')}
            </p>
            <button 
              onClick={handleClick}
              className="btn btn-outline btn-lg text-white hover:bg-white hover:text-black transition-all duration-300 border-2">
              {t('gallery.view')}
            </button>
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://picsum.photos/1920/1080?random=1" 
                  alt="Project preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://picsum.photos/800/800?random=2" 
                    alt="Detail 1" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://picsum.photos/800/800?random=3" 
                    alt="Detail 2" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="lg:sticky lg:top-20">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-light mb-6">{t('header.title')}</h2>
                <p className="text-neutral-600 font-light leading-relaxed mb-6">
                  {t('header.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-neutral-600 font-light">{t('footer.links.branding')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-neutral-600 font-light">{t('footer.links.design')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-neutral-600 font-light">{t('footer.links.marketing')}</span>
                  </div>
                </div>
                <button 
                  onClick={handleClick}
                  className="mt-8 btn btn-primary btn-lg w-full">
                  {t('gallery.view')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
