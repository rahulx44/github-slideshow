export type PropertyType = 'Apartment' | 'Villa' | 'Plot' | 'Commercial';
export type ListingStatus = 'Available' | 'Sold' | 'Under Negotiation';

export interface Listing {
  _id: string;
  slug: string;
  title: string;
  location: string;
  price: number;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  description: string;
  amenities: string[];
  imageGallery: string[];
  status: ListingStatus;
  isFeatured: boolean;
  createdAt: string;
}
