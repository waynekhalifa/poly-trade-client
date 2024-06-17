import { Grid } from "@mui/material";
import FeaturedItem from "./featured-item";

interface Props {
  listing: any[];
}

const FeaturedProducts: React.FC<Props> = ({ listing }) => {
  return (
    <Grid container spacing={4}>
      {listing.map((item: any) => (
        <Grid key={item.id} item xs={12} md={4}>
          <FeaturedItem data={item.attributes} />
        </Grid>
      ))}
    </Grid>
  );
};

export default FeaturedProducts;
