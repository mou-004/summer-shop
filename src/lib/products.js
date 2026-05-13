import products from "../data/products.json";

export function getAllProducts() {
  return products;
}

export function getPopularProducts() {
  return products.slice(0, 3);
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}
