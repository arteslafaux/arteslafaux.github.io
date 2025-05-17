
export default function Dock() {
  return (
    <div className="lg:hidden dock dock-sm bg-base-200">
      <button>
        <label htmlFor="drawer" className="cursor-pointer flex flex-col items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-[1em]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="dock-label">Menu</span>
        </label>
      </button>
    </div>
  );
} 