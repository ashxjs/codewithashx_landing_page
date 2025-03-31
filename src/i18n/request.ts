import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const headersList = await headers();
  let locale = headersList.get("accept-language")?.split(",")[0];

  if (!locale) {
    locale = "fr";
  }

  if (locale.includes("-")) {
    locale = locale.split("-")[0];
  }

  const filePath = await import(`../../locales/${locale}.json`);

  return {
    locale,
    messages: filePath.default,
  };
});
