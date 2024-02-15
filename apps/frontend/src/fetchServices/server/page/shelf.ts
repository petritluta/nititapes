import fetchData from "@/fetchServices";

export default async function getShelf() {
  return fetchData(
    "/shelf-planner?populate=development,representation,reality"
  );
}
