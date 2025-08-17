export function ContactQuote() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-16 text-center">
      <p>
        Get in touch. Fill out our <a className="underline underline-offset-4" href="#contact">contact form</a> and we’ll get back to you shortly.
      </p>
      <blockquote className="mt-8 italic text-slate-700">
        “The aroma and quality were unmatched. As a roaster, sourcing from BunaRoots has elevated my offering.”
        <footer className="mt-2 text-sm">— James M., Roaster in California</footer>
      </blockquote>
    </section>
  );
}