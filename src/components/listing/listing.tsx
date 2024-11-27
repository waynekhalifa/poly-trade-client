import { IListingItem } from "@/types/api";
import LatestPosts from "../latest-posts";
import BlogPosts from "../blog-posts";
import Products from "../products";
import LatestNews from "../latest-news";
import { Locale } from "@/types/locale";

interface Props {
  data: any;
  locale: Locale;
  listings: IListingItem[];
  searchParams: any;
}

const Listing: React.FC<Props> = ({ data, listings, searchParams, locale }) => {
  const { sectionName } = data;

  if (sectionName === "latest-posts")
    return <LatestPosts listings={listings} locale={locale} />;

  if (sectionName === "latest-news")
    return <LatestNews listings={listings} locale={locale} />;

  if (sectionName === "blog-listing")
    return (
      <BlogPosts
        listings={listings}
        searchParams={searchParams}
        locale={locale}
      />
    );

  if (sectionName === "product-listing")
    return (
      <Products
        listings={listings}
        searchParams={searchParams}
        locale={locale}
      />
    );

  return <>Should render listing</>;
};

export default Listing;
