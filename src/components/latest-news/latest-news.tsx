import { Grid } from "@mui/material";

import PostCard from "../post-card";
import { IListingItem } from "@/types/api";

interface Props {
  listings: IListingItem[];
}

const LatestNews: React.FC<Props> = ({ listings }) => {
  const posts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "posts"
  );

  return (
    <>
      {posts && posts.result.data.length > 0 && (
        <Grid container spacing={2}>
          {posts.result.data.map((item: any) => (
            <Grid item key={item.id} xs={12} md={3}>
              <PostCard post={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default LatestNews;
