import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialMediaIcons = [{}, {}, {}, {}, {}, {}];

  return (
    <>
      <footer className="footer grid grid-cols-2 place-items-center border-t bg-base-200 p-5 sm:p-10">
        <div className="flex flex-col items-center">
          <div className="footer footer-vertical sm:footer-horizontal p-2">
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <h6 className="footer-title">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* Social icons */}

            {socialMediaIcons.map((_, index) => (
              <p key={index} className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                  />
                </svg>
              </p>
            ))}
          </div>
          <div className="avatar placeholder border rounded-full">
            <div className="w-16 rounded-full bg-neutral-focus text-neutral-content">
              <img src="/5611.jpg" alt="avatar big" />
            </div>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center bg-base-300 p-4 text-base-content sm:footer-horizontal">
        <aside>
          <p>
            Copyright © {currentYear} – All rights reserved by{" "}
            <Link to="https://github.com/eaangrino">eaangrino</Link>
          </p>
        </aside>
      </footer>
    </>
  );
}
