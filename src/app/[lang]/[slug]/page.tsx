import Breadcrumb from "@/components/breadcrumb";
import Header from "@/components/header";
import MainSnackbar from "@/components/main-snackbar";
import ScrollTop from "@/components/scroll-top";
import SectionsRenderer from "@/components/sections-renderer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { Resources } from "@/enums/resources";
import { Slugs } from "@/enums/slugs";
import { list } from "@/services/list";
import { IListingItem } from "@/types/api";
import { Locale } from "@/types/locale";
import { getStrapiURL } from "@/utils/api-helpers";
import { FALLBACK_SEO } from "@/utils/constants";
import {
  getCategoriesTagsParams,
  getPagesParamsBySlug,
  getPostsParams,
  getProductsParams,
  getSectionsParamsBySlug,
} from "@/utils/resources-params";

type Props = { params: { lang: Locale; slug: string }; searchParams: any };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug, lang } = params;

  const page = await list(getPagesParamsBySlug(slug, lang));

  if (page.data.length === 0) return FALLBACK_SEO;

  if (!page.data[0].attributes?.seo) return FALLBACK_SEO;

  const metadata = page.data[0].attributes.seo;

  return {
    title: `${metadata.title} - ${metadata.description}`,
    description: metadata.description,
    openGraph: {
      title: `${metadata.title} - ${metadata.description}`,
      description: metadata.description,
      images: [
        {
          url: getStrapiURL(metadata.icon.data.attributes.url),
        },
      ],
    },
    twitter: {
      title: `${metadata.title} - ${metadata.description}`,
      description: metadata.description,
      images: [
        {
          url: getStrapiURL(metadata.icon.data.attributes.url),
        },
      ],
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  const { slug, lang } = params;

  const filters: any = {};

  if (searchParams["search"])
    filters["$or"] = [
      { name: { $containsi: searchParams["search"].replaceAll("+", " ") } },
      {
        description: {
          $containsi: searchParams["search"].replaceAll("+", " "),
        },
      },
    ];

  if (searchParams["category"])
    filters["categories"] = { slug: searchParams["category"] };

  const requests: any[] = [
    list(getSectionsParamsBySlug(Slugs.HEADER, 1, lang)),
    list(getSectionsParamsBySlug(Slugs.FOOTER, 1, lang)),
    list(getSectionsParamsBySlug(slug, 100, lang)),
    list(getPostsParams({}, { start: 0, limit: 4 }, lang)),
    list(getPagesParamsBySlug(slug, lang)),
  ];

  if (slug === "products")
    requests.push(list(getProductsParams({}, { start: 0, limit: 9 }, lang)));
  if (slug === "news")
    requests.push(
      list(
        getPostsParams(
          filters,
          {
            start: searchParams["page"]
              ? (parseInt(searchParams["page"]) - 1) * 9
              : 0,
            limit: 9,
          },
          lang
        )
      ),
      list(getCategoriesTagsParams(Resources.CATEGORIES, lang))
    );

  const [
    headerSections,
    footerSections,
    sections,
    posts,
    pages,
    blogPosts,
    categories,
  ] = await Promise.all(requests);

  const listings: IListingItem[] = [
    { name: "posts", result: posts },
    { name: "blogPosts", result: blogPosts },
    { name: "categories", result: categories },
  ];

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header data={headerSections.data} activePage={slug} />
      )}
      <Breadcrumb page={pages.data[0].attributes} />
      <main>
        <SectionsRenderer
          sections={sections}
          listings={listings}
          activePage={slug}
          searchParams={searchParams}
        />
      </main>
      <SectionsRenderer
        sections={footerSections}
        listings={listings}
        activePage={slug}
      />
      <ScrollTop />
      <WhatsAppChat />
      <MainSnackbar />
    </>
  );
}
