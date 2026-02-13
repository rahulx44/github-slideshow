const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, index: true },
    location: { type: String, required: true, index: true },
    price: { type: Number, required: true, min: 0 },
    propertyType: { type: String, enum: ['Apartment', 'Villa', 'Plot', 'Commercial'], required: true },
    bedrooms: { type: Number, default: 0 },
    bathrooms: { type: Number, default: 0 },
    areaSqFt: { type: Number, required: true },
    description: { type: String, required: true },
    amenities: [{ type: String }],
    imageGallery: [{ type: String }],
    status: { type: String, enum: ['Available', 'Sold', 'Under Negotiation'], default: 'Available' },
    isFeatured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

listingSchema.index({ price: 1, createdAt: -1, bedrooms: 1 });

module.exports = mongoose.model('Listing', listingSchema);
