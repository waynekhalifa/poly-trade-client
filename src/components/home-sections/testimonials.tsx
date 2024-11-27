"use client";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import useResponsive from "@/hooks/useResponsive";
import RichTextBlocks from "../rich-text-blocks";
import { getStrapiURL } from "@/utils/api-helpers";
import { MD_UP_PARAMS } from "@/constants/media-queries";

interface Props {
  content: any;
}

const Testimonials: React.FC<Props> = ({ content }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }}>
      <Container>
        <Typography
          variant={mdUp ? "h5" : "h6"}
          fontWeight={700}
          mb={4}
          component={"h2"}
        >
          {content.testimonialsHeading}
        </Typography>
      </Container>
      <Container maxWidth="md">
        <Box mb={3} textAlign={"center"} sx={{ "& p": { mb: 2 } }}>
          {content.testimonials[0].content.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Box>
        <Stack alignItems={"center"}>
          <Image
            src={getStrapiURL(
              content.testimonials[0].author.data.attributes.url
            )}
            alt={content.testimonials[0].author.data.attributes.name}
            width={262}
            height={142}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Testimonials;
