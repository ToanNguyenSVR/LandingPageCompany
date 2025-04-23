import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  //   images: {
  //     domains: ["phototimevn.com"],
  //   },
  //   trailingSlash: true,
  //   output: "export",
  //   exportTrailingSlash: true,
  //   output: "export",
};

export default withNextIntl(nextConfig);
