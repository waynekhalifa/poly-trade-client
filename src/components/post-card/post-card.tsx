"use client";
import Image from "next/image";
import { Box, Button, List, Typography } from "@mui/material";
import { CalendarMonth, Person } from "@mui/icons-material";

import { formatDate, getStrapiURL } from "@/utils/api-helpers";
import { excerptString } from "@/utils/excerpt-string";
import LinkWrap from "../link-wrap";
import CategoryItem from "./category-item";
import { Locale } from "@/types/locale";
import { translateStaticString } from "@/utils/translateStatic";
import { Routes } from "@/enums/routes";
import { Languages } from "@/enums/languages";

interface Props {
  post: any;
  locale: Locale;
}

const PostCard: React.FC<Props> = ({ post, locale }) => {
  const {
    name,
    arName,
    slug,
    description,
    arDescription,
    categories,
    publishedAt,
    thumbnail,
    author,
  } = post.attributes;
  const { url, alternativeText } = thumbnail.data.attributes;

  const postName: string = locale === Languages.ENGLISH ? name : arName;
  const postDescription: any =
    locale === Languages.ENGLISH ? description : arDescription;
  const authorName: any =
    locale === Languages.ENGLISH
      ? author.data.attributes.name
      : author.data.attributes.arName;

  return (
    <Box
      id={`post-${post.id}`}
      alignItems={"center"}
      // borderRadius={"6px"}
      boxShadow={"0px 5px 10px 0px rgba(0, 0, 0, 0.15)"}
      sx={{
        borderStyle: "solid",
        borderWidth: "1px 1px 5px 1px",
        borderColor: "primary.main",
        img: { maxWidth: "100%", height: "auto" },
        "&:hover": { borderColor: "primary.light" },
      }}
    >
      <LinkWrap
        href={Routes.ROOT + locale + "/news/" + slug}
        sx={{ position: "relative", display: "block", height: 200 }}
      >
        <Image
          src={getStrapiURL(url)}
          alt={alternativeText ? alternativeText : name}
          fill
        />
      </LinkWrap>
      <Box p={2}>
        <List disablePadding sx={{ display: "inline-flex" }}>
          {categories.data.map((item: any, index: Number) => (
            <CategoryItem
              key={item.id}
              item={item.attributes}
              isLast={index === categories.data.length - 1}
              locale={locale}
            />
          ))}
        </List>
        <LinkWrap href={Routes.ROOT + locale + "/news/" + slug}>
          <Typography
            gutterBottom
            variant="h6"
            component={"h3"}
            fontWeight={700}
            textTransform={"capitalize"}
            minHeight={64}
          >
            {excerptString(postName, 40)}
          </Typography>
        </LinkWrap>
        <Button
          size="small"
          startIcon={
            <Person
              fontSize="small"
              sx={{ color: "primary.main", transform: "scale(.9)" }}
            />
          }
          sx={{
            p: 0,
            color: "text.secondary",
            textTransform: "capitalize",
            "&:hover": { bgcolor: "transparent" },
            "& .MuiButton-startIcon": { mr: "4px" },
          }}
        >
          {authorName}
        </Button>
        <Button
          size="small"
          startIcon={
            <CalendarMonth
              fontSize="small"
              sx={{
                color: "primary.main",
                transform: "scale(.9)",
                ml: 2,
              }}
            />
          }
          sx={{
            p: 0,
            color: "text.secondary",
            textTransform: "capitalize",
            "&:hover": { bgcolor: "transparent" },
            "& .MuiButton-startIcon": { mr: "4px" },
          }}
        >
          {formatDate(publishedAt)}
        </Button>
        <Typography
          mt={2}
          mb={3}
          color="text.secondary"
          variant="body2"
          minHeight={60}
        >
          {excerptString(postDescription[0].children[0].text, 160)}
        </Typography>
        <LinkWrap href={Routes.ROOT + locale + "/news/" + slug}>
          <Button variant="contained" size="small">
            {translateStaticString("readMore", locale)}
          </Button>
        </LinkWrap>
      </Box>
    </Box>
  );
};

export default PostCard;
