import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import Logo from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contactus" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0">
          <Logo showText={false} size="h-14 w-14" />
        </Link>
        {/* Desktop Nav */}
        <nav
          className="ml-auto hidden lg:flex items-center gap-6 text-sm"
          aria-label="Primary"
        >
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.href}
              className={({ isActive }) =>
                isActive
                  ? "font-semibold underline"
                  : "hover:underline"
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* Search Button */}
          <button
            type="button"
            aria-label="Search"
            className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Shop CTA */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 rounded-lg bg-[#7a2d1a] text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop for Home
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          className="lg:hidden border-t bg-white shadow-md"
          role="menu"
        >
          <div className="px-4 py-3 space-y-1">
            {links.map((l, i) => (
              <Link
                key={l.label}
                ref={i === 0 ? firstLinkRef : null}
                to={l.href}
                className="block px-2 py-3 rounded-md hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}

            {/* Search (Mobile) */}
            <button
              type="button"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
            >
              <Search className="h-5 w-5" />
              Search
            </button>

            {/* Shop CTA (Mobile) */}
            <Link
              to="/shop"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#7a2d1a] text-white px-3 py-2 w-full justify-center focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <ShoppingBag className="w-4 h-4" />
              Shop for 
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
