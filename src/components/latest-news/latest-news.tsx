import { Grid } from "@mui/material";

import PostCard from "../post-card";
import { IListingItem } from "@/types/api";
import { Locale } from "@/types/locale";

interface Props {
  listings: IListingItem[];
  locale: Locale;
}

const LatestNews: React.FC<Props> = ({ listings, locale }) => {
  const posts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "posts"
  );

  return (
    <>
      {posts && posts.result.data.length > 0 && (
        <Grid container spacing={2}>
          {posts.result.data.map((item: any) => (
            <Grid item key={item.id} xs={12} md={3}>
              <PostCard post={item} locale={locale} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default LatestNews;
