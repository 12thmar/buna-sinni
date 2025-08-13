import { useState } from "react";
import { Search, ShoppingBag, Menu, X, ChevronRight } from "lucide-react";

// Drop-in landing page that matches the reference layout
// Works in a Vite + React + Tailwind app. Uses Tailwind arbitrary colors
// to capture the warm beige palette.
//
// Assets to add (or swap URLs):
//  - /images/hero.jpg (mountain coffee landscape)
//  - /images/cherries.jpg (coffee cherries close-up)
//
// Optional brand tweaks:
//  - Replace the text logo with your SVG/PNG in <Logo />.
//  - Adjust brand colors in the tailwind classes below.

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#f5efe9] text-[#2a2018]">
      <PromoBar />
      <Navbar />

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-8">
        <div
          className="relative overflow-hidden rounded-lg shadow-md"
          style={{
            backgroundImage: "url(/images/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "420px",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative h-full w-full flex items-center justify-center text-center px-6">
            <div className="max-w-3xl text-white">
              <h1 className="text-3xl sm:text-4xl font-semibold drop-shadow">From the Birthplace of Coffee</h1>
              <p className="mt-4 leading-relaxed text-sm sm:text-base opacity-95">
                At BunaRoots, we bring you coffee from the birthplace of Arabica. Our beans are a story of
                heritage, soil, and sun—meticulously grown and carefully roasted.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a className="inline-flex items-center rounded bg-[#7a2d1a] text-white px-5 py-2 shadow hover:opacity-95" href="#products">
                  Shop Now
                </a>
                <a className="inline-flex items-center rounded border border-white/70 text-white px-5 py-2 hover:bg-white/10" href="#learn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story image + copy */}
      <section id="learn" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12">
        <img src="/images/cherries.jpg" alt="Coffee cherries" className="w-full rounded-lg shadow-md object-cover h-[360px]" />
        <div className="mt-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold">From Ethiopia to You</h2>
          <div className="mt-4 space-y-4 text-slate-700">
            <p>
              Our mission is to honor Ethiopian tradition while meeting the highest standards in specialty coffee.
              Each cup tells a story—of people, land, and legacy. We work directly with smallholder farmers and
              cooperatives across Sidama, Yirgacheffe, and Guji.
            </p>
            <p>
              From sun-drying on raised beds to meticulous hand-sorting, every step is rooted in craft. Importing
              directly from these communities ensures fair compensation and truly traceable, single-origin coffee
              with a purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-14 text-center">
        <h3 className="text-xl font-semibold">Stay Connected to the Roots</h3>
        <p className="text-slate-700 mt-2">Get updates on harvests, stories, and exclusive offers.</p>
        <form className="mt-4 flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full max-w-md rounded-md border border-[#d7cfc6] bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7a2d1a]/20"
          />
          <button type="button" className="inline-flex items-center gap-1 rounded-md border border-[#bfae9e] bg-[#e7d9cc] px-4 py-2 hover:bg-[#e2d2c3]">
            Join Our List <ChevronRight className="w-4 h-4" />
          </button>
        </form>
      </section>

      {/* Offerings */}
      <section id="products" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold">Explore Our Offerings</h3>
          <p className="text-slate-700 mt-2">
            Whether you’re a micro-roaster, café owner, or wholesale buyer, BunaRoots offers premium Ethiopian
            coffee tailored to your needs.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card
            title="Green Beans"
            body="Unroasted, single-origin green coffee beans sourced directly from farms in Sidama, Guji, and Yirgacheffe. Perfect for roasters who demand traceability and quality."
            icon="🫘"
          />
          <Card
            title="Roasted Coffee"
            body="Artisan roasted in small batches to highlight the unique flavor profiles of Ethiopian varietals—floral, fruity, bright, and complex."
            icon="🔥"
          />
          <div className="md:col-span-2 grid place-items-center">
            <Card
              title="Wholesale Solutions"
              body="Flexible volumes and private‑label options available for cafés, co‑ops, and distributors. Ethically sourced, reliably delivered."
              icon="📦"
              className="max-w-md"
            />
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#all" className="inline-flex items-center rounded-md border border-[#bfae9e] px-5 py-2 hover:bg-[#efe6dc]">Browse All Coffees</a>
        </div>
      </section>

      {/* Contact + Quote */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <p>
          Get in touch. Fill out our <a className="underline underline-offset-4" href="#contact">contact form</a> and
          we’ll get back to you shortly.
        </p>
        <blockquote className="mt-8 italic text-slate-700">
          “The aroma and quality were unmatched. As a roaster, sourcing from BunaRoots has elevated my offering.”
          <footer className="mt-2 text-sm">— James M., Roaster in California</footer>
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}

function PromoBar() {
  return (
    <div className="w-full bg-[#7a2d1a] text-white text-center text-sm py-1.5 shadow">
      FREE SHIPPING on orders over $1,000 in the contiguous USA
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-40 bg-[#e8dfd6]/90 backdrop-blur border-b border-[#d7cfc6]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button className="lg:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu className="w-6 h-6" />
        </button>
        <Logo />

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
          <a className="hover:underline" href="#">Home</a>
          <a className="hover:underline" href="#">Testimonials</a>
          <a className="hover:underline" href="#">Sourcing</a>
          <a className="hover:underline" href="#">Newsletter</a>
          <a className="hover:underline" href="#products">Products</a>
          <a className="hover:underline" href="#contact">Contact Us</a>
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
                {["Home","Testimonials","Sourcing","Newsletter","Products","Contact Us"].map((l) => (
                  <a key={l} className="block px-2 py-2 rounded hover:bg-white" href="#" onClick={() => setOpen(false)}>
                    {l}
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

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold">
      {/* Replace with your logo image if available */}
      <div className="h-9 w-9 rounded-full bg-[#2a2018] text-white grid place-items-center text-sm">BR</div>
      <span className="tracking-tight">BunaRoots</span>
    </a>
  );
}

function Card({ title, body, icon, className = "" }) {
  return (
    <div className={`rounded-lg bg-white border border-[#e2d7cc] shadow-sm p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="h-9 w-9 rounded-lg bg-[#fff6ee] grid place-items-center text-xl">{icon}</div>
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="mt-1 text-slate-700 text-sm leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-[#d7cfc6] bg-[#efe6dc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-center">
        <nav className="flex items-center justify-center gap-6 text-sm">
          <a className="hover:underline" href="#">Home</a>
          <a className="hover:underline" href="#">Testimonials</a>
          <a className="hover:underline" href="#">Sourcing</a>
          <a className="hover:underline" href="#">Newsletter</a>
          <a className="hover:underline" href="#products">Products</a>
          <a className="hover:underline" href="#contact">Contact Us</a>
        </nav>
        <div className="mt-6 text-sm text-slate-700">© 2025 BunaRoots. All rights reserved.</div>
      </div>
    </footer>
  );
}
