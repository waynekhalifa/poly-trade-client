import Header from "../components/header";
import Section from "../components/section";
import MainSnackbar from "../components/main-snackbar";
import { FALLBACK_SEO } from "../utils/constants";
import { getStrapiURL } from "../utils/api-helpers";
import { IListingItem, IListingParams } from "../types/api";
import { list } from "../services/list";
import { SortOrders } from "../enums/sort-orders";
import {
  pagesPopulates,
  postsPopulates,
  sectionsPopulates,
} from "../constants/populates";
import Breadcrumb from "../components/breadcrumb";

const headerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "header" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 1 },
  locale: "en",
};
const footerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "footer" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 1 },
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
const blogPostsParams: IListingParams = {
  path: "/posts",
  sort: { createdAt: SortOrders.DESC },
  filters: {},
  populate: postsPopulates,
  pagination: { start: 0, limit: 9 },
  locale: "en",
};
const categoriesParams: IListingParams = {
  path: "/categories",
  sort: { createdAt: SortOrders.DESC },
  filters: {},
  populate: {},
  pagination: { start: 0, limit: 100 },
  locale: "en",
};

type Props = { params: { slug: string }; searchParams: any };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug } = params;

  const pagesParams: IListingParams = {
    path: "/pages",
    sort: { createdAt: SortOrders.ASC },
    filters: { slug },
    populate: pagesPopulates,
    pagination: { start: 0, limit: 1 },
    locale: "en",
  };

  const page = await list(pagesParams);

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
  const { slug } = params;

  const pagesParams: IListingParams = {
    path: "/pages",
    sort: { createdAt: SortOrders.ASC },
    filters: { slug },
    populate: pagesPopulates,
    pagination: { start: 0, limit: 1 },
    locale: "en",
  };
  const pageSectionsParams: IListingParams = {
    path: "/sections",
    sort: { precedence: SortOrders.ASC },
    filters: { slug },
    populate: sectionsPopulates,
    pagination: { start: 0, limit: 100 },
    locale: "en",
  };

  const requests: any[] = [
    list(headerSectionsParams),
    list(footerSectionsParams),
    list(pageSectionsParams),
    list(recentPostsParams),
    list(pagesParams),
  ];

  if (slug === "news")
    requests.push(list(blogPostsParams), list(categoriesParams));

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

  const renderContent = (): React.ReactNode => {
    return (
      <main>
        {sections.data.map((item: any) => (
          <Section
            key={item.id}
            data={item.attributes}
            listings={listings}
            activePage={slug}
            searchParams={searchParams}
            session={null}
          />
        ))}
      </main>
    );
  };

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

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header data={headerSections.data} activePage={slug} />
      )}
      <Breadcrumb page={pages.data[0].attributes} />
      {renderContent()}
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
