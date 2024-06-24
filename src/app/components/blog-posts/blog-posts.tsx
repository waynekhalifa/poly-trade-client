import { Button, ButtonGroup, Grid, List, Typography } from "@mui/material";
import PostCard from "../post-card";
import { ArrowForwardIos, Launch } from "@mui/icons-material";
import { IListingItem } from "@/app/types/api";
import BlogSearchForm from "../blog-search-form";
import LinkWrap from "../link-wrap";
import { calculatePages } from "@/app/utils/calculate-pages";

interface Props {
  listings: IListingItem[];
}

const BlogPosts: React.FC<Props> = ({ listings }) => {
  const blogPosts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "blogPosts"
  );
  const categories: IListingItem | undefined = listings.find(
    (item: any) => item.name === "categories"
  );

  const total: number = blogPosts?.result.meta.pagination.total;
  const limit: number = blogPosts?.result.meta.pagination.limit;

  console.log(Array.from({ length: 2 }, (_, index) => index));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        <Grid container spacing={2}>
          {blogPosts &&
            blogPosts.result.data.length > 0 &&
            blogPosts.result.data.map((item: any) => (
              <Grid item key={item.id} xs={12} md={4}>
                <PostCard post={item} />
              </Grid>
            ))}
        </Grid>
        {calculatePages(total, limit) > 1 && (
          <ButtonGroup
            variant="outlined"
            aria-label="blog pagination"
            sx={{ mt: 4 }}
          >
            {Array.from({ length: 2 }, (_, index) => index).map(
              (item: number) => (
                <LinkWrap
                  key={item}
                  href={item + 1 > 1 ? `/news?page=${item + 1}` : "/news"}
                >
                  <Button>{item + 1}</Button>
                </LinkWrap>
              )
            )}
            <Button sx={{ maxWidth: 32 }}>
              <ArrowForwardIos
                fontSize="small"
                sx={{ transform: "scale(.6)" }}
              />
            </Button>
          </ButtonGroup>
        )}
      </Grid>
      <Grid item xs={12} md={3}>
        <BlogSearchForm />
        {categories && categories.result.data.length > 0 && (
          <>
            <Typography
              fontWeight={500}
              variant="h5"
              mt={{ x: 2, md: 3 }}
              mb={{ x: 1, md: 2 }}
            >
              Categories
            </Typography>
            <List
              disablePadding
              sx={{ borderTop: "1px dashed", borderColor: "divider" }}
            >
              {categories.result.data.map((item: any) => (
                <LinkWrap
                  key={item.id}
                  href={`/news?category=${item.attributes.slug}`}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    py: 2,
                    borderBottom: "1px dashed",
                    borderColor: "divider",
                    "&:hover": {
                      color: "primary.main",
                    },
                  }}
                >
                  <Launch fontSize="small" />
                  <Typography>{item.attributes.name}</Typography>
                </LinkWrap>
              ))}
            </List>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default BlogPosts;
