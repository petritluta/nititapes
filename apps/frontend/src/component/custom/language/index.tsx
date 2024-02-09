"use client";
import { usePathname, useRouter } from "next/navigation";
import SelectComponent from "../../general/select";
import Image from "next/image";
import { Locale } from "@/i18n-config";
import { SelectOptions } from "@/@types/general/Select";

const Language = () => {
  const pathName = usePathname();
  const router = useRouter();

  const languageOptions = [
    {
      value: "al",
      label: (
        <Image
          src="/icon/albania-flag.png"
          alt="Niti Tape"
          width={22}
          height={22}
          priority
        />
      ),
    },
    {
      value: "en",
      label: (
        <Image
          src="/icon/united-kingdom-flag.png"
          alt="Niti Tape"
          width={20}
          height={20}
          priority
        />
      ),
    },
    {
      value: "de",
      label: (
        <Image
          src="/icon/germany-flag.png"
          alt="Niti Tape"
          width={20}
          height={20}
          priority
        />
      ),
    },
  ];

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
