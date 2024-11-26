import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";
import RichTextBlocks from "../../rich-text-blocks";
import { getStrapiURL } from "@/app/utils/api-helpers";

interface Props {
  data: any;
}

const Outcome: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }}>
      <Container>
        <Grid container alignItems={"center"}>
          <Grid item xs={12} md={8}>
            <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
              {data.heading}
            </Typography>
            {data.content.map((item: any, index: number) => (
              <RichTextBlocks key={index} element={item} />
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            {data.partners.files.data.map((item: any) => (
              <Grid
                key={item.id}
                position="relative"
                justifyContent={"flex-end"}
                sx={{ img: { maxWidth: "100%", height: "auto" } }}
              >
                <Image
                  src={getStrapiURL(item.attributes.url)}
                  alt={item.attributes.url}
                  width={300}
                  height={300}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Outcome;
