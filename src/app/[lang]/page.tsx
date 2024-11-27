import Header from "@/components/header";
import MainSnackbar from "@/components/main-snackbar";
import ScrollTop from "@/components/scroll-top";
import SectionsRenderer from "@/components/sections-renderer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { Languages } from "@/enums/languages";
import { Pages } from "@/enums/pages";
import { Resources } from "@/enums/resources";
import { Slugs } from "@/enums/slugs";
import { list } from "@/services/list";
import { IListingItem } from "@/types/api";
import { Locale } from "@/types/locale";
import { FALLBACK_SEO } from "@/utils/constants";
import {
  getPagesParamsBySlug,
  getPostsParams,
  getSectionsParamsBySlug,
} from "@/utils/resources-params";

type Props = { params: { lang: Locale } };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { lang } = params;

  const page = await list(getPagesParamsBySlug(Slugs.HOME, lang));

  if (page.data.length === 0) return FALLBACK_SEO;

  const metadata = page.data[0].attributes.seo;

  if (!metadata) return FALLBACK_SEO;

  const title: string =
    lang === Languages.ENGLISH ? metadata.title : metadata.arTitle;
  const description: string =
    lang === Languages.ENGLISH ? metadata.description : metadata.arDescription;

  return {
    title: `${title} - ${description}`,
    description: description,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL,
    },
    openGraph: {
      url: process.env.NEXT_PUBLIC_URL,
      siteName: title,
      title: `${title} - ${description}`,
      description: description,
      site_name: title,
      images: [{ url: metadata.icon.data.attributes.url }],
    },
    twitter: {
      title: `${title} - ${description}`,
      description: description,
      site_name: title,
      images: [{ url: metadata.icon.data.attributes.url }],
    },
  };
}

export default async function Home({ params }: Props) {
  const { lang } = params;
  const [headerSections, footerSections, sections, posts] = await Promise.all([
    list(getSectionsParamsBySlug(Slugs.HEADER, 1, lang)),
    list(getSectionsParamsBySlug(Slugs.FOOTER, 1, lang)),
    list(getSectionsParamsBySlug(Slugs.HOME, 100, lang)),
    list(getPostsParams({}, { start: 0, limit: 4 }, lang)),
  ]);

  const listings: IListingItem[] = [{ name: Resources.POSTS, result: posts }];

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header
          data={headerSections.data}
          activePage={Pages.HOME}
          locale={lang}
        />
      )}
      <main>
        <SectionsRenderer
          sections={sections}
          listings={listings}
          activePage={Pages.HOME}
          locale={lang}
        />
      </main>
      <SectionsRenderer
        sections={footerSections}
        listings={listings}
        activePage={Pages.HOME}
        locale={lang}
      />
      <ScrollTop />
      <WhatsAppChat />
      <MainSnackbar />
    </>
  );
}
