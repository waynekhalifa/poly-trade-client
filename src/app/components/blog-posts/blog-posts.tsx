import { Button, ButtonGroup, Grid } from "@mui/material";
import PostCard from "../post-card";
import { ArrowForwardIos } from "@mui/icons-material";

interface Props {
  listing: any;
}

const LatestPosts: React.FC<Props> = ({ listing }) => {
  return (
    <>
      <Grid container spacing={3}>
        {listing.data.map((item: any) => (
          <Grid item key={item.id} xs={12} md={4}>
            <PostCard post={item} />
          </Grid>
        ))}
      </Grid>
      <ButtonGroup
        variant="outlined"
        aria-label="blog pagination"
        sx={{ mt: 4 }}
      >
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>
          <ArrowForwardIos fontSize="small" sx={{ transform: "scale(.7)" }} />
        </Button>
      </ButtonGroup>
    </>
  );
};

export default LatestPosts;
