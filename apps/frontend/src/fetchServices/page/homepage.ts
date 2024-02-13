import fetchData from "..";

export default async function getHomepage() {
  return fetchData("/homepage");
}
