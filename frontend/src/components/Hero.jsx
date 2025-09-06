// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative pt-14 sm:pt-0">
      {/* If your header is sticky, pt-14 prevents overlap on small screens */}

      <div className="relative h-[52vh] sm:h-[65vh] md:h-[72vh]">
        <picture>
          <source srcSet="/images/ethiopia-highlands.avif" type="image/avif" />
          <source srcSet="/images/ethiopia-highlands.webp" type="image/webp" />
          <img
            src="/images/ethiopia-highlands.jpg"
            srcSet="/images/ethiopia-highlands-800.jpg 800w, /images/ethiopia-highlands-1280.jpg 1280w, /images/ethiopia-highlands-1920.jpg 1920w"
            sizes="100vw"
            alt="Lush Ethiopian highlands where Arabica coffee originates"
            loading="eager"            /* hero should load eagerly for LCP */
            fetchpriority="high"       /* browsers that support it will prioritize */
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </picture>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-4xl flex-col justify-center px-4 text-center sm:text-left">
            <h1 className="font-extrabold leading-tight text-white text-[clamp(1.4rem,5vw,3.25rem)]">
              From the Birthplace of Coffee
            </h1>
            <p className="mt-3 max-w-2xl text-neutral-100 text-[clamp(0.95rem,2.8vw,1.125rem)] sm:mt-4">
              At BunaRoots, we bring you coffee from the birthplace of Arabica.
              Our beans are a story of heritage, soil, and sun—meticulously
              grown and carefully roasted.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
              <a
                href="#products"
                className="rounded-full bg-[var(--coffee)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--coffee-dark)] sm:text-base"
              >
                Shop Now
              </a>
              <a
                href="#story"
                className="rounded-full border border-white/80 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-black sm:text-base"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}