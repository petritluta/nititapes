import fetchData from "@/fetchServices";
import useSWR from "swr";

export default function getLanguages() {
  return useSWR<any>("/i18n/locales", fetchData);
}
