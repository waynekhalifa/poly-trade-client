import PostItem from "./post-item";

interface Props {
  listing: any[];
}

const FooterLatestPosts: React.FC<Props> = ({ listing }) => (
  <>
    {listing.map((item: any) => (
      <PostItem key={item.id} data={item.attributes} />
    ))}
  </>
);

export default FooterLatestPosts;
