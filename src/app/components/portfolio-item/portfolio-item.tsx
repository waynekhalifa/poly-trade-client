import { Box, Button, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
}

const PortfolioItem: React.FC<Props> = ({ data }) => {
  const { category, name, link } = data;

  return (
    <Box
      position={"relative"}
      height={{ xs: 240, md: 320 }}
      mb={{ xs: 3, md: 4 }}
    >
      <Box position={"absolute"} bottom={0} left={0} width={1} p={3}>
        <Typography color="primary.main" gutterBottom component={"h2"}>
          {category}
        </Typography>
        <Typography
          color="common.white"
          paragraph
          component={"p"}
          variant="h4"
          fontWeight={700}
        >
          {name}
        </Typography>
        <LinkWrap href={link}>
          <Button variant="contained" size="small">
            read more
          </Button>
        </LinkWrap>
      </Box>
    </Box>
  );
};

export default PortfolioItem;
