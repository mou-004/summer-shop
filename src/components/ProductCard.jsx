import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden summer-card animate__animated animate__fadeInUp">
      <figure className="h-56 overflow-hidden">
        <img className="h-full w-full object-cover hover:scale-110 transition duration-500" src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <div className="badge badge-accent badge-outline">{product.category}</div>
        <h3 className="card-title text-neutral">{product.name}</h3>
        <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        <div className="flex items-center justify-between font-semibold">
          <span>⭐ {product.rating}</span>
          <span className="text-primary text-xl">${product.price}</span>
        </div>
        <div className="card-actions mt-3">
          <Link href={`/products/${product.id}`} className="btn btn-primary w-full text-white hover:scale-[1.02] transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
