# SunCart Summer Essentials Store

## Project Overview

SunCart is a modern summer focused eCommerce web application built with Next.js. The platform allows users to explore seasonal products such as sunglasses, summer outfits, skincare items, beach accessories, and other summer essentials. Users can browse products, view popular items, check product details, and place orders after authentication.

This project was developed for the assignment category: **category-A8-Jackfruit**.

## Live Website

Live URL:  
https://peppy-salmiakki-cc091f.netlify.app

## Project Purpose

The main purpose of this project is to create a responsive and user friendly summer eCommerce platform where users can securely browse products and access protected pages after login. The project uses authentication, protected routes, product data management, and a modern responsive layout.

## Key Features

- Modern summer themed eCommerce design
- Fully responsive layout for mobile, tablet, and desktop
- Persistent Navbar and Footer
- Route based page rendering using Next.js App Router
- Product listing from static JSON data
- Popular products section on the home page
- Product details page with protected route
- Login and registration system using BetterAuth
- Google social login
- User profile page for logged in users
- Update profile information feature
- Environment variables for secure configuration
- Toast or form error message for authentication errors
- Clean UI using Tailwind CSS and DaisyUI
- Deployed application with working route reload support

## Main Pages

### Home Page

The home page includes:

- Summer sale hero section
- Popular products section
- Summer care tips section
- Top brands section

### Products Page

The products page displays summer products with important information such as:

- Product image
- Product name
- Brand
- Price
- Rating
- Stock
- Category
- View details button

### Product Details Page

The product details page is protected. Only authenticated users can access it. If a user is not logged in, they are redirected to the login page. After successful login, they can access the protected product details.

### Login Page

The login page includes:

- Email input
- Password input
- Login button
- Google login button
- Register page link
- Error message for failed login

### Register Page

The register page includes:

- Name input
- Email input
- Photo URL input
- Password input
- Register button
- Google login button
- Login page link
- Error message for failed registration

### My Profile Page

The profile page shows logged in user information such as:

- Name
- Email
- Profile photo

### Update Profile Page

The update profile page allows the logged in user to update:

- Name
- Profile image URL

## Technologies Used

- Next.js
- React
- Tailwind CSS
- DaisyUI
- BetterAuth
- MongoDB
- JavaScript
- Netlify

## NPM Packages Used

```bash
next
react
react-dom
tailwindcss
daisyui
better-auth
mongodb
@better-auth/mongo-adapter
react-hot-toast
lottie-react
