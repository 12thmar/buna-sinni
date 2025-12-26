// src/components/Header.jsx
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, Menu, X, ShoppingBag } from "lucide-react";

const navItems = [
  { label: "Testimonials", href: "/#testimonials", kind: "anchor" },
  { label: "Sourcing", href: "/#sourcing", kind: "anchor" },
  { label: "Newsletter", href: "/#newsletter", kind: "anchor" },
  { label: "Products", href: "/products", kind: "route" },
  { label: "Contact", href: "/contactus", kind: "route" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function onSearchSubmit(e) {
    e.preventDefault();
    const q = new FormData(e.currentTarget).get("q")?.toString().trim();
    // For now, just keep it in the URL so it’s ready when you build /search later.
    // You can later route to /products?q=... and filter.
    if (q) navigate(`/products?q=${encodeURIComponent(q)}`);
  }

  const linkBase =
    "px-3 py-2 rounded-full text-sm transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20";
  const linkActive = "bg-black/5 text-black";

  return (
    <header className="sticky top-0 z-50">
      {/* Promo bar (more modern) */}
      <div className="bg-gradient-to-r from-[#b8352a] via-[#c73a2c] to-[#b8352a] text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 text-center text-[11px] sm:text-sm tracking-wide">
          <span className="font-semibold">FREE SHIPPING</span>{" "}
          <span className="opacity-90">on orders over</span>{" "}
          <span className="font-semibold">$1,000</span>{" "}
          <span className="opacity-90">in the contiguous USA</span>
        </div>
      </div>

      {/* Main header row */}
      <div className="bg-white/75 backdrop-blur border-b shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
          {/* Brand */}
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <img
              src="/images/logo.webp"
              alt="BunaRoots"
              className="h-9 w-9 rounded-full object-cover ring-1 ring-black/10"
            />
            <div className="min-w-0">
              <div className="truncate text-base font-semibold leading-tight">
                BunaRoots
              </div>
              <div className="hidden sm:block text-[11px] text-black/50 -mt-0.5">
                Ethiopian coffee, curated.
              </div>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={onSearchSubmit} className="flex-1 md:flex-none">
            <label htmlFor="q" className="sr-only">
              Search
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-black/40" />
              <input
                id="q"
                name="q"
                placeholder="Search coffees, regions, roast…"
                className="w-full md:w-[360px] rounded-full border border-black/10 bg-white/80 pl-9 pr-4 py-2 text-sm outline-none
                           focus:bg-white focus:ring-2 focus:ring-black/15"
              />
            </div>
          </form>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) =>
              item.kind === "route" ? (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? linkActive : "text-black/70"}`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`${linkBase} text-black/70`}
                >
                  {item.label}
                </a>
              )
            )}

            {/* Shop CTA */}
            <Link
              to="/shop"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-[#7a2d1a] text-white px-4 py-2 text-sm shadow-sm
                        hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7a2d1a]/40"
            >
              Shop
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto md:hidden inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-3 py-2
                       hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur">
            <div ref={menuRef} className="mx-auto max-w-7xl px-4 py-4">
              <div className="grid gap-2">
                {navItems.map((item) =>
                  item.kind === "route" ? (
                    <NavLink
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-sm transition ${
                          isActive
                            ? "bg-black/5 text-black font-medium"
                            : "hover:bg-black/5 text-black/80"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm transition hover:bg-black/5 text-black/80"
                    >
                      {item.label}
                    </a>
                  )
                )}

                <Link
                  to="/shop"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#7a2d1a] text-white px-4 py-3 text-sm shadow-sm"
                >
                  Shop
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
