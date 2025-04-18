import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutContainer() {
  return (
    // ────────────────────────────────────────────────────────────────────────────
    // DaisyUI drawer wrapper — closed on mobile, always open on ≥lg (desktop)
    // ────────────────────────────────────────────────────────────────────────────
    <div className="drawer">
      {/* toggle */}
      <input id="drawer" type="checkbox" className="drawer-toggle" />

      {/* ───────────────   MAIN PAGE CONTENT   ─────────────── */}
      <div className="drawer-content flex min-h-screen flex-col bg-base-100 font-sans">
        {/* NAVBAR */}
        <Navbar />
        {/* PAGE CONTENT (OUTLET) */}
        <Outlet />
        {/* FOOTER(S) */}
        <Footer />

        {/* LOADING SPINNER overlay (toggle with #spinner-toggle) */}
        <input type="checkbox" id="spinner-toggle" className="peer hidden" />
        <div className="fixed inset-0 z-50 hidden items-center justify-center bg-base-100/80 peer-checked:flex">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      </div>
      {/* ───────────────   DRAWER SIDE   ─────────────── */}
      <Sidebar />
    </div>
  );
}
