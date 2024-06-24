import { Button, ButtonGroup, Grid, List, Typography } from "@mui/material";
import PostCard from "../post-card";
import { ArrowForwardIos, Close, Launch } from "@mui/icons-material";
import { IListingItem } from "@/app/types/api";
import BlogSearchForm from "../blog-search-form";
import LinkWrap from "../link-wrap";
import { calculatePages } from "@/app/utils/calculate-pages";
import { navigateInternal } from "@/app/utils/navigate";

interface Props {
  listings: IListingItem[];
  searchParams: any;
}

const BlogPosts: React.FC<Props> = ({ listings, searchParams }) => {
  const blogPosts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "blogPosts"
  );
  const categories: IListingItem | undefined = listings.find(
    (item: any) => item.name === "categories"
  );

  const total: number = blogPosts?.result.meta.pagination.total;
  const limit: number = blogPosts?.result.meta.pagination.limit;
  let hasPrev: boolean = false;
  let hasNext: boolean = true;

  if (searchParams["page"]) {
    hasPrev = parseInt(searchParams["page"]) * limit >= total;
    hasNext = parseInt(searchParams["page"]) * limit <= total;
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={9}>
        {searchParams["search"] && (
          <Grid container alignItems={"center"} gap={1} mb={{ xs: 2, md: 3 }}>
            <Typography variant="h4" component="span" fontWeight={700}>
              Search result for:
            </Typography>
            <Typography
              component="span"
              variant="h4"
              sx={{ textDecoration: "underline" }}
            >
              {searchParams["search"]}
            </Typography>
            <LinkWrap href="/news">
              <Close sx={{ color: "primary.main" }} />
            </LinkWrap>
          </Grid>
        )}
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
            {hasPrev && (
              <Button
                sx={{ maxWidth: 32 }}
                onClick={() =>
                  navigateInternal(
                    `/news?page=${(parseInt(searchParams["page"]) || 1) - 1}`
                  )
                }
              >
                <ArrowForwardIos
                  fontSize="small"
                  sx={{ transform: "rotate(180deg) scale(.6)" }}
                />
              </Button>
            )}
            {Array.from({ length: 2 }, (_, index) => index).map(
              (item: number) => (
                <Button
                  key={item}
                  disabled={(parseInt(searchParams["page"]) || 1) === item + 1}
                  sx={{
                    "&.Mui-disabled": {
                      borderColor: "primary.main",
                      cursor: "not-allowed",
                      pointerEvents: "initial",
                      color: "primary.main",
                    },
                  }}
                  onClick={() =>
                    navigateInternal(
                      item + 1 > 1 ? `/news?page=${item + 1}` : "/news"
                    )
                  }
                >
                  {item + 1}
                </Button>
              )
            )}
            {hasNext && (
              <Button
                sx={{ maxWidth: 32 }}
                onClick={() =>
                  navigateInternal(
                    `/news?page=${(parseInt(searchParams["page"]) || 1) + 1}`
                  )
                }
              >
                <ArrowForwardIos
                  fontSize="small"
                  sx={{ transform: "scale(.6)" }}
                />
              </Button>
            )}
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
