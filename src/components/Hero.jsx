export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[56vh] md:h-[64vh] w-full bg-center bg-cover" style={{ backgroundImage: "url(/images/ethiopia-highlands.jpg)" }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0">
        <div className="max-w-4xl mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">From the Birthplace of Coffee</h1>
          <p className="mt-4 text-neutral-100 max-w-2xl">
            At BunaRoots, we bring you coffee from the birthplace of Arabica. Our beans are a story of heritage, soil, and sun—meticulously grown and carefully roasted.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#products" className="rounded-full bg-[var(--coffee)] text-white px-5 py-2.5 hover:bg-[var(--coffee-dark)] transition">Shop Now</a>
            <a href="#story" className="rounded-full border border-white/80 text-white px-5 py-2.5 hover:bg-white hover:text-black transition">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}