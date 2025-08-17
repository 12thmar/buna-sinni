const Card = ({icon,title,children}) => (
  <div className="rounded-2xl border bg-white shadow-sm p-5">
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cream)]">{icon}</span>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-neutral-600">{children}</p>
  </div>
);

export default function Offerings(){
  return (
    <section id="products" className="max-w-6xl mx-auto px-4 py-16">
      <h3 className="text-xl md:text-2xl font-semibold text-center">Explore Our Offerings</h3>
      <p className="text-center text-neutral-600 mt-2">
        Whether you’re a micro-roaster, café owner, or wholesale buyer, BunaRoots offers premium Ethiopian coffee.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Green Beans" icon={<span>🌱</span>}>
          Unroasted, single-origin green coffee sourced directly from farms in Sidama, Guji, and Yirgacheffe. Perfect for roasters who demand traceability and quality.
        </Card>
        <Card title="Roasted Coffee" icon={<span>☕</span>}>
          Artisan roasted in small batches to highlight the unique flavor profiles of Ethiopian varieties — floral, fruity, bright, and complex.
        </Card>
        <Card title="Wholesale Solutions" icon={<span>📦</span>}>
          Flexible volumes and private-label options for cafés, co-ops, and distributors. Ethically sourced, reliably delivered.
        </Card>
      </div>

      <div className="text-center mt-8">
        <a href="/#" className="inline-flex rounded-full bg-neutral-900 text-white px-5 py-2.5 hover:bg-neutral-700 transition">
          Browse All Coffee
        </a>
      </div>
    </section>
  );
}