export default function PageHero({
  title,
  subtitle,
  kicker,
  imageSrc,
  imageAlt = "",
  children,
}) {
  return (
    <section className="border-b bg-gradient-to-b from-[#faf7f4] to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-xl">
            {kicker ? (
              <div className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                {kicker}
              </div>
            ) : null}

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
              {title}
            </h1>

            {subtitle ? (
              <p className="mt-3 text-base text-black/60 sm:text-lg">
                {subtitle}
              </p>
            ) : null}

            {children ? <div className="mt-6">{children}</div> : null}
          </div>

            {/* Right image */}
            <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute -inset-6 
                            rounded-full bg-gradient-to-tr 
                            from-[#7a2d1a]/20 via-transparent 
                            to-black/10 blur-2xl" />

            {/* Circular frame */}
            <div className="
                relative
                h-[260px] w-[260px]
                sm:h-[320px] sm:w-[320px]
                overflow-hidden
                rounded-full
                border border-black/10
                bg-white
                shadow-xl
                ring-1 ring-black/5
            ">
                <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
