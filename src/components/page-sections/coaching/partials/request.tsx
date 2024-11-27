import { Box, Button, Container, Typography } from "@mui/material";

import RichTextBlocks from "@/components/rich-text-blocks";
import useResponsive from "@/hooks/useResponsive";
import { MD_UP_PARAMS } from "@/constants/media-queries";
import LinkWrap from "@/components/link-wrap";

interface Props {
  data: any;
}

const Request: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box py={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"} textAlign={"center"}>
      <Container>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          {data.heading}
        </Typography>
        <Box mb={{ xs: 2, md: 4 }}>
          {data.description.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Box>
        <LinkWrap href={data.button.url}>
          <Button variant="contained" size="large">
            {data.button.text}
          </Button>
        </LinkWrap>
      </Container>
    </Box>
  );
};

export default Request;
