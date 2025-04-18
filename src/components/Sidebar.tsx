export default function Sidebar() {
  return (
    <div className="drawer-side lg:hidden z-10">
      <label
        htmlFor="drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      />
      <ul className="menu min-h-full w-80 gap-2 bg-base-200 p-4 text-base-content">
        <li className="menu-title">Menú</li>
        <li>
          <a>Inicio</a>
        </li>
        <li>
          <a>Galería</a>
        </li>
        <li>
          <details open={false}>
            <summary>Explorer</summary>
            <ul>
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details open={false}>
            <summary>Language</summary>
            <ul>
              <li>
                <a>English</a>
              </li>
              <li>
                <a>Spanish</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </div>
  );
}
