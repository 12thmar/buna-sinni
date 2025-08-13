export default function Story() {
  return (
    <section id="story" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src="/images/coffee-cherries.jpg" alt="Coffee cherries" className="rounded-xl shadow-sm w-full object-cover aspect-[4/3]" />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">From Ethiopia to You</h2>
          <p className="mt-4 leading-relaxed">
            Our mission is to honor Ethiopian tradition while meeting the highest standards in specialty coffee.
            Each cup tells a story—of people, land, and legacy. We work directly with smallholder farmers and
            cooperatives across Sidama, Yirgacheffe, and Guji.
          </p>
          <p className="mt-4 leading-relaxed">
            From sun-drying on raised beds to meticulous hand-sorting, every step is rooted in craft.
            Importing directly from these communities ensures fair compensation and truly traceable,
            single-origin coffee with a purpose.
          </p>
        </div>
      </div>
    </section>
  );
}