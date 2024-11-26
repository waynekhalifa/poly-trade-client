import LinkWrap from "@/app/components/link-wrap";
import RichTextBlocks from "@/app/components/rich-text-blocks";
import { Box, Button, Container } from "@mui/material";

interface Props {
  content: any;
}

const Hero: React.FC<Props> = ({ content }) => {
  return (
    <Box py={{ xs: 4, md: 6 }}>
      <Container>
        <Box mb={3}>
          {content.content.map((item: any, index: number) => (
            <RichTextBlocks key={index} element={item} />
          ))}
        </Box>
        <LinkWrap href={content.actionButton.url}>
          <Button variant="contained" size="large">
            {content.actionButton.text}
          </Button>
        </LinkWrap>
      </Container>
    </Box>
  );
};

export default Hero;
