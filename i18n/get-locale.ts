import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, type Locale } from "./config";
import { resolveLocale } from "./get-dictionary";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const fromCookie = jar.get(LOCALE_COOKIE)?.value;
  if (fromCookie) return resolveLocale(fromCookie);

  const accept = (await headers()).get("accept-language")?.toLowerCase() ?? "";
  if (accept.includes("es")) return "es";
  return resolveLocale(undefined);
}
