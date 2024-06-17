import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Header from "../components/header";
import PageHeader from "../components/page-header";
import Section from "../components/section";
import AuthForm from "../components/auth-form";
import MainSnackbar from "../components/main-snackbar";
import { FALLBACK_SEO } from "../utils/constants";
import { getStrapiURL } from "../utils/api-helpers";
import { ISessionUser } from "../types/session";
import { IListingItem, IListingParams } from "../types/api";
import { list } from "../services/list";
import { SortOrders } from "../enums/sort-orders";
import {
  pagesPopulates,
  propertiesPopulates,
  sectionsPopulates,
} from "../constants/populates";
import Breadcrumb from "../components/breadcrumb";

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
const propertyTypesParams: IListingParams = {
  path: "/property-types",
  sort: { createdAt: "asc" },
  filters: {},
  populate: [],
  pagination: { start: 0, limit: 100 },
};
const propertyLocationsParams: IListingParams = {
  path: "/property-locations",
  sort: { createdAt: "asc" },
  filters: {},
  populate: [],
  pagination: { start: 0, limit: 100 },
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
  const session: ISessionUser | null = cookies().get("session")?.value
    ? JSON.parse(cookies().get("session")?.value!)
    : null;

  const isAuth: boolean =
    slug === "login" ||
    slug === "register" ||
    slug === "forgot-password" ||
    slug === "email-confirmation" ||
    slug === "reset-password" ||
    slug === "company-registration";

  const isPublic: boolean =
    slug === "about-us" ||
    slug === "list-with-us" ||
    slug === "cookies-policy" ||
    slug === "terms-and-conditions" ||
    slug === "privacy-policy" ||
    slug === "sitemap" ||
    slug === "how-it-works" ||
    slug === "frequent-asked-questions";

  const pagesParams: IListingParams = {
    path: "/pages",
    sort: { createdAt: SortOrders.ASC },
    filters: { slug },
    populate: pagesPopulates,
    pagination: { start: 0, limit: 1 },
  };
  const pageSectionsParams: IListingParams = {
    path: "/sections",
    sort: { precedence: SortOrders.ASC },
    filters: { slug },
    populate: sectionsPopulates,
    pagination: { start: 0, limit: 100 },
  };

  const requests: any[] = [
    list(pagesParams),
    list(headerSectionsParams),
    list(footerSectionsParams),
    list(pageSectionsParams),
  ];

  const filters: any = {};

  if (searchParams["agent"])
    filters["agent"] = { username: searchParams["agent"] };
  if (searchParams["search"]) filters["location"] = searchParams["search"];
  if (searchParams["property-type"] && searchParams["property-type"] !== "-1")
    filters["type"] = searchParams["property-type"];
  if (searchParams["bedrooms"] && searchParams["bedrooms"] !== "-1")
    filters["bed"] = searchParams["bedrooms"];
  if (searchParams["bathrooms"] && searchParams["bathrooms"] !== "-1")
    filters["bath"] = searchParams["bathrooms"];

  if (slug === "rent" || slug === "buy" || slug === "commercial") {
    const featuredPropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: { featured: true, purpose: slug, ...filters },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 2 },
    };
    const nonFeaturedPropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: { featured: false, purpose: slug, ...filters },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 10 },
    };

    requests.push(
      list(featuredPropertiesParams),
      list(nonFeaturedPropertiesParams),
      list(propertyTypesParams),
      list(propertyLocationsParams)
    );
  }

  if (slug === "terms-and-conditions" && !searchParams["tab"]) {
    redirect("/terms-and-conditions?tab=for-users");
  }

  if (slug === "how-it-works" && !searchParams["tab"]) {
    redirect("/how-it-works?tab=for-users");
  }

  if (slug === "my-account") {
    if (!session) redirect("/");

    const favoritePropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: {
        ...filters,
        fav_users: { username: session.username },
      },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 10 },
    };
    const contactedPropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: {
        ...filters,
        contacted_users: { username: session.username },
      },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 10 },
    };
    const brokerPropertiesParams: IListingParams = {
      path: "/properties",
      sort: { createdAt: SortOrders.DESC },
      filters: {
        ...filters,
        agent: { username: session.username },
      },
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 10 },
    };

    const savedSearchesParams: IListingParams = {
      path: "/searches",
      sort: { createdAt: SortOrders.DESC },
      filters: { users: { username: session.username } },
      populate: ["users"],
      pagination: { start: 0, limit: 10 },
    };

    const singlePropertyParams: IListingParams = {
      path: "/properties/" + searchParams["id"],
      sort: { createdAt: SortOrders.DESC },
      filters: {},
      populate: propertiesPopulates,
      pagination: { start: 0, limit: 10 },
    };

    requests.push(
      list(favoritePropertiesParams),
      list(contactedPropertiesParams),
      list(brokerPropertiesParams),
      list(savedSearchesParams),
      list(singlePropertyParams),
      list(propertyTypesParams),
      list(propertyLocationsParams)
    );
  }

  const [
    page,
    headerSections,
    footerSections,
    sections,
    featuredOrFavorite,
    nonFeaturedOrContacted,
    propertyTypesOrBrokerProperties,
    propertyLocationsOrSavedSearches,
    singleProperty,
    propertyTypes,
    propertyLocations,
  ] = await Promise.all(requests);

  const renderContent = (): React.ReactNode => {
    if (isAuth) return <AuthForm slug={slug} code={searchParams["code"]} />;

    const listings: IListingItem[] = [
      { name: "singleProperty", result: singleProperty },
      { name: "featuredOrFavorite", result: featuredOrFavorite },
      { name: "nonFeaturedOrContacted", result: nonFeaturedOrContacted },
      {
        name: "propertyTypesOrBrokerProperties",
        result: propertyTypesOrBrokerProperties,
      },
      {
        name: "propertyLocationsOrSavedSearches",
        result: propertyLocationsOrSavedSearches,
      },
      {
        name: "propertyTypes",
        result: propertyTypes,
      },
      {
        name: "propertyLocations",
        result: propertyLocations,
      },
    ];

    return (
      <main>
        {sections.data.map((item: any) => (
          <Section
            key={item.id}
            data={item.attributes}
            listings={listings}
            activePage={slug}
            searchParams={searchParams}
            session={session}
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
          listings={[]}
          activePage={slug}
          searchParams={null}
          session={null}
        />
      ))}
    </>
  );

  return (
    <>
      {!isAuth && headerSections.data.length > 0 && (
        <Header
          data={headerSections.data}
          session={session}
          activePage={slug}
        />
      )}
      {!isAuth && !isPublic && page.data.length > 0 && (
        <PageHeader
          page={page.data[0].attributes}
          searchParams={searchParams}
          listings={[
            { name: "propertyTypes", result: propertyTypesOrBrokerProperties },
          ]}
        />
      )}
      {isPublic && <Breadcrumb page={page.data[0].attributes} />}
      {renderContent()}
      {!isAuth && (
        <>
          {footerSections.data.length === 1 ? (
            renderFooterSections()
          ) : (
            <footer>{renderFooterSections()}</footer>
          )}
        </>
      )}
      {/* <MainModal /> */}
      <MainSnackbar />
    </>
  );
}
