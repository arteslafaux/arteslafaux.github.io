import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Gallery() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <main className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-center mb-16 tracking-wide">
          {t('gallery.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, idx) => (
            <article
              key={idx}
              className="group relative overflow-hidden cursor-pointer transition-all duration-500 rounded-4xl"
              onClick={() => navigate(`/gallery/${idx + 1}`)}>
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={`https://picsum.photos/800/1000?random=${idx + 1}`}
                  alt={`Gallery item ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-white/5 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                <div className="p-6 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white text-xl font-light mb-2">
                    {t('gallery.title')} #{idx + 1}
                  </h3>
                  <p className="text-white/80 text-sm font-light">
                    {t('header.description')}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
