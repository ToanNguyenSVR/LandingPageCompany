import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material";
import theme from "../../config/theme/theme";
import { Suspense } from "react";
import { LocationProvider } from "@/context/LocationProvider";

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <LocationProvider>
              <NextIntlClientProvider messages={messages}>
                <Suspense fallback={<>Loading...</>}>{children}</Suspense>
              </NextIntlClientProvider>
            </LocationProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
