"use client";
import Image from "next/image";
import { Box, Container, Grid } from "@mui/material";
import RichTextBlocks from "../rich-text-blocks";
import { getStrapiURL } from "@/utils/api-helpers";

interface Props {
  services: any;
}

const Services: React.FC<Props> = ({ services }) => {
  return (
    <>
      <Box py={{ xs: 4, md: 6 }}>
        <Container>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} md={6}>
              {services.servicesContent.map((item: any, index: number) => (
                <RichTextBlocks key={index} element={item} />
              ))}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                position="relative"
                height={360}
                sx={{ img: { maxWidth: "100%", height: "auto" } }}
              >
                <Image
                  src={getStrapiURL(
                    services.servicesThumbnail.data.attributes.url
                  )}
                  alt={"services"}
                  fill
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
