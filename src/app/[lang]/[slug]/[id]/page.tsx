import Header from "@/components/header";
import NotFound from "@/components/not-found";
import MainSnackbar from "@/components/main-snackbar";
import Breadcrumb from "@/components/breadcrumb";
import ProductSections from "@/components/product-sections";
import PostSections from "@/components/post-sections";
import ScrollTop from "@/components/scroll-top";
import SectionsRenderer from "@/components/sections-renderer";
import WhatsAppChat from "@/components/whatsapp-chat";
import { FALLBACK_SEO } from "@/utils/constants";
import { getStrapiURL } from "@/utils/api-helpers";
import { IListingItem } from "@/types/api";
import { list } from "@/services/list";
import { Locale } from "@/types/locale";
import { Slugs } from "@/enums/slugs";
import {
  getPostsParams,
  getProductsParams,
  getSectionsParamsBySlug,
} from "@/utils/resources-params";
import { Languages } from "@/enums/languages";

type Props = { params: { lang: Locale; slug: string; id: string } };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { lang, slug, id } = params;
  const requests: any[] = [];

  if (slug === "news")
    requests.push(
      list(getPostsParams({ slug: id }, { start: 0, limit: 1 }, lang))
    );
  if (slug === "products")
    requests.push(
      list(getProductsParams({ slug: id }, { start: 0, limit: 1 }, lang))
    );

  const [singleData] = await Promise.all(requests);

  if (
    !singleData ||
    (singleData && !singleData.data) ||
    (singleData.data && !singleData.data[0].attributes?.seo)
  )
    return FALLBACK_SEO;

  const metadata =
    singleData && singleData.data && singleData.data[0].attributes.seo;

  const title: string =
    lang === Languages.ENGLISH ? metadata.title : metadata.arTitle;
  const description: string =
    lang === Languages.ENGLISH ? metadata.description : metadata.arDescription;

  return {
    title: `${title} - ${description}`,
    description: description,
    openGraph: {
      title: `${title} - ${description}`,
      description: description,
      images: [
        {
          url: getStrapiURL(metadata.icon.data.attributes.url),
        },
      ],
    },
    twitter: {
      title: `${title} - ${description}`,
      description: description,
      images: [
        {
          url: getStrapiURL(metadata.icon.data.attributes.url),
        },
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug, id } = params;

  const requests: any[] = [
    list(getSectionsParamsBySlug(Slugs.HEADER, 1, lang)),
    list(getSectionsParamsBySlug(Slugs.FOOTER, 1, lang)),
    list(getPostsParams({}, { start: 0, limit: 4 }, lang)),
  ];

  if (slug === "news") {
    requests.push(
      list(getPostsParams({ slug: id }, { start: 0, limit: 1 }, lang)),
      list(getPostsParams({ slug: { $ne: id } }, { start: 0, limit: 4 }, lang))
    );
  }

  if (slug === "products") {
    requests.push(
      list(getProductsParams({ slug: id }, { start: 0, limit: 1 }, lang)),
      list(
        getProductsParams({ slug: { $ne: id } }, { start: 0, limit: 3 }, lang)
      )
    );
  }

  const [headerSections, footerSections, posts, singleData, relatedProducts] =
    await Promise.all(requests);

  const listings: IListingItem[] = [{ name: "posts", result: posts }];

  const renderTemplateContent = (): React.ReactNode => {
    if (!singleData || (singleData && !singleData.data)) return <NotFound />;

    if (slug === "news")
      return (
        <PostSections
          data={singleData.data[0]}
          relatedPosts={relatedProducts}
        />
      );

    if (slug === "products")
      return (
        <ProductSections
          data={singleData.data[0]}
          relatedProducts={relatedProducts}
        />
      );

    return null;
  };

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header activePage={slug} data={headerSections.data} locale={lang} />
      )}
      {slug === "products" && (
        <Breadcrumb
          page={singleData.data[0].attributes}
          archive={{ name: "Products", arName: "المنتجات", slug: "products" }}
          locale={lang}
        />
      )}
      {slug === "news" && (
        <Breadcrumb
          page={singleData.data[0].attributes}
          archive={{ name: "News", arName: "الأخبار", slug: "news" }}
          locale={lang}
        />
      )}
      <main>{renderTemplateContent()}</main>
      <SectionsRenderer
        sections={footerSections}
        listings={listings}
        activePage={slug}
        locale={lang}
      />
      <ScrollTop />
      <WhatsAppChat />
      <MainSnackbar />
    </>
  );
}
