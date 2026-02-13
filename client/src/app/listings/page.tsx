import { Metadata } from 'next';
import ListingCard from '@/components/ListingCard';
import { Listing } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Listings | Tricity Realtors',
  description: 'Browse premium properties in Tricity by location, price, type, and bedrooms.'
};

const mockListings: Listing[] = [
  {
    _id: '1', slug: 'golden-vista-villa', title: 'Golden Vista Villa', location: 'Sector 21, Chandigarh', price: 42000000,
    propertyType: 'Villa', bedrooms: 5, bathrooms: 4, areaSqFt: 4200, description: 'Luxury villa', amenities: ['Pool'], imageGallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c'], status: 'Available', isFeatured: true, createdAt: new Date().toISOString()
  },
  {
    _id: '2', slug: 'skyline-heights', title: 'Skyline Heights Apartment', location: 'Zirakpur', price: 15500000,
    propertyType: 'Apartment', bedrooms: 3, bathrooms: 3, areaSqFt: 2200, description: 'Premium apartment', amenities: ['Gym'], imageGallery: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811'], status: 'Available', isFeatured: false, createdAt: new Date().toISOString()
  }
];

export default function ListingsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <h1 className="font-serif text-4xl">Premium Listings</h1>
      <section className="luxury-card p-5 grid md:grid-cols-5 gap-4">
        <input placeholder="Location" className="bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
        <input placeholder="Min Price" className="bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2" />
        <select className="bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2"><option>Property Type</option></select>
        <select className="bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2"><option>Bedrooms</option></select>
        <select className="bg-zinc-950 border border-gold/20 rounded-lg px-3 py-2"><option>Newest</option><option>Price Low to High</option><option>Price High to Low</option></select>
      </section>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockListings.map((listing) => <ListingCard key={listing._id} listing={listing} />)}
      </section>
    </div>
  );
}
