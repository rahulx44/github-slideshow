export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 space-y-8">
      <h1 className="font-serif text-4xl">About Tricity Realtors</h1>
      <p className="text-zinc-300">Tricity Realtors is a trusted real estate consultancy specializing in premium residential and commercial properties in the Tricity region. With expertise, transparency, and client-first approach, we help buyers and investors find the right property.</p>
      <section className="grid md:grid-cols-2 gap-6">
        <article className="luxury-card p-6"><h2 className="font-serif text-2xl text-gold">Mission</h2><p className="mt-3 text-zinc-300">Deliver transparent, data-backed and personalized real estate guidance.</p></article>
        <article className="luxury-card p-6"><h2 className="font-serif text-2xl text-gold">Vision</h2><p className="mt-3 text-zinc-300">Become Tricity's most trusted premium property advisory brand.</p></article>
      </section>
      <article className="luxury-card p-6"><h2 className="font-serif text-2xl text-gold">Why Choose Us</h2><ul className="list-disc ml-6 mt-3 text-zinc-300 space-y-2"><li>Verified and premium listings</li><li>Transparent transactions and documentation support</li><li>Market expertise with investor-first strategy</li><li>Long-term credibility and relationship-driven consulting</li></ul></article>
    </div>
  );
}
