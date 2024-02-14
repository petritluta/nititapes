import fetchData from "@/fetchServices";

export default async function getHeader() {
  return fetchData("/homepage");
}
