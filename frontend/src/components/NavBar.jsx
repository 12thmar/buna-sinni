import { useState } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

export function NavBar({ links = defaultLinks }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 bg-[#e8dfd6]/90 backdrop-blur border-b border-[#d7cfc6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
        <Logo showText={false} />

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 flex-1 max-w-lg mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              placeholder="What are you looking for?"
              className="w-full pl-9 pr-3 py-2 rounded-md border border-[#d7cfc6] bg-white focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/20"
            />
          </div>
          <button className="rounded bg-[#7a2d1a] text-white px-3 py-2">Go</button>
        </div>

        <div className="ml-auto hidden lg:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.label} className="hover:underline" href={l.href}>{l.label}</a>
          ))}
          <a className="inline-flex items-center gap-2 rounded bg-[#7a2d1a] text-white px-3 py-2 shadow" href="#shop">
            <ShoppingBag className="w-4 h-4" /> Shop for Home
          </a>
        </div>

        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <div className="absolute inset-y-0 left-0 w-80 bg-[#e8dfd6] p-4 shadow-2xl">
              <div className="flex items-center justify-between pb-2 border-b border-[#d7cfc6]">
                <Logo />
                <button className="p-2" onClick={() => setOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="py-4 space-y-2">
                {links.map((l) => (
                  <a key={l.label} className="block px-2 py-2 rounded hover:bg-white" href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a className="mt-2 inline-flex items-center gap-2 rounded bg-[#7a2d1a] text-white px-3 py-2" href="#shop">
                  <ShoppingBag className="w-4 h-4" /> Shop for Home
                </a>
              </div>
            </div>
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
