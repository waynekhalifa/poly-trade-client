import { IListingItem } from "@/types/api";
import LatestPosts from "../latest-posts";
import BlogPosts from "../blog-posts";
import Products from "../products";
import LatestNews from "../latest-news";

interface Props {
  data: any;
  listings: IListingItem[];
  searchParams: any;
}

const Listing: React.FC<Props> = ({ data, listings, searchParams }) => {
  const { sectionName } = data;

  if (sectionName === "latest-posts")
    return <LatestPosts listings={listings} />;

  if (sectionName === "latest-news") return <LatestNews listings={listings} />;

  if (sectionName === "blog-listing")
    return <BlogPosts listings={listings} searchParams={searchParams} />;

  if (sectionName === "product-listing")
    return <Products listings={listings} searchParams={searchParams} />;

  return <>Should render listing</>;
};

export default Listing;
