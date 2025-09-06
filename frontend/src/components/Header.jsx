// src/components/Header.jsx
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      {/* Promo bar */}
      <div className="px-4 py-1 text-center text-xs sm:text-sm bg-[#c73a2c] text-white">
        FREE SHIPPING on orders over $1,000 in the contiguous USA
      </div>

      {/* Main row */}
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3">
        {/* Brand */}
        <a href="/" className="flex min-w-0 items-center gap-2">
          <img src="/images/logo.webp" alt="" className="h-8 w-8 rounded-full object-cover" />
          <span className="truncate text-base font-semibold">BunaRoots</span>
        </a>

        {/* Search (takes full width on mobile) */}
        <form className="flex-1 md:flex-none">
          <label htmlFor="q" className="sr-only">Search</label>
          <input
            id="q"
            name="q"
            placeholder="What are you looking for?"
            className="w-full md:w-80 rounded-full border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black/20"
          />
        </form>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-5">
          <a href="/testimonials" className="hover:opacity-80">Testimonials</a>
          <a href="/sourcing" className="hover:opacity-80">Sourcing</a>
          <a href="/newsletter" className="hover:opacity-80">Newsletter</a>
          <a href="/products" className="hover:opacity-80">Products</a>
          <a href="/contact" className="hover:opacity-80">Contact</a>
          <a
            href="/shop"
            className="rounded-full px-4 py-2 text-sm ring-1 ring-black/10 hover:bg-black hover:text-white"
          >
            Shop
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="ml-auto inline-flex items-center justify-center rounded-md border px-3 py-2 md:hidden"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className="i" />
          <style jsx>{`
            .i { width: 22px; height: 2px; background:#000; position: relative; }
            .i::before,.i::after{content:"";position:absolute;left:0;width:22px;height:2px;background:#000}
            .i::before{top:-6px}.i::after{top:6px}
          `}</style>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <ul className="mx-auto max-w-7xl px-4 py-3 grid gap-2">
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="/sourcing">Sourcing</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a className="mt-2 inline-block rounded-full px-4 py-2 text-sm ring-1 ring-black/10"
                 href="/shop">Shop</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
