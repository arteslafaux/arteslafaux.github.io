import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import { useEffect } from "react";
// import Intro from "./components/Intro";

/**
 * LandingPage – mockup‑based layout with:
 *  • Navbar menu for desktop + sidebar drawer for mobile (DaisyUI pattern)
 *  • TailwindCSS + DaisyUI (strict TS)
 *  • Vite + React + TypeScript project ready.
 */
export default function LandingPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

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
