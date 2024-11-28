import { Button, ButtonGroup, Grid, List, Typography } from "@mui/material";
import { ArrowForwardIos, Close, Launch } from "@mui/icons-material";

import PostCard from "../post-card";
import BlogSearchForm from "../blog-search-form";
import LinkWrap from "../link-wrap";
import { IListingItem } from "@/types/api";
import { calculatePages } from "@/utils/calculate-pages";
import { navigateInternal } from "@/utils/navigate";
import { Locale } from "@/types/locale";
import { Languages } from "@/enums/languages";
import { translateStaticString } from "@/utils/translateStatic";
import { Routes } from "@/enums/routes";
import { formatNumberToArabic } from "@/utils/format-numbers-to-arabic";

interface Props {
  listings: IListingItem[];
  locale: Locale;
  searchParams: any;
}

const BlogPosts: React.FC<Props> = ({ listings, searchParams, locale }) => {
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
              {`${translateStaticString("searchResultFor", locale)}:`}
            </Typography>
            <Typography
              component="span"
              variant="h4"
              sx={{ textDecoration: "underline" }}
            >
              {searchParams["search"]}
            </Typography>
            <LinkWrap href={Routes.ROOT + locale + "/news"}>
              <Close sx={{ color: "primary.main" }} />
            </LinkWrap>
          </Grid>
        )}
        <Grid container spacing={2}>
          {blogPosts &&
            blogPosts.result.data.length > 0 &&
            blogPosts.result.data.map((item: any) => (
              <Grid item key={item.id} xs={12} md={4}>
                <PostCard post={item} locale={locale} />
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
                    Routes.ROOT +
                      locale +
                      `/news?page=${(parseInt(searchParams["page"]) || 1) - 1}`
                  )
                }
              >
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    transform:
                      locale === Languages.ENGLISH
                        ? "rotate(180deg) scale(.6)"
                        : "rotate(0deg) scale(.6)",
                  }}
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
                      item + 1 > 1
                        ? Routes.ROOT + locale + `/news?page=${item + 1}`
                        : Routes.ROOT + locale + "/news"
                    )
                  }
                >
                  {locale === Languages.ENGLISH
                    ? item + 1
                    : formatNumberToArabic(item + 1)}
                </Button>
              )
            )}
            {hasNext && (
              <Button
                sx={{ maxWidth: 32 }}
                onClick={() =>
                  navigateInternal(
                    Routes.ROOT +
                      locale +
                      `/news?page=${(parseInt(searchParams["page"]) || 1) + 1}`
                  )
                }
              >
                <ArrowForwardIos
                  fontSize="small"
                  sx={{
                    transform:
                      locale === Languages.ENGLISH
                        ? "rotate(0deg) scale(.6)"
                        : "rotate(180deg) scale(.6)",
                  }}
                />
              </Button>
            )}
          </ButtonGroup>
        )}
      </Grid>
      <Grid item xs={12} md={3}>
        <BlogSearchForm locale={locale} />
        {categories && categories.result.data.length > 0 && (
          <>
            <Typography
              fontWeight={500}
              variant="h5"
              mt={{ x: 2, md: 3 }}
              mb={{ x: 1, md: 2 }}
            >
              {translateStaticString("categories", locale)}
            </Typography>
            <List
              disablePadding
              sx={{ borderTop: "1px dashed", borderColor: "divider" }}
            >
              {categories.result.data.map((item: any) => (
                <LinkWrap
                  key={item.id}
                  href={
                    Routes.ROOT +
                    locale +
                    `/news?category=${item.attributes.slug}`
                  }
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
                  <Typography>
                    {locale === Languages.ENGLISH
                      ? item.attributes.name
                      : item.attributes.arName}
                  </Typography>
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
