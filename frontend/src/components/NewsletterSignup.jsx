import { useMemo, useState } from "react";
import { API_BASE } from "../config/api";

export default function NewsletterSignup({
  apiBaseUrl = API_BASE, // e.g. http://localhost:9000/api
  source = "website",
  theme = "dark", // "dark" | "light"
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  const endpoint = useMemo(() => {
    const base = (apiBaseUrl || "").replace(/\/+$/, "");
    return `${base}/api/newsletter/subscribe`;
  }, [apiBaseUrl]);

  const isLight = theme === "light";

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data?.success === false) {
        const err =
          data?.errors?.email?.[0] ||
          data?.message ||
          `Error ${res.status}`;
        setStatus("error");
        setMessage(err);
        return;
      }

      setStatus("success");
      setMessage("You’re subscribed! Welcome email is on the way.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className={[
            "w-full rounded-2xl px-4 py-3 outline-none transition",
            "border",
            isLight
              ? "border-black/10 bg-white text-neutral-900 placeholder:text-neutral-400 focus:ring-2 focus:ring-black/10"
              : "border-white/10 bg-black/30 text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20",
          ].join(" ")}
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className={[
            "rounded-2xl px-5 py-3 font-semibold transition disabled:opacity-60",
            isLight
              ? "bg-[#b15d35] text-white hover:brightness-95"
              : "bg-white text-black hover:bg-white/90",
          ].join(" ")}
        >
          {status === "loading" ? "Joining..." : "Join newsletter"}
        </button>
      </div>

      {message ? (
        <p
          className={[
            "mt-2 text-sm",
            status === "success" ? "text-green-700" : "text-red-700",
          ].join(" ")}
        >
          {message}
        </p>
      ) : null}

      <p className={["mt-3 text-xs", isLight ? "text-neutral-500" : "text-white/50"].join(" ")}>
        Unsubscribe anytime.
      </p>
    </form>
  );
}
