/* import ProductCard from "../components/ProductCard";
import { getPopularProducts } from "../lib/products";
import Link from "next/link";

export default function HomePage() {
  const popularProducts = getPopularProducts();

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 pt-10">
        <div className="hero min-h-[520px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-orange-100 via-yellow-50 to-teal-100 shadow-summer">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10">
            <div className="relative animate__animated animate__fadeInRight">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
                alt="Summer sale"
                className="max-w-sm rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
              />
              <div className="badge badge-primary text-white p-4 absolute -top-4 -left-4 animate__animated animate__pulse animate__infinite">Hot Deals 🔥</div>
            </div>
            <div className="animate__animated animate__fadeInLeft">
              <p className="badge badge-accent badge-lg mb-4">Summer Essentials Store</p>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-neutral">
                Summer Sale <span className="text-primary">50% OFF</span>
              </h1>
              <p className="py-6 max-w-xl text-lg text-gray-700">
                Explore sunglasses, summer outfits, skincare, beach accessories, and more seasonal products for sunny days.
              </p>
              <Link href="/products" className="btn btn-primary text-white btn-lg hover:scale-105 transition">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <p className="text-primary font-semibold">🔥 Popular Products</p>
          <h2 className="text-4xl font-extrabold text-neutral">Customer Favorite Picks</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-base-100 rounded-3xl p-8 shadow-xl summer-card animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-extrabold text-neutral mb-5">Summer Care Tips</h2>
            <div className="space-y-4 text-gray-700">
              <p>💧 Drink enough water to stay hydrated during hot weather.</p>
              <p>🧴 Use sunscreen before going outside in bright sunlight.</p>
              <p>🕶️ Wear sunglasses to protect your eyes from UV rays.</p>
              <p>👕 Choose breathable outfits for outdoor comfort.</p>
            </div>
          </div>

          <div className="bg-base-100 rounded-3xl p-8 shadow-xl summer-card animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-extrabold text-neutral mb-5">Top Brands</h2>
            <div className="grid grid-cols-2 gap-4">
              {["SunShade", "GlowCare", "CoastWear", "HydroMate"].map((brand) => (
                <div key={brand} className="p-5 rounded-2xl bg-orange-50 text-center font-bold text-neutral hover:bg-primary hover:text-white transition">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
*/

import ProductCard from "../components/ProductCard";
import { getPopularProducts } from "../lib/products";
import Link from "next/link";

export default function HomePage() {
  const popularProducts = getPopularProducts();

  return (
    <main className="bg-[#f8fafc] text-neutral">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 pt-10">
        <div className="relative overflow-hidden rounded-[28px] bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20 z-10"></div>

          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80"
            alt="Summer essentials collection"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-20 grid min-h-[560px] items-center px-6 py-16 md:px-12 lg:grid-cols-2 lg:px-16">
            <div className="max-w-2xl animate__animated animate__fadeInLeft">
              <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
                SunCart Summer Essentials Store
              </p>

              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Upgrade Your Summer Style with Seasonal Essentials
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-100 md:text-lg">
                Discover sunglasses, summer outfits, skincare, beach accessories,
                and daily comfort products designed for warm sunny days.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn border-none bg-orange-500 px-8 text-white hover:bg-orange-600 hover:scale-105 transition duration-300"
                >
                  Shop Collection
                </Link>

                <Link
                  href="/products"
                  className="btn border-white/50 bg-white/10 px-8 text-white backdrop-blur-md hover:bg-white hover:text-neutral hover:scale-105 transition duration-300"
                >
                  View Products
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end animate__animated animate__fadeInRight">
              <div className="rounded-3xl border border-white/25 bg-white/15 p-6 text-white backdrop-blur-md shadow-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-gray-200">
                  Summer Offer
                </p>
                <h2 className="mt-2 text-5xl font-extrabold">50% OFF</h2>
                <p className="mt-3 max-w-xs text-sm leading-6 text-gray-100">
                  Limited-time seasonal deals on selected summer products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="animate__animated animate__fadeInUp">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Popular Products
            </p>
            <h2 className="text-3xl font-extrabold text-neutral md:text-5xl">
              Customer Favorite Picks
            </h2>
            <p className="mt-4 max-w-2xl text-gray-600">
              A selected range of useful summer products for outdoor comfort,
              daily care, and seasonal fashion.
            </p>
          </div>

          <Link
            href="/products"
            className="btn btn-outline border-orange-500 text-orange-500 hover:border-orange-600 hover:bg-orange-500 hover:text-white"
          >
            Explore All
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate__animated animate__fadeInUp transition duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Care Tips and Brands */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Summer Care Tips */}
          <div className="rounded-[28px] border border-gray-100 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate__animated animate__fadeInUp">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
              Summer Care
            </p>

            <h2 className="text-3xl font-extrabold text-neutral">
              Simple Tips for Hot Weather
            </h2>

            <p className="mt-4 text-gray-600">
              Follow a few simple habits to stay comfortable and protected
              during summer.
            </p>

            <div className="mt-8 space-y-4">
              <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:border-orange-200 hover:bg-orange-50 hover:translate-x-2">
                <h3 className="font-bold text-neutral group-hover:text-orange-600">
                  Stay Hydrated
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Drink enough water throughout the day, especially during
                  outdoor activities.
                </p>
              </div>

              <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:border-orange-200 hover:bg-orange-50 hover:translate-x-2">
                <h3 className="font-bold text-neutral group-hover:text-orange-600">
                  Use Sun Protection
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Apply sunscreen and wear sunglasses when going outside in
                  strong sunlight.
                </p>
              </div>

              <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-5 transition duration-300 hover:border-orange-200 hover:bg-orange-50 hover:translate-x-2">
                <h3 className="font-bold text-neutral group-hover:text-orange-600">
                  Choose Comfortable Outfits
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Pick breathable and light clothing for better comfort in hot
                  weather.
                </p>
              </div>
            </div>
          </div>

          {/* Top Brands */}
          <div className="rounded-[28px] border border-gray-100 bg-neutral p-8 text-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate__animated animate__fadeInUp">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Featured Brands
            </p>

            <h2 className="text-3xl font-extrabold">
              Trusted Summer Labels
            </h2>

            <p className="mt-4 text-gray-300">
              Explore products from selected seasonal brands focused on comfort,
              protection, and style.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["SunShade", "GlowCare", "CoastWear", "HydroMate"].map(
                (brand, index) => (
                  <div
                    key={brand}
                    className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center font-bold backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-orange-500 hover:shadow-xl animate__animated animate__zoomIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
            <div className="mt-8 rounded-2xl bg-white/10 p-5">
              <p className="text-sm leading-6 text-gray-200">
                SunCart brings together practical summer essentials in one
                simple and modern shopping experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
