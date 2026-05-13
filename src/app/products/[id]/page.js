import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { auth } from "../../../lib/auth";
import { getProductById } from "../../../lib/products";

export default async function ProductDetailsPage({ params }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect(`/login?callbackURL=/products/${params.id}`);
  }

  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-2 items-center bg-base-100 rounded-[2rem] p-6 md:p-10 shadow-summer animate__animated animate__fadeIn">
        <div className="overflow-hidden rounded-3xl">
          <img className="w-full h-[460px] object-cover hover:scale-110 transition duration-700" src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="badge badge-accent badge-lg mb-4">{product.category}</div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral">{product.name}</h1>
          <p className="mt-3 text-lg text-gray-600">Brand: {product.brand}</p>
          <p className="mt-5 text-gray-700 leading-relaxed">{product.description}</p>
          <div className="grid grid-cols-2 gap-4 my-8">
            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-3xl font-extrabold text-primary">${product.price}</p>
            </div>
            <div className="rounded-2xl bg-teal-50 p-5">
              <p className="text-sm text-gray-500">Rating</p>
              <p className="text-3xl font-extrabold text-secondary">⭐ {product.rating}</p>
            </div>
            <div className="rounded-2xl bg-yellow-50 p-5">
              <p className="text-sm text-gray-500">Stock</p>
              <p className="text-3xl font-extrabold text-neutral">{product.stock}</p>
            </div>
            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-sm text-gray-500">Category</p>
              <p className="text-xl font-bold text-neutral">{product.category}</p>
            </div>
          </div>
          <button className="btn btn-primary text-white btn-lg hover:scale-105 transition">Place Order</button>
        </div>
      </div>
    </section>
  );
}
