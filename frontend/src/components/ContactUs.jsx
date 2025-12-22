// src/components/ContactUs.jsx
import { useState } from "react";

// base URL comes from Vite env, falls back to localhost if missing
// public API base URL for the browser
const API_BASE =
  (import.meta?.env?.VITE_API_BASE_URL) || "http://localhost:2173";

export default function ContactUs() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSent(false);
    setError("");

    const form = e.currentTarget;                // 👈 capture the form
    const data = Object.fromEntries(new FormData(form));

    try {
        const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        });

        console.log("Contact response status:", res.status);

        if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("Contact server error:", res.status, text);
        setError("Something went wrong sending your message. Please try again.");
        return;
        }

        // ✅ success: use the saved form reference
        form.reset();
        setSent(true);
    } catch (err) {
        console.error("Contact form network error:", err);
        setError("Unable to reach the server. Please check your connection.");
    }
    };


  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT: title + contact blocks */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--coffee)]">
            Contact Our Team
          </h1>

          <div className="rounded-2xl bg-[color:var(--coffee-soft,#e9f2ff)] p-6 space-y-4">
            <ContactCard
              title="Phone"
              subtitle="(984) 225-9058"
              accent="text-[var(--coffee)]"
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--coffee)]">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17.61 17.61 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02z"
                  />
                </svg>
              }
            />
            <ContactCard
              title="Email Us"
              subtitle="info@BunaRoots.com"
              accent="text-[var(--coffee)]"
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--coffee)]">
                  <path
                    fill="currentColor"
                    d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 5.2l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V9.2z"
                  />
                </svg>
              }
            />
            <ContactCard
              title="Website"
              subtitle="www.BunaRoots.com"
              accent="text-[var(--coffee)]"
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--coffee)]">
                  <path
                    fill="currentColor"
                    d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 17.93V18h-2v1.93A8.013 8.013 0 014.07 13H6v-2H4.07A8.013 8.013 0 0111 4.07V6h2V4.07A8.013 8.013 0 0119.93 11H18v2h1.93A8.013 8.013 0 0113 19.93z"
                  />
                </svg>
              }
            />
            <ContactCard
              title="Location"
              subtitle="Raleigh, NC"
              accent="text-[var(--coffee)]"
              icon={
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-[var(--coffee)]">
                  <path
                    fill="currentColor"
                    d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1114.5 9 2.5 2.5 0 0112 11.5z"
                  />
                </svg>
              }
            />
          </div>

          <div className="rounded-xl border border-neutral-200 p-4 text-sm text-neutral-600">
            Prefer email? We typically respond within 1–2 business days.
          </div>
        </div>

        {/* RIGHT: form (no heading here) */}
        <div className="space-y-6">
          {sent && (
            <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
              ✅ Thank you! Your message has been sent.
            </div>
          )}

          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-5">
            <Field label="Category" name="category" required>
              <select
                name="category"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option>Wholesale</option>
                <option>Retail Order</option>
                <option>Partnership</option>
                <option>Support</option>
                <option>Other</option>
              </select>
            </Field>

            <Field label="Name" name="name" required>
              <input
                name="name"
                type="text"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                required
              />
            </Field>

            <Field label="Email" name="email" required>
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                required
              />
            </Field>

            <Field label="Mobile" name="mobile" required>
              <div className="flex items-stretch gap-2">
                <span className="inline-flex items-center rounded-lg border border-neutral-300 px-3">
                  🇺🇸
                </span>
                <input
                  name="mobile"
                  type="tel"
                  placeholder="(555) 555-5555"
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                  required
                />
              </div>
            </Field>

            <Field label="Subject" name="subject" required>
              <input
                name="subject"
                type="text"
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                required
              />
            </Field>

            <Field label="Message" name="message" required>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--coffee)]/40"
                required
              />
            </Field>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-[var(--coffee)] px-5 py-3 text-white hover:opacity-95"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */
function Field({ label, required, children }) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-neutral-900">
        {label}
        {required && <span className="text-red-500">*</span>}
      </span>
      {children}
    </label>
  );
}

function ContactCard({ icon, title, subtitle, accent = "text-[var(--coffee)]" }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-neutral-200">
      <div className="shrink-0">{icon}</div>
      <div>
        <div className={`text-lg font-semibold ${accent}`}>{title}</div>
        <div className="text-neutral-600">{subtitle}</div>
      </div>
    </div>
  );
}
