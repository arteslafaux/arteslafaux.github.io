import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const contactItems = [
  {
    href: "mailto:brigette.lafaux@gmail.com",
    icon: EnvelopeIcon,
    labelKey: "items.email",
    value: "brigette.lafaux@gmail.com",
  },
  {
    href: "tel:+573177102354",
    icon: PhoneIcon,
    labelKey: "items.phone",
    value: "+57 317 710 2354",
  },
];

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <main className="relative w-full min-h-full overflow-y-auto px-4 pb-14 pt-6 text-white md:px-6 md:pb-16 md:pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 lg:gap-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.14),rgba(255,255,255,0.05))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_34%)]" />
          <div className="relative flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-3">
              <div className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/12 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-orange-200">
                Contacto
              </div>
              <h1 className="text-4xl font-extrabold leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/45%)] sm:text-5xl">
                {t("title")}
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-7 text-white/78 lg:mx-0 sm:text-base">
                {t("intro")}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.value}
                    href={item.href}
                    className="group w-full rounded-[1.35rem] border border-white/10 bg-black/15 p-4 text-left transition hover:border-orange-400/25 hover:bg-black/22 sm:rounded-[1.5rem] sm:p-5">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <div className="min-w-0 flex items-start gap-3 sm:gap-4">
                        <div className="shrink-0 rounded-2xl bg-orange-500/12 p-3 text-orange-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                            {t(item.labelKey)}
                          </p>
                          <p className="mt-2 break-words text-sm font-medium leading-6 text-white/90 sm:text-base">
                            {item.value}
                          </p>
                        </div>
                      </div>
                      <ArrowTopRightOnSquareIcon className="mt-1 h-5 w-5 shrink-0 text-white/30 transition group-hover:text-orange-300" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
              {t("sections.social")}
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {t("sections.socialTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/76 sm:text-base">
              {t("sections.socialDescription")}
            </p>

            <a
              href="https://www.instagram.com/marketing_artes_lafaux?igsh=MTZzeHc5dWhzOGh2bg=="
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-orange-400/30 hover:text-orange-200">
              <FaInstagram className="h-5 w-5" />
              Instagram
            </a>
          </div>

          <div className="flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#191d25]/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-white/42">
                {t("sections.navigation")}
              </p>
              <h2 className="mt-3 text-2xl font-bold text-white">
                {t("sections.navigationTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72">
                {t("sections.navigationDescription")}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/collection"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-orange-400">
                {t("collectionButton")}
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white/90 transition hover:border-orange-400/30 hover:text-orange-200">
                ← {t("button")}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
