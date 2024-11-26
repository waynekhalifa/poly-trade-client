import { Box, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";

interface Props {
  item: any;
  isLast: boolean;
}

const CategoryItem: React.FC<Props> = ({ item, isLast }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant="body2"
        color={"text.secondary"}
        textAlign={"center"}
        textTransform={"uppercase"}
        display="flex"
        alignItems={"center"}
        sx={{
          "&:hover": { color: "primary.main" },
        }}
      >
        <LinkWrap href={"/blog/?category=" + item.slug}>{item.name}</LinkWrap>
      </Typography>
      {!isLast && (
        <Box component="span" display={"inline-flex"} ml={"1px"} mr={"4px"}>
          ,
        </Box>
      )}
    </>
  );
};

export default CategoryItem;
