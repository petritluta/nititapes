"use client";
import { usePathname, useRouter } from "next/navigation";
import SelectComponent from "../../general/select";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { SelectOptions } from "@/@types/general/Select";
import getLanguages from "@/fetchServices/client/language";
import { map } from "lodash";

const Language = () => {
  const pathName = usePathname();
  const router = useRouter();

  const { data, isLoading, error } = getLanguages();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Transform the array to the react-select option format
  const languageOptions = data
    ? map(data, (locale) => ({
        value: locale.code,
        label: locale.name,
      }))
    : [];

  const selectLanguage = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  const getDefault = (): SelectOptions => {
    const segments = pathName.split("/");
    const currentLocale = segments.length > 1 ? segments[1] : null;

    const defaultLanguageOption = languageOptions.find(
      (option) => option.value === currentLocale
    );

    if (defaultLanguageOption) {
      return defaultLanguageOption;
    } else {
      return languageOptions[0];
    }
  };

  return (
    <SelectComponent
      data={languageOptions}
      defaultValue={getDefault()}
      changeSelect={selectLanguage}
    />
  );
};

export default Language;
