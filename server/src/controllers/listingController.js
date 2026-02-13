const Listing = require('../models/Listing');
const slugify = require('../utils/slugify');

exports.createListing = async (req, res) => {
  const data = req.body;
  const slug = slugify(data.title);
  const imageGallery = req.files?.map((f) => f.path) || [];
  const listing = await Listing.create({ ...data, slug, imageGallery });
  res.status(201).json(listing);
};

exports.updateListing = async (req, res) => {
  const payload = { ...req.body };
  if (payload.title) payload.slug = slugify(payload.title);
  if (req.files?.length) payload.imageGallery = req.files.map((f) => f.path);
  const listing = await Listing.findByIdAndUpdate(req.params.id, payload, { new: true });
  if (!listing) return res.status(404).json({ message: 'Listing not found' });
  res.json(listing);
};

exports.deleteListing = async (req, res) => {
  await Listing.findByIdAndDelete(req.params.id);
  res.json({ message: 'Listing deleted' });
};

exports.getListings = async (req, res) => {
  const { location, minPrice, maxPrice, propertyType, bedrooms, sort = 'newest' } = req.query;
  const query = {
    ...(location && { location: new RegExp(location, 'i') }),
    ...(propertyType && { propertyType }),
    ...(bedrooms && { bedrooms: Number(bedrooms) }),
    ...(minPrice || maxPrice ? { price: { ...(minPrice && { $gte: Number(minPrice) }), ...(maxPrice && { $lte: Number(maxPrice) }) } } : {})
  };
  const sortMap = { newest: { createdAt: -1 }, price_low: { price: 1 }, price_high: { price: -1 } };
  const listings = await Listing.find(query).sort(sortMap[sort] || sortMap.newest);
  res.json(listings);
};

exports.getListingBySlug = async (req, res) => {
  const listing = await Listing.findOne({ slug: req.params.slug });
  if (!listing) return res.status(404).json({ message: 'Not found' });
  res.json(listing);
};

exports.getStats = async (_req, res) => {
  const totalListings = await Listing.countDocuments();
  const activeListings = await Listing.countDocuments({ status: 'Available' });
  res.json({ totalListings, activeListings });
};
