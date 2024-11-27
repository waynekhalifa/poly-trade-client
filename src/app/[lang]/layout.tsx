import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import Theme from "@/theme";
import { Locale } from "@/types/locale";
import { getStrapiURL } from "@/utils/api-helpers";
import { FALLBACK_SEO } from "@/utils/constants";
import { getGlobal } from "@/utils/get-global";
import { Languages } from "@/enums/languages";
import { Directions } from "@/enums/directions";
import { i18n } from "root/i18n-config";

type Props = { params: { lang: Locale }; children: React.ReactNode };

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

export default async function RootLayout({ params, children }: Props) {
  const { lang } = params;
  const [global] = await Promise.all([getGlobal()]);

  return (
    <html
      lang={lang}
      dir={lang === Languages.ENGLISH ? Directions.LTR : Directions.RTL}
    >
      <body>
        <AppRouterCacheProvider>
          <Theme paletteData={global.data.attributes.palette} locale={lang}>
            {children}
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

/**
 * generateStaticParams
 *
 * should increase performance
 *
 * @returns locales static export
 */
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
