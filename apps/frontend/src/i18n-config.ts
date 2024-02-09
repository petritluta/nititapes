export const i18n = {
  defaultLocale: "al",
  locales: ["al","en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
