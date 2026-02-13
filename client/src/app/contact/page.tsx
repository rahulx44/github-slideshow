export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-8">
      <section className="luxury-card p-6 space-y-4">
        <h1 className="font-serif text-3xl">Contact Us</h1>
        <input placeholder="Name" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
        <input placeholder="Email" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
        <textarea placeholder="Message" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" rows={5} />
        <button className="gold-gradient text-black px-5 py-2 rounded-lg font-semibold">Send Message</button>
      </section>
      <section className="luxury-card p-2">
        <iframe title="Tricity map" className="w-full h-[450px] rounded-xl" src="https://maps.google.com/maps?q=Chandigarh&t=&z=13&ie=UTF8&iwloc=&output=embed" />
      </section>
    </div>
  );
}
