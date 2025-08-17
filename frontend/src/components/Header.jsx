import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="w-full bg-[#B3282C] text-white text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 text-center">
          FREE SHIPPING on orders over $1,000 in the contiguous USA
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
        
        <Logo />

        <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
          {["Home","Testimonials","Sourcing","Newsletter","Products","Contact Us"].map(i=>(
            <a key={i} href="#" className="hover:text-[var(--coffee)] transition">{i}</a>
          ))}
          <div className="relative">
            <input className="border rounded-full pl-3 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--coffee)]" placeholder="What are you looking for" />
            <svg viewBox="0 0 24 24" className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2">
              <path d="M21 21l-3.8-3.8M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <a href="#products" className="inline-flex items-center rounded-full bg-[var(--coffee)] text-white px-4 py-2 hover:bg-[var(--coffee-dark)] transition">
            Shop for Home
          </a>
        </nav>
      </div>
    </header>
  );
}