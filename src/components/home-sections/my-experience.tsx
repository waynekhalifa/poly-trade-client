"use client";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useResponsive from "@/hooks/useResponsive";
import RichTextBlocks from "../rich-text-blocks";
import { getStrapiURL } from "@/utils/api-helpers";
import { MD_UP_PARAMS } from "@/constants/media-queries";

interface Props {
  content: any;
}

const MyExperience: React.FC<Props> = ({ content }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box pb={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
      <Container>
        <Typography
          variant={mdUp ? "h5" : "h6"}
          fontWeight={700}
          mb={4}
          component={"h2"}
        >
          {content.heading}
        </Typography>
        {content.content.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <Grid container columnSpacing={3}>
          {content.partners.files.data.map((item: any) => (
            <Grid key={item.id} item xs={12} md={3}>
              <Stack alignItems={"center"} mt={2}>
                <Image
                  src={getStrapiURL(item.attributes.url)}
                  alt={item.attributes.url}
                  width={120}
                  height={120}
                />
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MyExperience;
