import { Box, Grid, List, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  data: any;
  activePage: string;
}

const SupportLinks: React.FC<Props> = ({ data }) => {
  const { links } = data;

  return (
    <Grid
      container
      component={List}
      sx={{ p: 0, mb: { xs: 1, md: 0 } }}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      {links.map((item: any) => (
        <Box key={item.id} mr={2}>
          <LinkWrap href={item.url} blank={item.newTab}>
            <Typography
              variant="body2"
              color={"text.primary"}
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              {item.text}
            </Typography>
          </LinkWrap>
        </Box>
      ))}
    </Grid>
  );
};

export default SupportLinks;
