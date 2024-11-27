import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import RichTextBlocks from "@/components/rich-text-blocks";
import { MD_UP_PARAMS } from "@/constants/media-queries";
import useResponsive from "@/hooks/useResponsive";
import { getStrapiURL } from "@/utils/api-helpers";

interface Props {
  data: any;
}

// bgcolor={"rgba(255, 237, 74, .6)"}

const Hero: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <>
      <Box py={{ xs: 4, md: 6 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
              <Image
                src={getStrapiURL(data.thumbnail.data.attributes.url)}
                alt={data.title}
                width={240}
                height={180}
              />
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
                {data.title}
              </Typography>
              {data.introduction.map((item: any, index: number) => (
                <RichTextBlocks key={index} element={item} />
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
        <Container>
          {data.description.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Hero;
