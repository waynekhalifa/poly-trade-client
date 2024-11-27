import RichTextBlocks from "@/components/rich-text-blocks";
import { Box, Container } from "@mui/material";

interface Props {
  content: any;
}

const Experience: React.FC<Props> = ({ content }) => {
  return (
    <Box py={{ xs: 4, md: 6 }} bgcolor={"#f8fafc"}>
      <Container>
        {content.aboutExperiences.map((item: any, index: number) => (
          <RichTextBlocks key={index} element={item} />
        ))}
      </Container>
    </Box>
  );
};

export default Experience;
