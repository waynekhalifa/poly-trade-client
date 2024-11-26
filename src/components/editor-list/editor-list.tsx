import { Box } from "@mui/material";

import stripInlineStyles from "@/utils/stripInlineStyles";

interface Props {
  data: any;
}

const EditorList: React.FC<Props> = ({ data }) => {
  const { list, padding, margin } = data;

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
    >
      {list.map((item: any) => (
        <Box
          key={item.id}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "common.white",
            fontSize: { xs: 16, md: 18 },
            fontWeight: 300,
            maxHeight: 56,
            mb: 2,
            "&:last-of-type": { mb: 0 },
            "& p": {
              "&:first-of-type": {
                width: 56,
                height: 56,
                padding: "12px",
                border: "1px solid white",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
          dangerouslySetInnerHTML={{
            __html: stripInlineStyles(item.editor),
          }}
        />
      ))}
    </Box>
  );
};

export default EditorList;
