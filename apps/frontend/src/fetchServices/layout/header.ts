import fetchData from "..";

export default async function getHeader() {
  return fetchData("/homepage");
}
