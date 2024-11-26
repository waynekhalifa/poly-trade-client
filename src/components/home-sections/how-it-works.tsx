"use client";
import { Box, Container, Typography } from "@mui/material";
import useResponsive from "@/app/hooks/useResponsive";
import RichTextBlocks from "../rich-text-blocks";
import { MD_UP_PARAMS } from "@/app/constants/media-queries";

interface Props {
  content: any;
}

const HowItWorks: React.FC<Props> = ({ content }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box pt={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
      <Container>
        <Typography
          variant={mdUp ? "h5" : "h6"}
          fontWeight={700}
          mb={4}
          component={"h2"}
        >
          {content.heading}
        </Typography>
        <Box pb={2}>
          {content.content.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorks;
