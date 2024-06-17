import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Theme from "./theme";
import { FALLBACK_SEO } from "./utils/constants";
import { getStrapiURL } from "./utils/api-helpers";
import { getGlobal } from "./utils/get-global";

export async function generateMetadata(): Promise<any> {
  const [global] = await Promise.all([getGlobal()]);

  if (!global.data) return FALLBACK_SEO;

  const { favicon } = global.data.attributes;
  const { url } = favicon.data.attributes;

  return {
    manifest: "/manifest.json",
    robots: "noindex,nofollow",
    icons: {
      icon: [new URL(url, getStrapiURL())],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [global] = await Promise.all([getGlobal()]);

  const { palette } = global.data.attributes;

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme paletteData={palette}>{children}</Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
