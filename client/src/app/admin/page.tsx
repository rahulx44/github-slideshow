export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-8">
      <h1 className="font-serif text-4xl">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="luxury-card p-5"><p className="text-zinc-400">Total Listings</p><p className="text-3xl text-gold mt-2">128</p></div>
        <div className="luxury-card p-5"><p className="text-zinc-400">Active Listings</p><p className="text-3xl text-gold mt-2">93</p></div>
        <div className="luxury-card p-5"><p className="text-zinc-400">Inquiries</p><p className="text-3xl text-gold mt-2">251</p></div>
      </div>
      <div className="luxury-card p-6">
        <h2 className="font-serif text-2xl">Manage Listings</h2>
        <p className="text-zinc-400 mt-2">Add / Edit / Delete listings, upload images, and change listing status from this panel.</p>
      </div>
    </div>
  );
}
