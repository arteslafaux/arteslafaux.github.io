import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
// import Intro from "./components/Intro";

/**
 * LandingPage – mockup‑based layout with:
 *  • Navbar menu for desktop + sidebar drawer for mobile (DaisyUI pattern)
 *  • TailwindCSS + DaisyUI (strict TS)
 *  • Vite + React + TypeScript project ready.
 */
export default function LandingPage() {
  //Array social media icons

  return (
    <>
      {/* HERO SECTION */}
      <Hero />

      {/* INTRO STRIP */}
      {/* <Intro /> */}

      {/* GALLERY */}
      <Gallery />
    </>
  );
}
