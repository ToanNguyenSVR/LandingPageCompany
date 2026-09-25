import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler:{
        styledComponents: true,
    }
};
// module.exports = {
//     // Your existing config
//     exportTrailingSlash: true, // Optional: add trailing slash to URLs
//   };
export default withNextIntl(nextConfig);
