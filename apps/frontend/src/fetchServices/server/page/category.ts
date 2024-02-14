import fetchData from "@/fetchServices";

export default async function getCategory(locale: any) {
  return fetchData("/product-categories?populate=seo,image", locale);
}
