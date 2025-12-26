import React, { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";


const COFFEES = [
  { name: "Yirgachefe", zone: "Gedeo, SNNPR", profile: ["Floral", "Citrus", "Tea-like"], process: ["Washed", "Natural"] },
  { name: "Guji", zone: "Oromia", profile: ["Stone fruit", "Berries", "Sweet"], process: ["Natural", "Washed"] },
  { name: "Arsi", zone: "Oromia", profile: ["Chocolate", "Caramel", "Balanced"], process: ["Washed", "Natural"] },
  { name: "Dimma", zone: "Jimma area", profile: ["Earthy", "Herbal", "Full body"], process: ["Natural", "Washed"] },
  { name: "Kafa", zone: "Kaffa", profile: ["Spice", "Cocoa", "Forest notes"], process: ["Natural", "Washed"] },
  { name: "Limu", zone: "Oromia", profile: ["Sweet", "Citrus", "Clean finish"], process: ["Washed"] },
  { name: "Nekemte", zone: "Wollega, Oromia", profile: ["Fruity", "Winey", "Bold"], process: ["Natural"] },
  { name: "Illubabor", zone: "Oromia (Illubabor)", profile: ["Sweet", "Nutty", "Round body"], process: ["Washed", "Natural"] },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}

export default function Coffees() {
  const [query, setQuery] = useState("");
  const [processFilter, setProcessFilter] = useState("All");

  const processes = useMemo(() => {
    const set = new Set();
    COFFEES.forEach((c) => c.process.forEach((p) => set.add(p)));
    return ["All", ...Array.from(set).sort()];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COFFEES.filter((c) => {
      const matchesQuery =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.zone.toLowerCase().includes(q) ||
        c.profile.some((p) => p.toLowerCase().includes(q));

      const matchesProcess =
        processFilter === "All" || c.process.includes(processFilter);

      return matchesQuery && matchesProcess;
    });
  }, [query, processFilter]);

  return (
    <main>
      {/* Page hero (text left, image right) */}
        <PageHero
        kicker="BunaRoots Supply"
        title="Ethiopian Coffee We Supply"
        subtitle="Current origins available through BunaRoots. Browse by name, region, or flavor profile."
        imageSrc="/images/coffee-tree.jpg"
        imageAlt="Coffee tree"
        actions={
            <>
            <Link
                to="/contactus"
                className="rounded-full bg-[#7a2d1a] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
            >
                Request a quote
            </Link>
            <a
                href="#list"
                className="rounded-full bg-black/5 px-5 py-2.5 text-sm font-medium text-black hover:bg-black/10"
            >
                Browse origins
            </a>
            </>
        }
        />
      {/* Page content */}
      <section id="list" className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        {/* Controls */}
        <div className="rounded-3xl border border-black/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-black/80">
                Search (name, zone, tasting notes)
              </label>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try: floral, Oromia, Yirgachefe..."
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none focus:ring-2 focus:ring-[#7a2d1a]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-black/80">
                Process
              </label>
              <select
                value={processFilter}
                onChange={(e) => setProcessFilter(e.target.value)}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none focus:ring-2 focus:ring-[#7a2d1a]/20"
              >
                {processes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <div
              key={c.name}
              className="group rounded-3xl border border-black/10 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-black">{c.name}</h2>
                  <p className="mt-1 text-sm text-black/60">{c.zone}</p>
                </div>

                <span className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs text-black/60">
                  Supply
                </span>
              </div>

              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
                    Tasting notes
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.profile.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
                    Typical process
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.process.map((p) => (
                      <Tag key={p}>{p}</Tag>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <Link
                  to="/contactus"
                  className="text-sm font-medium text-[#7a2d1a] underline decoration-[#7a2d1a]/30 underline-offset-4 transition group-hover:decoration-[#7a2d1a]/60"
                >
                  Request a quote
                </Link>
                <span className="text-xs text-black/45">Bulk & retail</span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="mt-8 rounded-3xl border border-black/10 bg-white p-6 text-black/60 shadow-sm">
            No results. Try a different search or choose “All” processes.
          </div>
        )}
      </section>
    </main>
  );
}
