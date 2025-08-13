export default function Newsletter() {
  return (
    <section className="bg-[var(--cream)]/60 border-y">
      <div className="max-w-3xl mx-auto px-4 py-14 text-center">
        <h3 className="text-xl md:text-2xl font-semibold">Stay Connected to the Roots</h3>
        <p className="mt-2 text-neutral-600">Get updates on harvests, farm stories, and exclusive offers.</p>
        <form className="mt-5 flex items-center max-w-xl mx-auto gap-2">
          <input type="email" required placeholder="Your email address" className="flex-1 border rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[var(--coffee)]" />
          <button className="rounded-full bg-[var(--coffee)] text-white px-5 py-2.5 hover:bg-[var(--coffee-dark)] transition">Join Our List</button>
        </form>
      </div>
    </section>
  );
}