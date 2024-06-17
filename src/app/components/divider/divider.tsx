import { Divider as MuiDivider } from "@mui/material";

interface Props {
  data: any;
}

const Divider: React.FC<Props> = ({ data }) => {
  const { width, height, bStyle, bColor, orientation, margin } = data;

  return (
    <MuiDivider
      orientation={orientation}
      // mt={{

      // }}
      // mb={{
      //   xs: margin && margin.bottom ? margin.bottom.xs : 0,
      //   sm: margin && margin.bottom ? margin.bottom.sm : 0,
      //   md: margin && margin.bottom ? margin.bottom.md : 0,
      //   lg: margin && margin.bottom ? margin.bottom.lg : 0,
      // }}
      // ml={{
      //   xs: margin && margin.left ? margin.left.xs : "auto",
      //   sm: margin && margin.left ? margin.left.sm : "auto",
      //   md: margin && margin.left ? margin.left.md : "auto",
      //   lg: margin && margin.left ? margin.left.lg : "auto",
      // }}
      // mr={{
      //   xs: margin && margin.right ? margin.right.xs : "auto",
      //   sm: margin && margin.right ? margin.right.sm : "auto",
      //   md: margin && margin.right ? margin.right.md : "auto",
      //   lg: margin && margin.right ? margin.right.lg : "auto",
      // }}
      sx={{
        width,
        borderColor: bColor,
        // borderWidth: height - 1,
        borderStyle: bStyle,
        mt: {
          xs: margin && margin.top ? margin.top.xs : 0,
          sm: margin && margin.top ? margin.top.sm : 0,
          md: margin && margin.top ? margin.top.md : 0,
          lg: margin && margin.top ? margin.top.lg : 0,
        },
        mb: {
          xs: margin && margin.bottom ? margin.bottom.xs : 0,
          sm: margin && margin.bottom ? margin.bottom.sm : 0,
          md: margin && margin.bottom ? margin.bottom.md : 0,
          lg: margin && margin.bottom ? margin.bottom.lg : 0,
        },
        ml: {
          xs: margin && margin.left ? margin.left.xs : 0,
          sm: margin && margin.left ? margin.left.sm : 0,
          md: margin && margin.left ? margin.left.md : 0,
          lg: margin && margin.left ? margin.left.lg : 0,
        },
        mr: {
          xs: margin && margin.right ? margin.right.xs : 0,
          sm: margin && margin.right ? margin.right.sm : 0,
          md: margin && margin.right ? margin.right.md : 0,
          lg: margin && margin.right ? margin.right.lg : 0,
        },
      }}
    />
  );
};

export default Divider;
