import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   // locales: ['en', 'ko', 'vi'],
  //   // defaultLocale: 'en',
  //   localeDetection: false,
  // },
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["phototimevn.com"],
  },
  trailingSlash: true,
   output: "export",
};

export default withNextIntl(nextConfig);
