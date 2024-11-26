import { Grid } from "@mui/material";
import ServiceItem from "./service-item";

interface Props {
  listing: any;
}

const WhatWeOffer: React.FC<Props> = ({ listing }) => {
  return (
    <Grid container spacing={3} mt={4}>
      {listing.data.map((item: any) => (
        <Grid key={item.id} item xs={12} md={4}>
          <ServiceItem data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default WhatWeOffer;
