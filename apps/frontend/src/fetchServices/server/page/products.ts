import fetchData from "@/fetchServices";

export default async function getProducts() {
  return fetchData(
    "/products?populate=product_images, thumbnail, attributes",
    true
  );
}
