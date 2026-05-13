# SunCart – Summer Essentials Store

SunCart is a modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, beach accessories, and more.

## Live URL

Add your deployed live URL here after hosting:

```txt
https://your-suncart-live-url.vercel.app
```

## Purpose

The purpose of this project is to build a responsive summer product store with authentication, protected product details, user profile display, and profile update functionality.

## Key Features

- Responsive Navbar with logo, Home, Products, and My Profile links
- Conditional Navbar buttons for logged-in and logged-out users
- Persistent Navbar and Footer
- Route-based rendering with Next.js App Router
- Static JSON product data with 6 summer products
- Home page hero section with summer sale banner
- Popular Products section showing 3 products
- Summer Care Tips section
- Top Brands section
- Products page showing all products
- Protected product details page
- Login with email and password
- Register with name, email, photo URL, and password
- Google social login
- My Profile page showing name, email, and photo
- Update Information page for name and image
- Responsive layout for mobile, tablet, and desktop
- Hover effects and animation using Animate.css

## Tech Stack

- Next.js
- Tailwind CSS
- DaisyUI
- BetterAuth
- Animate.css

## NPM Packages Used

- next
- react
- react-dom
- better-auth
- better-sqlite3 for local SQLite auth storage
- tailwindcss
- postcss
- autoprefixer
- daisyui
- animate.css

## Environment Variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

For Google login, use this callback URL in Google Cloud Console:

```txt
http://localhost:3000/api/auth/callback/google
```

## Run Locally

```bash
npm install
npx auth@latest migrate
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Deployment Note

When hosting on Vercel, add all environment variables in the Vercel project settings. As this is a single page application style route-based project using Next.js App Router, Vercel handles route reloads correctly.

## Meaningful GitHub Commit Messages

1. Initial project setup with Next.js App Router
2. Configure Tailwind CSS and DaisyUI theme
3. Add summer product JSON data
4. Create responsive Navbar and Footer
5. Build Home page hero and popular products section
6. Add Products page with product cards
7. Add protected product details route
8. Configure BetterAuth email and password authentication
9. Add login and registration pages
10. Add Google social login button
11. Add My Profile page
12. Add profile update feature
13. Add responsive styling and hover animations
14. Add README and environment variable guide


## Install Note

This JavaScript-only version uses BetterAuth with local SQLite through `better-sqlite3@12.9.0`. It does not use PostgreSQL, Prisma, Drizzle, MongoDB, TypeScript, or any `DATABASE_URL`.

Use a fresh extracted folder before running:

```bash
npm install
npx auth@latest migrate
npm run dev
```
