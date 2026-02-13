import Link from 'next/link';

const testimonials = [
  { name: 'Ritika Sharma', text: 'Highly transparent and premium service. We closed our villa deal smoothly.' },
  { name: 'Ankit Mehta', text: 'Best investment advice in Tricity. Professional and responsive team.' }
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-12">
      <section className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-gold uppercase tracking-[0.2em] text-xs">Luxury Real Estate</p>
          <h1 className="font-serif text-5xl md:text-6xl mt-4 leading-tight">Find Premium Properties with Trust</h1>
          <p className="text-zinc-300 mt-6">Tricity Realtors brings curated luxury apartments, villas, plots, and commercial opportunities.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/listings" className="gold-gradient text-black px-6 py-3 rounded-full font-semibold">Explore Listings</Link>
            <Link href="/contact" className="border border-gold px-6 py-3 rounded-full">Get Consultation</Link>
          </div>
        </div>
        <div className="luxury-card">
          <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" alt="Luxury house" className="h-[430px] w-full object-cover" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-6">Featured Listings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <article key={item} className="luxury-card p-5">
              <p className="text-gold text-sm">Featured</p>
              <h3 className="font-serif text-xl mt-2">Signature Residence {item}</h3>
              <p className="text-zinc-400 text-sm mt-2">Sector {item * 10}, Tricity • ₹ {(item * 2.2).toFixed(1)} Cr</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl mb-6">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="luxury-card p-6">
              <p className="text-zinc-300">“{item.text}”</p>
              <footer className="mt-3 text-gold text-sm">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl">Join Our Newsletter</h2>
        <form className="mt-6 flex gap-3 justify-center">
          <input className="bg-zinc-900 border border-gold/30 rounded-full px-5 py-3 w-full max-w-md" placeholder="Enter your email" />
          <button className="gold-gradient text-black rounded-full px-6 font-semibold">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
