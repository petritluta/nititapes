import fetchData from "@/fetchServices";

export default async function getHomepage() {
  return fetchData("/homepage?");
}
