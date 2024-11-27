import { Box, Typography } from "@mui/material";
import LinkWrap from "../link-wrap";
import { Locale } from "@/types/locale";
import { Languages } from "@/enums/languages";

interface Props {
  item: any;
  isLast: boolean;
  locale: Locale;
}

const CategoryItem: React.FC<Props> = ({ item, isLast, locale }) => {
  const catName: string =
    locale === Languages.ENGLISH ? item.name : item.arName;
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
        <LinkWrap href={"/blog/?category=" + item.slug}>{catName}</LinkWrap>
      </Typography>
      {!isLast && (
        <Box component="span" display={"inline-flex"} ml={"1px"} mx={"4px"}>
          -
        </Box>
      )}
    </>
  );
};

export default CategoryItem;
