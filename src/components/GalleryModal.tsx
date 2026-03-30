import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import SeedData from "./seedData";

export default function GalleryModal() {
  const navigate = useNavigate();
  const { t } = useTranslation("galleryModal");
  const { id } = useParams();
  const item = SeedData.find((x) => x.id === Number(id));
  const images = item ? (Array.isArray(item.image) ? item.image : [item.image]) : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVertical, setIsVertical] = useState<boolean | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/collection");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  useEffect(() => {
    setActiveIndex(0);
    setIsVertical(null);
  }, [id]);

  if (!item) return null;

  const activeImage = images[activeIndex];
  const hasMultipleImages = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#0f1117]/78 p-4 backdrop-blur-md sm:items-center md:p-6"
      onClick={() => navigate("/collection")}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.16),transparent_38%)]" />

      <section
        className="relative z-10 my-auto flex max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/12 bg-[#1c2028]/96 text-white shadow-[0_30px_80px_rgba(0,0,0,0.45)] lg:overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        <button
          aria-label={t("close")}
          onClick={() => navigate("/collection")}
          className="absolute right-4 top-4 z-30 rounded-full border border-white/12 bg-black/35 p-2 text-white/80 transition hover:bg-orange-500 hover:text-white">
          <XMarkIcon className="h-6 w-6" />
        </button>

        <div className="flex w-full flex-col lg:flex-row">
          <div className="relative flex min-h-0 flex-none items-center justify-center overflow-visible bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-4 sm:p-6 md:p-8 lg:min-h-[320px] lg:flex-1 lg:overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

            <div
              className={`relative w-full ${
                isVertical ? "max-w-md" : "max-w-4xl"
              }`}>
              <img
                src={activeImage}
                alt={`${item.title}${hasMultipleImages ? ` ${activeIndex + 1}` : ""}`}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  setIsVertical(img.naturalHeight > img.naturalWidth);
                }}
                className="mx-auto h-auto max-h-[52vh] max-w-full rounded-[1.5rem] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:max-h-[58vh] lg:max-h-[68vh]"
              />
            </div>
          </div>

          <aside className="flex w-full shrink-0 flex-col justify-between border-t border-white/8 bg-white/[0.03] lg:w-[360px] lg:border-l lg:border-t-0">
            <div className="flex flex-col gap-6 p-6 md:p-8">
              <div className="space-y-3">
                <div className="inline-flex rounded-full border border-orange-400/25 bg-orange-400/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                  {t("featured")}
                </div>
                <h2 className="text-3xl font-bold leading-tight text-white">
                  {item.title}
                </h2>
                <p className="text-sm leading-6 text-orange-200/90">
                  {item.technique}
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-white/8 bg-black/15 p-5">
                <p className="text-sm leading-7 text-gray-200/88">
                  {item.description}
                </p>
              </div>

              {hasMultipleImages && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                    {t("variations")}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {images.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`overflow-hidden rounded-2xl border transition ${
                          index === activeIndex
                            ? "border-orange-400 shadow-[0_0_0_1px_rgba(251,146,60,0.4)]"
                            : "border-white/10 hover:border-white/30"
                        }`}>
                        <img
                          src={src}
                          alt={`${item.title} miniatura ${index + 1}`}
                          className="h-28 w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-white/8 px-6 py-5 md:px-8">
              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                {hasMultipleImages
                  ? `${activeIndex + 1} / ${images.length}`
                  : t("singlePiece")}
              </p>
              <button
                onClick={() => navigate("/collection")}
                className="cursor-pointer rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-orange-400">
                {t("close")}
              </button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
