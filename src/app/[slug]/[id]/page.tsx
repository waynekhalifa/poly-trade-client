import Header from "@/app/components/header";
import NotFound from "@/app/components/not-found";
import Section from "@/app/components/section";
import MainSnackbar from "@/app/components/main-snackbar";
import { FALLBACK_SEO } from "@/app/utils/constants";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { IListingItem, IListingParams } from "@/app/types/api";
import { SortOrders } from "@/app/enums/sort-orders";
import {
  postsPopulates,
  productsPopulates,
  sectionsPopulates,
} from "@/app/constants/populates";
import { list } from "@/app/services/list";
import Breadcrumb from "@/app/components/breadcrumb";
import ProductSections from "@/app/components/product-sections";
import PostSections from "@/app/components/post-sections";

const headerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "header" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 100 },
  locale: "en",
};
const footerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "footer" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 100 },
  locale: "en",
};
const recentPostsParams: IListingParams = {
  path: "/posts",
  sort: { createdAt: SortOrders.DESC },
  filters: {},
  populate: postsPopulates,
  pagination: { start: 0, limit: 4 },
  locale: "en",
};

type Props = { params: { slug: string; id: string } };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug, id } = params;
  const requests: any[] = [];

  const singleProductParams: IListingParams = {
    path: "/products",
    sort: { createdAt: SortOrders.DESC },
    filters: { slug: id },
    populate: productsPopulates,
    pagination: { start: 0, limit: 1 },
    locale: "en",
  };
  const singlePostParams: IListingParams = {
    path: "/posts",
    sort: { createdAt: SortOrders.DESC },
    filters: { slug: id },
    populate: postsPopulates,
    pagination: { start: 0, limit: 1 },
    locale: "en",
  };

  if (slug === "news") requests.push(list(singlePostParams));
  if (slug === "products") requests.push(list(singleProductParams));

  const [singleData] = await Promise.all(requests);

  if (
    !singleData ||
    (singleData && !singleData.data) ||
    (singleData.data && !singleData.data[0].attributes?.seo)
  )
    return FALLBACK_SEO;

  const metadata =
    singleData && singleData.data && singleData.data[0].attributes.seo;

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

export default async function Page({ params }: Props) {
  const { slug, id } = params;

  const requests: any[] = [
    list(headerSectionsParams),
    list(footerSectionsParams),
    list(recentPostsParams),
  ];

  if (slug === "news") {
    const singlePostParams: IListingParams = {
      path: "/posts",
      sort: { createdAt: SortOrders.DESC },
      filters: { slug: id },
      populate: postsPopulates,
      pagination: { start: 0, limit: 1 },
      locale: "en",
    };

    const relatedPostsParams: IListingParams = {
      path: "/posts",
      sort: { createdAt: SortOrders.DESC },
      filters: { slug: { $ne: id } },
      populate: postsPopulates,
      pagination: { start: 0, limit: 4 },
      locale: "en",
    };

    requests.push(list(singlePostParams), list(relatedPostsParams));
  }

  if (slug === "products") {
    const singleProductParams: IListingParams = {
      path: "/products",
      sort: { createdAt: SortOrders.DESC },
      filters: { slug: id },
      populate: productsPopulates,
      pagination: { start: 0, limit: 1 },
      locale: "en",
    };

    const relatedProductsParams: IListingParams = {
      path: "/products",
      sort: { createdAt: SortOrders.DESC },
      filters: { slug: { $ne: id } },
      populate: productsPopulates,
      pagination: { start: 0, limit: 3 },
      locale: "en",
    };

    requests.push(list(singleProductParams), list(relatedProductsParams));
  }

  const [headerSections, footerSections, posts, singleData, relatedProducts] =
    await Promise.all(requests);

  const listings: IListingItem[] = [{ name: "posts", result: posts }];

  const renderFooterSections = () => (
    <>
      {footerSections.data.map((item: any) => (
        <Section
          key={item.id}
          data={item.attributes}
          listings={listings}
          activePage={slug}
          searchParams={null}
          session={null}
        />
      ))}
    </>
  );

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
        <Header activePage={slug} data={headerSections.data} />
      )}
      {slug === "products" && (
        <Breadcrumb
          page={singleData.data[0].attributes}
          archive={{ name: "Products", slug: "products" }}
        />
      )}
      {slug === "news" && (
        <Breadcrumb
          page={singleData.data[0].attributes}
          archive={{ name: "New", slug: "news" }}
        />
      )}
      <main>{renderTemplateContent()}</main>
      {footerSections.data.length > 0 && (
        <>
          {footerSections.data.length === 1 ? (
            renderFooterSections()
          ) : (
            <footer>{renderFooterSections()}</footer>
          )}
        </>
      )}
      <MainSnackbar />
    </>
  );
}
