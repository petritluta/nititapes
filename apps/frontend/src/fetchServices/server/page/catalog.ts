import fetchData from "@/fetchServices";

export default async function getCatalog(locale: any) {
  return fetchData("/catalogs?populate=cover, document", locale);
}
