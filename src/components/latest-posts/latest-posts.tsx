import { IListingItem } from "@/types/api";
import PostItem from "./post-item";

interface Props {
  listings: IListingItem[];
}

const LatestPosts: React.FC<Props> = ({ listings }) => {
  const posts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "posts"
  );

  return (
    <>
      {posts &&
        posts.result.data.length > 0 &&
        posts.result.data.map((item: any) => (
          <PostItem key={item.id} data={item.attributes} />
        ))}
    </>
  );
};

export default LatestPosts;
