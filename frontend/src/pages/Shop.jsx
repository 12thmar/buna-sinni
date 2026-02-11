
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <main>
      {/* Page hero (text left, image right) */}
      <PageHero
              kicker="Launching soon"
              title="Shop BunaRoots at home"
              subtitle="We’re building a smooth shopping experience—subscriptions, origin drops, and bulk orders."
              image={{
                webp: {
                  srcSet: "/images/jebena_a_1000w.webp 1000w, /images/jebena_a_1600w.webp 1600w",
                },
                jpg: {
                  src: "/images/bunna_1600w.jpg",
                  srcSet: "/images/jebena_a_1000w.jpg 1000w, /images/jebena_a_1600w.jpg 1600w",
                },
                alt: "Ethiopian coffee ceremony",
                // Optional:
                // sizes: "(max-width: 900px) 100vw, 900px",
                // loading: "eager",
                // fetchPriority: "high",
              }}
              actions={
                <>
                <a
                    href="#notify"
                    className="rounded-full bg-[#7a2d1a] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
                >
                    Notify me
                </a>
                <Link
                    to="/products"
                    className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/10"
                >
                    Explore origins
                </Link>
            </>
        }
      />
      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main card */}
          <div className="lg:col-span-2 rounded-3xl border border-black/10 bg-white shadow-sm">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold">What’s coming</h2>
              <p className="mt-2 text-sm text-black/60">
                A modern checkout built around your coffee routine.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Feature title="Origin Drops" desc="Limited releases from Yirgachefe, Guji, Arsi, and more." />
                <Feature title="Bulk Orders" desc="Simple quotes and invoicing for cafés and offices." />
                <Feature title="Subscriptions" desc="Fresh coffee on schedule, with pause/skip controls." />
                <Feature title="Transparent Sourcing" desc="Story + traceability from partner farms to your cup." />
              </div>
            </div>
          </div>

          {/* Notify card */}
          <div
            id="notify"
            className="rounded-3xl border border-black/10 bg-gradient-to-b from-white to-[#faf7f4] shadow-sm"
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-lg font-semibold">Get launch updates</h3>
              <p className="mt-2 text-sm text-black/60">
                Be first to know when Shop goes live.
              </p>

              <form
                className="mt-5 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Saved! (Hook this to your backend later)");
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#7a2d1a]/25"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-2xl bg-[#7a2d1a] px-4 py-2.5 text-sm font-medium text-white hover:opacity-95"
                >
                  Notify
                </button>
              </form>

              <p className="mt-3 text-xs text-black/45">
                No spam. Just launch news + first origin drops.
              </p>

              <div className="mt-6 rounded-2xl bg-white/70 p-4 ring-1 ring-black/5">
                <p className="text-sm font-medium">Next featured origins</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Yirgachefe", "Guji", "Arsi", "Kafa", "Limu"].map((t) => (
                    <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft section footer */}
        <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">Want to order sooner?</p>
              <p className="text-sm text-black/60">
                Contact us for bulk supply or custom roast requests.
              </p>
            </div>
            <Link
              to="/contactus"
              className="inline-flex justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Contact BunaRoots
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-black/60">{desc}</div>
    </div>
  );
}
