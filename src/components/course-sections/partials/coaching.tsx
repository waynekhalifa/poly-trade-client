import { Box, Container, Typography } from "@mui/material";

import { MD_UP_PARAMS } from "@/constants/media-queries";
import useResponsive from "@/hooks/useResponsive";
import RichTextBlocks from "../../rich-text-blocks";

interface Props {
  data: any;
}

const Coaching: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
      <Container>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          {data.heading}
        </Typography>
        {data.content.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
      </Container>
    </Box>
  );
};

export default Coaching;
