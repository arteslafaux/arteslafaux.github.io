import { useNavigate } from "react-router-dom";
/**
 * LandingPage – mockup‑based layout with:
 *  • Navbar menu for desktop + sidebar drawer for mobile (DaisyUI pattern)
 *  • TailwindCSS + DaisyUI (strict TS)
 *  • Vite + React + TypeScript project ready.
 */
export default function Preview() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      {/* SEPARADOR VISUAL */}
      <div className="h-24 w-full bg-primary/40" />

      {/* CONTENIDO PRINCIPAL DEL MOCKUP */}
      <section className="bg-primary/30 py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:flex-row lg:items-start">
          {/* Imagen lado izquierdo */}
          <div className="mx-auto w-full max-w-md flex-shrink-0 lg:w-1/2 lg:max-w-none">
            <div className="aspect-video w-full bg-base-100 shadow-inner" />
          </div>

          {/* Divider vertical en desktop */}
          <div className="hidden h-auto w-px bg-base-300 lg:block" />

          {/* Texto lado derecho */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold">Agregar un título</h2>
            <h3 className="mb-6 text-lg font-medium">Agregar un subtítulo</h3>

            <p className="border-t border-dashed pt-4 font-light">
              Texto…………………………………………………………………………………………………………………………
            </p>
            <p className="border-t border-dashed pt-4 font-light">
              …………………………………………………………………………………………………………………………………………………
            </p>
            <button
              onClick={handleClick}
              className="mt-6 rounded-lg border border-base-content px-4 py-2 font-medium text-white shadow hover:bg-base-content/80"></button>
          </div>
        </div>
      </section>

      {/* SEPARADOR INFERIOR */}
      <div className="h-24 w-full bg-primary/40" />
    </>
  );
}
