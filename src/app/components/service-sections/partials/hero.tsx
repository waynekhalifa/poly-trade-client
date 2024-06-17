import Image from "next/image";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

import RichTextBlocks from "../../rich-text-blocks";
import useResponsive from "@/app/hooks/useResponsive";
import { getStrapiURL } from "@/app/utils/api-helpers";
import { MD_UP_PARAMS } from "@/app/constants/media-queries";

interface Props {
  data: any;
}

const Hero: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems={"center"}>
          <Grid item xs={12} md={4}>
            <Box>
              <Image
                src={getStrapiURL(data.thumbnail.data.attributes.url)}
                alt={data.name}
                width={360}
                height={240}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
              {data.name}
            </Typography>
            {data.description.map((item: any, index: number) => (
              <RichTextBlocks key={index} element={item} />
            ))}
          </Grid>
        </Grid>
        <Grid container columnGap={2} mt={{ xs: 3, md: 4 }}>
          <Button variant="contained" size="large">
            Get in touch today
          </Button>
          <Button variant="contained" color="secondary" size="large">
            Request a free consultation
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
