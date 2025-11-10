import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "react-i18next";
import {
  // FaFacebook,
  FaInstagram,
  // FaTwitter,
  // FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <main className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Fondo difuminado */}
      <div className="relative flex flex-col items-center justify-center p-10 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 shadow-lg space-y-8 w-10/12 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-center leading-tight [text-shadow:2px_2px_4px_rgb(0_0_0/60%)]">
          {t("title")}
        </h1>

        {/* Información principal */}
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="w-6 h-6 text-orange-500" />
            <a
              href="mailto:eaangrino@gmail.com"
              className="hover:text-orange-400 transition-colors">
              brigette.lafaux@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <PhoneIcon className="w-6 h-6 text-orange-500" />
            <a
              href="tel:+573002889331"
              className="hover:text-orange-400 transition-colors">
              +57 317 710 2354
            </a>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-8 mt-6 text-gray-300">
          {[
            // {
            //   icon: <FaFacebook className="w-6 h-6" />,
            //   href: "https://facebook.com",
            // },
            {
              icon: <FaInstagram className="w-6 h-6" />,
              href: "https://www.instagram.com/marketing_artes_lafaux?igsh=MTZzeHc5dWhzOGh2bg==",
            },
            // {
            //   icon: <FaTwitter className="w-6 h-6" />,
            //   href: "https://twitter.com",
            // },
            // {
            //   icon: <FaLinkedin className="w-6 h-6" />,
            //   href: "https://linkedin.com",
            // },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors">
              {item.icon}
            </a>
          ))}
        </div>
        <Link
          to="/"
          className="text-orange-500 font-semibold tracking-widest hover:text-orange-400">
          ← {t("button")}
        </Link>
      </div>
    </main>
  );
}
