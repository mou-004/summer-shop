/* import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-10 animate__animated animate__fadeInDown">
        <p className="text-primary font-semibold">📦 Products</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-neutral">Explore Summer Essentials</h1>
        <p className="mt-4 text-gray-600">Browse seasonal products for sunny weather, beach days, and daily comfort.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
  */
import ProductCard from "../../components/ProductCard";
import { getAllProducts } from "../../lib/products";

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-yellow-50 to-sky-50 px-4 py-14">
      {/* Background decoration */}
      <div className="absolute left-[-80px] top-20 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl"></div>
      <div className="absolute right-[-80px] bottom-20 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center animate__animated animate__fadeInDown">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-md">
            <span>📦</span>
            <span>Products</span>
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-neutral md:text-6xl">
            Explore Summer
            <span className="text-orange-500"> Essentials</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
            Browse seasonal products for sunny weather, beach days, skincare,
            travel comfort, and everyday summer style.
          </p>

          {/* Small info badges */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              🌞 Summer Sale
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              🔥 Hot Deals
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
              🚚 Fast Order
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate__animated animate__fadeInUp transition duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
