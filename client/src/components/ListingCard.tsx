import Link from 'next/link';
import { Listing } from '@/lib/types';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="luxury-card">
      <img src={listing.imageGallery[0]} alt={listing.title} className="h-52 w-full object-cover" />
      <div className="p-5 space-y-2">
        <p className="text-xs text-gold uppercase tracking-wider">{listing.propertyType}</p>
        <h3 className="font-serif text-xl">{listing.title}</h3>
        <p className="text-zinc-400 text-sm">{listing.location}</p>
        <p className="text-gold text-lg font-semibold">₹ {listing.price.toLocaleString('en-IN')}</p>
        <div className="text-sm text-zinc-300">{listing.bedrooms} Bed • {listing.bathrooms} Bath • {listing.areaSqFt} Sq Ft</div>
        <Link href={`/listings/${listing.slug}`} className="inline-block mt-2 border border-gold px-4 py-2 rounded-full text-sm hover:bg-gold hover:text-black transition">View Details</Link>
      </div>
    </article>
  );
}
