import { Grid, List, Typography } from "@mui/material";
import SocialLink from "../social-link";

interface Props {
  data: any;
}

const SocialIcons: React.FC<Props> = ({ data }) => {
  const { links, text, alignment, margin } = data;

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={{
        xs: alignment ? alignment.xs : "center",
        sm: alignment ? alignment.sm : "center",
        md: alignment ? alignment.md : "flex-end",
        lg: alignment ? alignment.lg : "flex-end",
      }}
      mt={{
        xs: margin && margin.top ? margin.top.xs : 0,
        sm: margin && margin.top ? margin.top.sm : 0,
        md: margin && margin.top ? margin.top.md : 0,
        lg: margin && margin.top ? margin.top.lg : 0,
      }}
      mb={{
        xs: margin && margin.bottom ? margin.bottom.xs : 0,
        sm: margin && margin.bottom ? margin.bottom.sm : 0,
        md: margin && margin.bottom ? margin.bottom.md : 0,
        lg: margin && margin.bottom ? margin.bottom.lg : 0,
      }}
      ml={{
        xs: margin && margin.left ? margin.left.xs : 0,
        sm: margin && margin.left ? margin.left.sm : 0,
        md: margin && margin.left ? margin.left.md : 0,
        lg: margin && margin.left ? margin.left.lg : 0,
      }}
      mr={{
        xs: margin && margin.right ? margin.right.xs : 0,
        sm: margin && margin.right ? margin.right.sm : 0,
        md: margin && margin.right ? margin.right.md : 0,
        lg: margin && margin.right ? margin.right.lg : 0,
      }}
    >
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
            bgcolor={"primary.main"}
          >
            <SocialLink data={item} />
          </Grid>
        ))}
      </List>
    </Grid>
  );
};

export default SocialIcons;
