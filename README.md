# Tricity Realtors – Premium Real Estate Platform

Modern full-stack real estate application for **Tricity Realtors** with luxury dark/gold UI, JWT authentication, admin management, and SEO-first architecture.

## Folder Structure

```bash
.
├── client/                     # Next.js + Tailwind frontend
│   ├── src/app/                # App router pages (home, listings, about, contact, auth, admin)
│   ├── src/components/         # UI components
│   └── src/lib/                # API and shared types
├── server/                     # Express + MongoDB backend
│   ├── src/config/             # DB and Cloudinary config
│   ├── src/controllers/        # Route handlers
│   ├── src/middleware/         # Auth and upload middleware
│   ├── src/models/             # Mongoose models
│   ├── src/routes/             # API route modules
│   └── src/server.js           # App bootstrap
└── .env.example               # Environment variables template
```

## Features Implemented

- JWT-based authentication (register/login/logout) with admin role support.
- Listings management model with all required fields (100+ scalable).
- Listing API filters: location, price range, type, bedrooms + sorting.
- Listing detail + inquiry model and routes.
- Admin-ready dashboard layout and protected admin APIs.
- Luxury dark/gold responsive UI + testimonials + featured section.
- About page with mission, vision, why choose us, credibility messaging.
- Contact page with Google Maps embed.
- Newsletter block + floating WhatsApp CTA.
- SEO metadata + dynamic listing metadata + sitemap generation.

## Database Schemas

### User
`name, email, phone, password(hash), role(user|admin), timestamps`

### Listing
`title, slug, location, price, propertyType, bedrooms, bathrooms, areaSqFt, description, amenities[], imageGallery[], status, isFeatured, timestamps`

### Inquiry
`listingId(ref), name, phone, message, timestamps`

## API Routes

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Listings
- `GET /api/listings`
- `GET /api/listings/:slug`
- `POST /api/listings` (admin)
- `PUT /api/listings/:id` (admin)
- `DELETE /api/listings/:id` (admin)
- `GET /api/listings/stats` (admin)

### Inquiries
- `POST /api/inquiries`
- `GET /api/inquiries` (admin)

## Setup Instructions

1. Copy environment template:
   ```bash
   cp .env.example .env
   ```
2. Install dependencies:
   ```bash
   npm install --prefix client
   npm install --prefix server
   ```
3. Run backend:
   ```bash
   npm run server:dev
   ```
4. Run frontend:
   ```bash
   npm run client:dev
   ```
5. Open http://localhost:3000

## Security Practices Included

- Password hashing via bcrypt.
- JWT token verification middleware + role-based guard.
- HTTP-only auth cookie support.
- Helmet security headers.
- Rate limiting on `/api` routes.
- CORS with explicit client origin.

## Production Notes

- Use HTTPS and secure cookie settings in production.
- Rotate JWT secret regularly.
- Add request validation layer (Zod/Joi) before production launch.
- Consider Redis for rate-limit/session scale.
