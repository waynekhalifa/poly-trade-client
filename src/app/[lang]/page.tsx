import Header from "@/components/header";
import MainSnackbar from "@/components/main-snackbar";
import ScrollTop from "@/components/scroll-top";
import SectionsRenderer from "@/components/sections-renderer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { Pages } from "@/enums/pages";
import { Resources } from "@/enums/resources";
import { Slugs } from "@/enums/slugs";
import { list } from "@/services/list";
import { IListingItem } from "@/types/api";
import { FALLBACK_SEO } from "@/utils/constants";
import {
  getPagesParamsBySlug,
  getPostsParams,
  getSectionsParamsBySlug,
} from "@/utils/resources-params";

export async function generateMetadata(): Promise<any> {
  const page = await list(getPagesParamsBySlug(Slugs.HOME));

  if (page.data.length === 0) return FALLBACK_SEO;

  const metadata = page.data[0].attributes.seo;

  if (!metadata) return FALLBACK_SEO;

  return {
    title: `${metadata.title} - ${metadata.description}`,
    description: metadata.description,
    alternates: {
      canonical: process.env.NEXT_PUBLIC_URL,
    },
    openGraph: {
      url: process.env.NEXT_PUBLIC_URL,
      siteName: metadata.title,
      title: `${metadata.title} - ${metadata.description}`,
      description: metadata.description,
      site_name: metadata.title,
      images: [{ url: metadata.icon.data.attributes.url }],
    },
    twitter: {
      title: `${metadata.title} - ${metadata.description}`,
      description: metadata.description,
      site_name: metadata.title,
      images: [{ url: metadata.icon.data.attributes.url }],
    },
  };
}

export default async function Home() {
  const [headerSections, footerSections, sections, posts] = await Promise.all([
    list(getSectionsParamsBySlug(Slugs.HEADER, 1)),
    list(getSectionsParamsBySlug(Slugs.FOOTER, 1)),
    list(getSectionsParamsBySlug(Slugs.HOME, 100)),
    list(getPostsParams({}, { start: 0, limit: 4 })),
  ]);

  const listings: IListingItem[] = [{ name: Resources.POSTS, result: posts }];

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header data={headerSections.data} activePage={Pages.HOME} />
      )}
      <main>
        <SectionsRenderer
          sections={sections}
          listings={listings}
          activePage={Pages.HOME}
        />
      </main>
      <SectionsRenderer
        sections={footerSections}
        listings={listings}
        activePage={Pages.HOME}
      />
      <ScrollTop />
      <WhatsAppChat />
      <MainSnackbar />
    </>
  );
}
