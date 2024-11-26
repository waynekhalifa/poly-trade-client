import LinkWrap from "@/app/components/link-wrap";
import RichTextBlocks from "@/app/components/rich-text-blocks";
import { MD_UP_PARAMS } from "@/app/constants/media-queries";
import useResponsive from "@/app/hooks/useResponsive";
import { Box, Button, Container, Typography } from "@mui/material";

interface Props {
  data: any;
}

const Training: React.FC<Props> = ({ data }) => {
  const mdUp = useResponsive(MD_UP_PARAMS);

  return (
    <Box pt={{ xs: 4, md: 6 }} pb={{ xs: 2, md: 3 }}>
      <Container>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          {data.title}
        </Typography>
        {data.description.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <LinkWrap href={data.button.url}>
          <Button variant="contained" size="large">
            {data.button.text}
          </Button>
        </LinkWrap>
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} my={4}>
          {data.reasonHeading}
        </Typography>
        {data.reasonDescription.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
        <Typography variant={mdUp ? "h5" : "h6"} fontWeight={700} mb={4}>
          {data.audienceHeading}
        </Typography>
        {data.audienceDescription.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
      </Container>
    </Box>
  );
};

export default Training;
