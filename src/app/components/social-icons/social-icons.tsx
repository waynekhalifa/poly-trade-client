import { Grid, List, Typography } from "@mui/material";
import SocialLink from "../social-link";

interface Props {
  data: any;
}

const SocialIcons: React.FC<Props> = ({ data }) => {
  const { links, text } = data;

  return (
    <Grid container alignItems={"center"}>
      <Typography variant="h5" fontWeight={500} color={"common.white"}>
        {text}
      </Typography>
      <List
        disablePadding
        sx={{
          display: "flex",
          alignItems: "center",
          columnGap: 1,
        }}
      >
        {links.map((item: any) => (
          <Grid
            justifyContent={"center"}
            alignItems={"center"}
            component="li"
            key={item.id}
            lineHeight={0}
            bgcolor={"secondary.main"}
          >
            <SocialLink data={item} />
          </Grid>
        ))}
      </List>
    </Grid>
  );
};

export default SocialIcons;
