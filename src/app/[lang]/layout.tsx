import Theme from "@/theme";
import { getStrapiURL } from "@/utils/api-helpers";
import { FALLBACK_SEO } from "@/utils/constants";
import { getGlobal } from "@/utils/get-global";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export async function generateMetadata(): Promise<any> {
  const [global] = await Promise.all([getGlobal()]);

  if (!global.data) return FALLBACK_SEO;

  return {
    manifest: "/manifest.json",
    robots: "noindex,nofollow",
    icons: {
      icon: [
        new URL(
          global.data.attributes.favicon.data.attributes.url,
          getStrapiURL()
        ),
      ],
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [global] = await Promise.all([getGlobal()]);

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme paletteData={global.data.attributes.palette}>{children}</Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
