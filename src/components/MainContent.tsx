import { SparklesIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function MainContent() {
  const { t } = useTranslation("mainContent");

  return (
    <main className="relative w-full min-h-full overflow-y-auto px-4 pb-14 pt-6 text-white md:px-6 md:pb-16 md:pt-8 lg:flex lg:items-center lg:justify-center lg:py-12">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-8 sm:gap-10 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] lg:gap-14">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(12,15,22,0.9),rgba(23,28,38,0.78))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.14),transparent_34%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.18))]" />
          <div className="absolute -right-20 top-10 h-52 w-52 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-200">
              <SparklesIcon className="h-4 w-4" />
              {t("badge")}
            </div>

            <div className="space-y-4 leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/45%)]">
              <h1 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
                {t("professionalName")}
              </h1>
              <p className="text-lg font-light capitalize text-white/82 sm:text-2xl xl:text-3xl">
                {t("role")}
              </p>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              {t("description")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                {t("tags.portrait")}
              </span>
              <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                {t("tags.illustration")}
              </span>
              <span className="rounded-full border border-white/10 bg-black/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white/70">
                {t("tags.commissions")}
              </span>
            </div>

            <div className="text-xs uppercase tracking-[0.35em] text-white/45">
              {t("name")}
            </div>

            <div className="flex w-full flex-col gap-3 pt-2 sm:flex-row">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-orange-400">
                {t("button")}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-orange-400/30 hover:bg-white/10 hover:text-orange-200">
                {t("buttonAlt")}
              </Link>
            </div>
          </div>
        </section>

        <section className="relative flex w-full items-center justify-center">
          <div className="absolute h-64 w-64 rounded-full bg-orange-500/18 blur-3xl md:h-80 md:w-80" />
          <div className="absolute inset-x-8 bottom-4 h-24 rounded-full bg-black/30 blur-3xl" />

          <div className="relative w-full max-w-[460px] overflow-hidden rounded-[2rem] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(255,255,255,0.04))] p-3 shadow-[0_28px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-4">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#171a22]/50 p-3">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,rgba(251,146,60,0.18),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                <img
                  src="/brigette.png"
                  alt="ArtesLafaux model"
                  className="mx-auto h-auto max-h-[54vh] w-full object-contain sm:max-h-[60vh] lg:max-h-[68vh]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
