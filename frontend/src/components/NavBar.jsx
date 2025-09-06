import { useEffect, useRef, useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function NavBar({ links = defaultLinks }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);
  const menuBtnRef = useRef(null);

  // Close on ESC, trap focus, and lock body scroll when open
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && open && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
    if (!open && menuBtnRef.current) menuBtnRef.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-40 bg-[#e8dfd6]/90 backdrop-blur border-b border-[#d7cfc6] supports-[backdrop-filter]:bg-[#e8dfd6]/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        {/* Mobile menu button */}
        <button
          ref={menuBtnRef}
          className="lg:hidden p-2 rounded-lg border border-[#d7cfc6] focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/30"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Brand */}
        <a href="/" className="shrink-0">
          <Logo showText={false} size="h-14 w-14"/>
        </a>

        {/* Search (hide on small screens) */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              placeholder="What are you looking for?"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-[#d7cfc6] bg-white focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/20"
              aria-label="Search site"
            />
          </div>
          <button className="rounded-lg bg-[#7a2d1a] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40">
            Go
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="ml-auto hidden lg:flex items-center gap-6 text-sm" aria-label="Primary">
          {links.map((l) => (
            <a key={l.label} className="hover:underline" href={l.href}>
              {l.label}
            </a>
          ))}
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#7a2d1a] text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
            href="#shop"
          >
            <ShoppingBag className="w-4 h-4" /> Shop for Home
          </a>
        </nav>

        {/* Mobile drawer */}
        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <aside
              id="mobile-drawer"
              ref={panelRef}
              role="menu"
              aria-label="Mobile"
              className="absolute inset-y-0 left-0 w-[82vw] max-w-80 bg-[#e8dfd6] shadow-2xl p-4 flex flex-col"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#d7cfc6]">
                <Logo />
                <button
                  className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="py-4 space-y-1" aria-label="Mobile primary">
                {links.map((l, i) => (
                  <a
                    key={l.label}
                    ref={i === 0 ? firstLinkRef : null}
                    className="block px-2 py-3 rounded-md hover:bg-white focus:bg-white focus:outline-none"
                    href={l.href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#7a2d1a] text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/40"
                  href="#shop"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  <ShoppingBag className="w-4 h-4" /> Shop for Home
                </a>
              </nav>
            </aside>
          </div>
        )}
      </div>
    </nav>
  );
}

const defaultLinks = [
  { label: "Home", href: "#" },
  { label: "Testimonials", href: "#" },
  { label: "Sourcing", href: "#" },
  { label: "Newsletter", href: "#" },
  { label: "Products", href: "#products" },
  { label: "Contact Us", href: "#contact" },
];
