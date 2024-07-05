import createMiddleware from "next-intl/middleware";
import {
  Pathnames,
  createLocalizedPathnamesNavigation,
} from "next-intl/navigation";

export const locales = ["en", "vi", "ko"];

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // Used when no locale matches
  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en|ko)/:path*"],
};

export const pathnames = {
  "/": "/",
  "/locations": "/locations",
  "/usage/photobooth": "/usage/photobooth",
  "/usage/qr-code": "/usage/qr-code",
  "room/basic": "/room/basic",
  "room/banbe": "/room/banbe",
  "room/high-angle": "/room/high-angle",
} satisfies Pathnames<typeof locales>;

export const localePrefix = "always";
export type AppPathnames = keyof typeof pathnames;

export const NextLocalNavigation = createLocalizedPathnamesNavigation({
  locales,
  localePrefix,
  pathnames,
});
