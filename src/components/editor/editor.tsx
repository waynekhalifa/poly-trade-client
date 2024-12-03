import { Box } from "@mui/material";

import removeFontFamilyStyles from "@/utils/remove-font-family";
import { getStrapiURL } from "@/utils/api-helpers";

interface Props {
  data: any;
}

const Editor: React.FC<Props> = ({ data }) => {
  const { editor, padding, margin } = data;

  return (
    <Box
      pt={{
        xs: padding && padding.top ? padding.top.xs : 0,
        sm: padding && padding.top ? padding.top.sm : 0,
        md: padding && padding.top ? padding.top.md : 0,
        lg: padding && padding.top ? padding.top.lg : 0,
      }}
      pb={{
        xs: padding && padding.bottom ? padding.bottom.xs : 0,
        sm: padding && padding.bottom ? padding.bottom.sm : 0,
        md: padding && padding.bottom ? padding.bottom.md : 0,
        lg: padding && padding.bottom ? padding.bottom.lg : 0,
      }}
      pl={{
        xs: padding && padding.left ? padding.left.xs : 0,
        sm: padding && padding.left ? padding.left.sm : 0,
        md: padding && padding.left ? padding.left.md : 0,
        lg: padding && padding.left ? padding.left.lg : 0,
      }}
      pr={{
        xs: padding && padding.right ? padding.right.xs : 0,
        sm: padding && padding.right ? padding.right.sm : 0,
        md: padding && padding.right ? padding.right.md : 0,
        lg: padding && padding.right ? padding.right.lg : 0,
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
        xs: margin && margin.left ? margin.left.xs : "auto",
        sm: margin && margin.left ? margin.left.sm : "auto",
        md: margin && margin.left ? margin.left.md : "auto",
        lg: margin && margin.left ? margin.left.lg : "auto",
      }}
      mr={{
        xs: margin && margin.right ? margin.right.xs : "auto",
        sm: margin && margin.right ? margin.right.sm : "auto",
        md: margin && margin.right ? margin.right.md : "auto",
        lg: margin && margin.right ? margin.right.lg : "auto",
      }}
      sx={{ "& p": { mt: 0 } }}
      dangerouslySetInnerHTML={{
        __html: removeFontFamilyStyles(editor).replace(
          "http://localhost:1337",
          getStrapiURL()
        ),
      }}
    />
  );
};

export default Editor;
