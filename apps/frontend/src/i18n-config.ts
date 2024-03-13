export const i18n = {
  defaultLocale: "sq",
  locales: ["sq","en", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
