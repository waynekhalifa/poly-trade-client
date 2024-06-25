import { Button, ButtonGroup, Grid } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";

import { IListingItem } from "@/app/types/api";
import { calculatePages } from "@/app/utils/calculate-pages";
import { navigateInternal } from "@/app/utils/navigate";
import ProductCard from "./product-card";

interface Props {
  listings: IListingItem[];
  searchParams: any;
}

const Products: React.FC<Props> = ({ listings, searchParams }) => {
  const blogPosts: IListingItem | undefined = listings.find(
    (item: any) => item.name === "blogPosts"
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
    <>
      <Grid container spacing={4}>
        {blogPosts &&
          blogPosts.result.data.length > 0 &&
          blogPosts.result.data.map((item: any) => (
            <Grid item key={item.id} xs={12} md={4}>
              <ProductCard product={item} />
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
    </>
  );
};

export default Products;
