import NewsletterSignup from "../components/NewsletterSignup";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7efe6] via-[#f3e6d9] to-[#efe1d4]" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />
      <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-black/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
            Stay Connected to the Roots
          </h1>
          <p className="mt-2 text-neutral-700">
            Updates on harvests, farm stories, and new arrivals — sent occasionally.
          </p>
        </div>

        {/* split card */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 shrink-0 rounded-2xl bg-black/5 grid place-items-center">
                <span className="text-xl">☕️</span>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Get BunaRoots stories & updates
                </h2>
                <p className="mt-1 text-sm text-neutral-700">
                  From seed to cup: growth, harvest, washing stations, roasting notes, and behind-the-scenes.
                </p>
              </div>
            </div>

            <div className="mt-5">
              <NewsletterSignup theme="light" source="newsletter_page" />
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* image side */}
          <div className="relative overflow-hidden rounded-3xl border border-black/10 shadow-sm">
            <img
              src="/images/coffee-beans.jpg"
              alt="Coffee beans"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/15 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
                Ethiopian coffee stories, straight from the source
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                From farm roots to your cup
              </h3>
              <p className="mt-1 text-sm text-white/85">
                Get early updates on origins like Yirgacheffe, Guji, Limu, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
