import Header from "@/app/components/header";
import NotFound from "@/app/components/not-found";
import PropertySections from "@/app/components/property-sections";
import Section from "@/app/components/section";
import MainSnackbar from "@/app/components/main-snackbar";
import { FALLBACK_SEO } from "@/app/utils/constants";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { IListingItem, IListingParams } from "@/app/types/api";
import { SortOrders } from "@/app/enums/sort-orders";
import {
  propertiesPopulates,
  sectionsPopulates,
  singlePropertyPopulates,
} from "@/app/constants/populates";
import { list } from "@/app/services/list";

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

type Props = { params: { slug: string; id: string } };

export async function generateMetadata({ params }: Props): Promise<any> {
  const { slug, id } = params;
  const requests: any[] = [];

  const singlePropertiesParams: IListingParams = {
    path: "/properties",
    sort: { createdAt: SortOrders.DESC },
    filters: { slug: id },
    populate: singlePropertyPopulates,
    pagination: { start: 0, limit: 1 },
    locale: "en",
  };

  if (slug === "rent" || slug === "buy" || slug === "commercial")
    requests.push(list(singlePropertiesParams));

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
  ];

  if (slug === "rent" || slug === "buy" || slug === "commercial") {
    const singlePropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: { slug: id },
      populate: singlePropertyPopulates,
      pagination: { start: 0, limit: 1 },
      locale: "en",
    };
    const morePropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: { purpose: slug },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 4 },
      locale: "en",
    };

    requests.push(list(singlePropertiesParams), list(morePropertiesParams));
  }

  const [headerSections, footerSections, singleData, moreProperties] =
    await Promise.all(requests);

  const renderSections = (
    sections: any,
    listings: IListingItem[],
    activePage: string
  ) => (
    <>
      {sections.data.map((item: any) => (
        <Section
          key={item.id}
          data={item.attributes}
          listings={listings}
          activePage={activePage}
          searchParams={null}
          session={null}
        />
      ))}
    </>
  );

  const renderTemplateContent = (): React.ReactNode => {
    if (!singleData || (singleData && !singleData.data)) return <NotFound />;

    if (slug === "rent" || slug === "buy" || slug === "commercial")
      return (
        <PropertySections
          data={singleData.data[0]}
          moreProperties={moreProperties}
        />
      );

    return null;
  };

  return (
    <>
      {headerSections.data.length > 0 && (
        <Header activePage={slug} data={headerSections.data} />
      )}
      <main>{renderTemplateContent()}</main>
      <>
        {footerSections.data.length === 1 ? (
          renderSections(footerSections, [], slug)
        ) : (
          <footer>{renderSections(footerSections, [], slug)}</footer>
        )}
      </>
      <MainSnackbar />
    </>
  );
}
