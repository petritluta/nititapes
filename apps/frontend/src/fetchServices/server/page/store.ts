import fetchData from "@/fetchServices";

export default async function getStore() {
  return fetchData("/clients?populate=icon");
}
