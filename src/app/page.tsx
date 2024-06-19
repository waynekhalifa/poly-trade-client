import Header from "./components/header";
import Section from "./components/section";
import MainSnackbar from "./components/main-snackbar";
import { getStrapiURL } from "./utils/api-helpers";
import { FALLBACK_SEO } from "./utils/constants";
import { IListingParams } from "./types/api";
import { list } from "./services/list";
import { SortOrders } from "./enums/sort-orders";
import { pagesPopulates, sectionsPopulates } from "./constants/populates";

const headerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "header" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 100 },
};
const footerSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "footer" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 100 },
};
const homeSectionsParams: IListingParams = {
  path: "/sections",
  sort: { precedence: SortOrders.ASC },
  filters: { slug: "home" },
  populate: sectionsPopulates,
  pagination: { start: 0, limit: 100 },
};

export async function generateMetadata(): Promise<any> {
  const pagesParams: IListingParams = {
    path: "/pages",
    sort: { createdAt: SortOrders.ASC },
    filters: { slug: "home" },
    populate: pagesPopulates,
    pagination: { start: 0, limit: 1 },
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

export default async function Home() {
  const [headerSections, footerSections, sections] = await Promise.all([
    list(headerSectionsParams),
    list(footerSectionsParams),
    list(homeSectionsParams),
  ]);

  const renderFooterSections = () => (
    <>
      {footerSections.data.map((item: any) => (
        <Section
          key={item.id}
          data={item.attributes}
          listings={[]}
          activePage={"home"}
          searchParams={null}
          session={null}
        />
      ))}
    </>
  );

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header data={headerSections.data} activePage="home" />
      )}
      <main>
        {sections.data.map((item: any) => (
          <Section
            key={item.id}
            data={item.attributes}
            listings={[]}
            activePage={"home"}
            searchParams={null}
            session={null}
          />
        ))}
      </main>
      {footerSections.data.length === 1 ? (
        renderFooterSections()
      ) : (
        <footer>{renderFooterSections()}</footer>
      )}
      <MainSnackbar />
    </>
  );
}
