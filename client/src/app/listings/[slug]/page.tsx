import { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const nice = params.slug.replaceAll('-', ' ');
  return {
    title: `${nice} | Tricity Realtors`,
    description: `Explore full details for ${nice} listed by Tricity Realtors.`
  };
}

export default function ListingDetailPage({ params }: Props) {
  const name = params.slug.replaceAll('-', ' ');
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <h1 className="font-serif text-4xl capitalize">{name}</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 luxury-card p-3">
          <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" className="w-full h-[420px] object-cover rounded-xl" alt={name} />
        </div>
        <aside className="luxury-card p-6 space-y-4">
          <h2 className="font-serif text-2xl">Send Inquiry</h2>
          <input placeholder="Name" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
          <input placeholder="Phone" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
          <textarea placeholder="Message" className="w-full bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" rows={4} />
          <button className="w-full gold-gradient text-black py-2 rounded-lg font-semibold">Submit Inquiry</button>
          <a href="https://wa.me/919999999999" className="block text-center border border-gold rounded-lg py-2">WhatsApp Agent</a>
        </aside>
      </div>
    </div>
  );
}
