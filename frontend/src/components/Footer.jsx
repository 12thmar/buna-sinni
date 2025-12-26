import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper: if you want "section" links (hash) to work from any page.
  const goToSection = (hash) => {
    // If you're not on home, go home first then apply hash
    if (location.pathname !== "/") {
      navigate("/" + hash);
    } else {
      // Already on home: just update hash + scroll
      window.location.hash = hash;
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const linkBase =
    "text-sm text-neutral-700 whitespace-nowrap hover:text-[var(--coffee)] transition";

  const navLinks = [
    { label: "Home", to: "/" },
    // If these are sections on the Home page, keep them as hash targets.
    { label: "Testimonials", hash: "#testimonials" },
    { label: "Sourcing", hash: "#sourcing" },
    { label: "Newsletter", hash: "#newsletter" },

    // These look like real pages in your app:
    { label: "Products", to: "/products" },
    { label: "Contact Us", to: "/contactus" },
  ];

  return (
    <footer className="border-t bg-white">
      {/* Quote */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <blockquote className="mx-auto max-w-4xl text-center text-neutral-600 italic text-base md:text-lg">
          “BunaRoots showcases our Ethiopian coffee at its highest expression. From
          our farms to your cup, every step is handled with excellence.”
          <span className="not-italic font-medium text-neutral-700">
            {" "}
            — Hussain A., Producer Partner in Ethiopia
          </span>
        </blockquote>
      </div>

      {/* Links / Social / Copyright */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          {/* nav */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3">
            {navLinks.map((item) => {
              if (item.hash) {
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goToSection(item.hash)}
                    className={linkBase}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? "font-semibold" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* social */}
          <div className="flex justify-center gap-5">
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50 transition"
              title="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-neutral-50 transition"
              title="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M13 22v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>

          {/* copyright */}
          <p className="text-center md:text-right text-sm text-neutral-500">
            © {new Date().getFullYear()} BunaRoots. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
