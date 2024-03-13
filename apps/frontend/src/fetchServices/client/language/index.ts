import fetchData from "@/fetchServices";
import useSWR from "swr";

export default function getLanguages() {
  const fetcher = (route: string) => fetchData<any>(route, false);

  return useSWR<any>("/i18n/locales", fetcher, {
    revalidateIfStale: false,
  });
}
