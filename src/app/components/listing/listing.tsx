import { IListingItem } from "@/app/types/api";
import { ISessionUser } from "@/app/types/session";
import PropertyListing from "../property-listing";
import LatestPosts from "../latest-posts";
import BlogPosts from "../blog-posts";
import Products from "../products";

interface Props {
  data: any;
  listings: IListingItem[];
  activePage: string;
  searchParams: any;
  session: ISessionUser | null;
}

const Listing: React.FC<Props> = ({
  data,
  listings,
  activePage,
  searchParams,
  session,
}) => {
  const { sectionName } = data;

  if (sectionName === "property-listing")
    return (
      <PropertyListing
        listings={listings}
        activePage={activePage}
        searchParams={searchParams}
        session={session}
      />
    );

  if (sectionName === "latest-posts")
    return <LatestPosts listings={listings} />;

  if (sectionName === "blog-listing")
    return <BlogPosts listings={listings} searchParams={searchParams} />;

  if (sectionName === "product-listing")
    return <Products listings={listings} searchParams={searchParams} />;

  return <>Should render listing</>;
};

export default Listing;
