import { IListingItem } from "@/types/api";
import PostItem from "./post-item";
import { Locale } from "@/types/locale";

interface Props {
  listings: IListingItem[];
  locale: Locale;
}

const LatestPosts: React.FC<Props> = ({ listings, locale }) => {
  const posts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "posts"
  );

  return (
    <>
      {posts &&
        posts.result.data.length > 0 &&
        posts.result.data.map((item: any) => (
          <PostItem key={item.id} data={item.attributes} locale={locale} />
        ))}
    </>
  );
};

export default LatestPosts;
